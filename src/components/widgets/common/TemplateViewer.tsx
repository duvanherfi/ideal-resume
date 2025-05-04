import usePDFWorker from "@api-hooks/usePDFWorker";
import Icons from "@icons/Icons";
import type { Template } from "@resume-api/types/template/Template";
import type TemplateProps from "@resume-api/types/template/TemplateProps";
import React from "react";

interface TemplateViewerProps extends TemplateProps {
    template?: Template | null;
    isStatic?: boolean;
}

const TemplateViewer: React.FC<TemplateViewerProps> = ({ data, theme, labels, template, isStatic }) => {
    const { blobUrl, loading } = usePDFWorker({ template, data, theme, labels, isStatic });

    if (!template) return null;

    return (
        <div className="relative bg-transparent flex-shrink-0 aspect-[1/1.4142]">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-black/50  text-accent-500 dark:text-accent-400">
                    <Icons.Loading />
                </div>
            )}
            {blobUrl && (
                <iframe title={template.name} src={`${blobUrl}#toolbar=0&navpanes=0&scrollbar=0`} width="100%" height="100%" />
            )}
        </div>
    );
};

export default TemplateViewer;
