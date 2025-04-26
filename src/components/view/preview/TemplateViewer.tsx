import React from 'react';
import TemplateProps from '../../../api/common/TemplateProps';
import usePdfPreview from '../../../api/hooks/usePdfWorker';
import type { Template } from '../../../api/types';
import Icons from '../../ui/icons/Icons';

interface TemplateViewerProps extends TemplateProps {
    template?: Template | null;
}

const TemplateViewer: React.FC<TemplateViewerProps> = (props: TemplateViewerProps) => {
    const { data, theme, labels, template } = props;
    const { blobUrl, loading } = usePdfPreview({ template, data, theme, labels });

    if (!template) return null;

    return (
        <div className="relative bg-transparent flex-shrink-0 aspect-[1/1.4142]">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-black/50  text-accent-500 dark:text-accent-400">
                    <Icons.Loading />
                </div>
            )}
            {blobUrl && (
                <iframe title={template.name} src={`${blobUrl}#toolbar=0&navpanes=0&scrollbar=0`} width="100%" height="100%" style={{ border: 'none' }} />
            )}
        </div>
    );
};

export default TemplateViewer;
