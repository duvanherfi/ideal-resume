import TemplateProps from "@resume-api/common/TemplateProps";
import type { Template } from "@resume-api/types";
import { useCallback, useEffect, useRef, useState } from "react";

interface WorkerMessage {
    templateId: string;
    props: TemplateProps;
}

type WorkerData = {
    success: boolean;
    blob?: Blob;
    error?: string;
}

interface UsePDFWorkerProps extends TemplateProps {
    template?: Template | null;
    isStatic?: boolean;
}

type PDFWorkerType = {
    blobUrl: string | undefined;
    loading: boolean;
}

const usePDFWorker = ({ template, data, theme, labels, isStatic = false }: UsePDFWorkerProps): PDFWorkerType => {
    const workerRef = useRef<Worker>();
    const [blobUrl, setBlobUrl] = useState<string>();
    const [loading, setLoading] = useState(false);
    const currentBlobUrlRef = useRef<string>();
    const hasGeneratedOnceRef = useRef<boolean>(false);

    useEffect(() => {
        workerRef.current = new Worker(
            new URL('../workers/PDFWorker.ts', import.meta.url),
            { type: 'module' }
        );
        return () => {
            workerRef.current?.terminate();
        };
    }, []);

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
    // A menos que isStatic sea true y ya hayamos generado una vez
    useEffect(() => {
        // Si no hay template, no hay nada que generar
        if (!template) {
            setBlobUrl(undefined);
            return;
        }

        // Si es estático y ya hemos generado una vez, no hacemos nada
        if (isStatic && hasGeneratedOnceRef.current && currentBlobUrlRef.current) {
            return;
        }

        setLoading(true);
        let url: string | undefined;

        generatePdf(template.id, { data, theme, labels })
            .then(blob => {
                // Si había una URL previa y estamos generando una nueva, revocamos la anterior
                if (currentBlobUrlRef.current && !isStatic) {
                    URL.revokeObjectURL(currentBlobUrlRef.current);
                }

                url = URL.createObjectURL(blob);
                currentBlobUrlRef.current = url;
                setBlobUrl(url);
                hasGeneratedOnceRef.current = true;
            })
            .catch(err => {
                console.error("Error generando PDF:", err);
            })
            .finally(() => {
                setLoading(false);
            });

        // Solo limpiamos si no es estático o si estamos desmontando el componente
        return () => {
            if (!isStatic && url) {
                URL.revokeObjectURL(url);
                currentBlobUrlRef.current = undefined;
            }
        };
    }, [template, data, theme, labels, generatePdf, isStatic]);

    // Garantizar que se limpian los recursos cuando se desmonta el componente
    useEffect(() => {
        return () => {
            if (currentBlobUrlRef.current) {
                URL.revokeObjectURL(currentBlobUrlRef.current);
                currentBlobUrlRef.current = undefined;
            }
        };
    }, []);

    return { blobUrl, loading };
}

export default usePDFWorker;