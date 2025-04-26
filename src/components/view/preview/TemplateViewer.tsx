import { useEffect, useState } from "react";
import TemplateProps from "../../../api/common/TemplateProps";
import { usePdfWorker } from "../../../api/hooks/usePdfWorker";
import { Template } from "../../../api/types";

interface TemplateViewerProps extends TemplateProps {
    template?: Template | null;
}

const TemplateViewer = (props: TemplateViewerProps) => {
    const { data, theme, template, labels } = props;
    const { generatePdf } = usePdfWorker();

    const [blobUrl, setBlobUrl] = useState<string>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let url: string;
        if (!template) return;

        setLoading(true);

        generatePdf({ template, data, theme, labels })
            .then(blob => {
                url = URL.createObjectURL(blob);
                setBlobUrl(url);
            }).catch(err => {
                console.error('Error generando PDF:', err);
            }).finally(() => {
                setLoading(false);
            });

        return () => {
            if (url) {
                URL.revokeObjectURL(url);
            }
            setBlobUrl(undefined);
        };
    }, [template, data, theme, labels, generatePdf]);

    if (!template) return null;

    return (
        <div className="relative bg-transparent flex-shrink-0 aspect-[1/1.4142]">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/80">
                    Generando previsualización…
                </div>
            )}
            {blobUrl && (
                <iframe title={template.name} src={`${blobUrl}#toolbar=0&navpanes=0&scrollbar=0`} width="100%" height="100%" style={{ border: 'none' }} />
            )}
        </div>
    );
};

export default TemplateViewer;