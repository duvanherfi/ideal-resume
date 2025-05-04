import type TemplateProps from "@resume-api/types/template/TemplateProps";
import type { Template } from "@resume-api/types/template/Template";
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
            new URL("../workers/PDFWorker.ts", import.meta.url),
            { type: "module" }
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

    useEffect(() => {
        if (!template) {
            setBlobUrl(undefined);
            return;
        }

        if (isStatic && hasGeneratedOnceRef.current && currentBlobUrlRef.current) {
            return;
        }

        setLoading(true);
        let url: string | undefined;

        generatePdf(template.id, { data, theme, labels })
            .then(blob => {
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

        return () => {
            if (!isStatic && url) {
                URL.revokeObjectURL(url);
                currentBlobUrlRef.current = undefined;
            }
        };
    }, [template, data, theme, labels, generatePdf, isStatic]);

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