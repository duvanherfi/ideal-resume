// src/hooks/usePdfWorker.ts
import { useCallback, useEffect, useRef } from 'react';
import type { Template } from '../types';
import TemplateProps from '../common/TemplateProps';

interface WorkerMessage {
    templateId: string;
    props: TemplateProps;
}

export function usePdfWorker() {
    const workerRef = useRef<Worker>();

    useEffect(() => {
        workerRef.current = new Worker(
            new URL('../workers/pdfWorker.ts', import.meta.url),
            { type: 'module' }
        );
        return () => workerRef.current?.terminate();
    }, []);

    const generatePdf = useCallback(
        ({
            template,
            data,
            theme,
            labels,
        }: {
            template: Template;
            data: TemplateProps['data'];
            theme?: TemplateProps['theme'];
            labels: TemplateProps['labels'];
        }): Promise<Blob> => {
            if (!workerRef.current) {
                return Promise.reject(new Error('Worker no inicializado'));
            }

            const message: WorkerMessage = {
                templateId: template.id,
                props: { data, theme, labels },
            };

            return new Promise<Blob>((resolve, reject) => {
                const w = workerRef.current!;
                const handler = (e: MessageEvent) => {
                    const { success, blob, error } = e.data as {
                        success: boolean;
                        blob?: Blob;
                        error?: string;
                    };
                    w.removeEventListener('message', handler);
                    success ? resolve(blob!) : reject(new Error(error));
                };
                w.addEventListener('message', handler);
                w.postMessage(message);  // <-- sólo envías templateId y datos serializables
            });
        },
        []
    );

    return { generatePdf };
}
