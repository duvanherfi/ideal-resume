import { useCallback, useEffect, useRef, useState } from "react";
import TemplateProps from "../common/TemplateProps";
import type { Template } from "../types";

interface WorkerMessage {
    templateId: string;
    props: TemplateProps;
}

type WorkerData = {
    success: boolean;
    blob?: Blob;
    error?: string;
}

interface UsePdfPreviewProps extends TemplateProps {
    template?: Template | null;
}

function usePdfPreview({ template, data, theme, labels, }: UsePdfPreviewProps) {
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
                const worker = workerRef.current;
                if (!worker) return reject(new Error("Worker no inicializado"));
                const onMsg = (e: MessageEvent) => {
                    worker.removeEventListener("message", onMsg);
                    const { success, blob, error } = e.data as WorkerData;
                    success ? resolve(blob!) : reject(new Error(error));
                };
                worker.addEventListener("message", onMsg);
                worker.postMessage({ templateId, props });
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
                console.error("Error generando PDF:", err);
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