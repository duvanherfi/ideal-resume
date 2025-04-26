// src/hooks/usePdfPreview.ts
import { useCallback, useEffect, useRef, useState } from 'react';
import TemplateProps from '../common/TemplateProps';
import type { Template } from '../types';

interface WorkerMessage {
    templateId: string;
    props: TemplateProps;
}

function usePdfPreview({
    template,
    data,
    theme,
    labels,
}: {
    template?: Template | null;
    data: TemplateProps['data'];
    theme?: TemplateProps['theme'];
    labels: TemplateProps['labels'];
}) {
    const workerRef = useRef<Worker>();
    const [blobUrl, setBlobUrl] = useState<string>();
    const [loading, setLoading] = useState(false);

    // Inicializa / termina el worker una sola vez
    useEffect(() => {
        workerRef.current = new Worker(
            new URL('../workers/pdfWorker.ts', import.meta.url),
            { type: 'module' }
        );
        return () => {
            workerRef.current?.terminate();
        };
    }, []);

    // Función que envía el mensaje al Worker
    const generatePdf = useCallback(
        (templateId: string, props: TemplateProps) =>
            new Promise<Blob>((resolve, reject) => {
                const w = workerRef.current;
                if (!w) return reject(new Error('Worker no inicializado'));
                const onMsg = (e: MessageEvent) => {
                    w.removeEventListener('message', onMsg);
                    const { success, blob, error } = e.data as {
                        success: boolean;
                        blob?: Blob;
                        error?: string;
                    };
                    success ? resolve(blob!) : reject(new Error(error));
                };
                w.addEventListener('message', onMsg);
                w.postMessage({ templateId, props });
            }),
        []
    );

    // Efecto que dispara la generación cada vez que cambian template/data/…
    useEffect(() => {
        let url: string | undefined;
        if (!template) {
            setBlobUrl(undefined);
            return;
        }
        setLoading(true);
        generatePdf(template.id, { data, theme, labels })
            .then(blob => {
                url = URL.createObjectURL(blob);
                setBlobUrl(url);
            })
            .catch(err => {
                console.error('Error generando PDF:', err);
            })
            .finally(() => {
                setLoading(false);
            });
        return () => {
            if (url) URL.revokeObjectURL(url);
        };
    }, [template, data, theme, labels, generatePdf]);

    return { blobUrl, loading };
}

export default usePdfPreview;