import { useEffect, useRef, RefObject } from 'react';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

interface UsePDFCanvasProps {
    blobUrl?: string;
    page?: number;
    scale?: number;
}

const usePDFCanvas = ({ blobUrl, page = 1, scale = 1.5 }: UsePDFCanvasProps): RefObject<HTMLCanvasElement> => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!blobUrl) {
            const canvas = canvasRef.current;
            if (canvas) {
                const ctx = canvas.getContext('2d');
                if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
            return;
        }

        let canceled = false;
        const loadingTask = pdfjs.getDocument(blobUrl);

        loadingTask.promise
            .then((pdf) => pdf.getPage(page))
            .then((pdfPage) => {
                if (canceled) return;

                const viewport = pdfPage.getViewport({ scale });
                const canvas = canvasRef.current;
                if (!canvas) return;

                const context = canvas.getContext('2d');
                if (!context) return;

                canvas.width = viewport.width;
                canvas.height = viewport.height;

                pdfPage.render({ canvasContext: context, viewport });
            })
            .catch((error) => console.error('Error rendering PDF page:', error));

        return () => {
            canceled = true;
            if (blobUrl.startsWith('blob:')) {
                URL.revokeObjectURL(blobUrl);
            }
        };
    }, [blobUrl, page, scale]);

    return canvasRef;
};

export default usePDFCanvas;
