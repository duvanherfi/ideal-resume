import { DocumentProps, pdf } from '@react-pdf/renderer';
import React, { ReactElement } from 'react';
import TemplateProps from '../common/TemplateProps';

interface WorkerMessage {
    templateId: string;
    props: TemplateProps;
}

self.onmessage = async (e: MessageEvent<WorkerMessage>) => {
    try {
        const { templateId, props } = e.data;
        let PDFComponent: React.FC<TemplateProps>;
        switch (templateId) {
            case 'modern':
                PDFComponent = (await import('../templates/structure/Modern.template')).default;
                break;
            case 'minimalist':
                PDFComponent = (await import('../templates/structure/Minimalist.template')).default;
                break;
            case 'corporate':
                PDFComponent = (await import('../templates/structure/Corporate.template')).default;
                break;
            case 'elegant':
                PDFComponent = (await import('../templates/structure/Elegant.template')).default;
                break;
            case 'creative':
                PDFComponent = (await import('../templates/structure/Creative.template')).default;
                break;
            case 'professional':
                PDFComponent = (await import('../templates/structure/Professional.template')).default;
                break;
            default:
                throw new Error(`Template with id "${templateId}" not found`);
        }

        const docElement = React.createElement(PDFComponent, props);
        const blob = await pdf(docElement as ReactElement<DocumentProps>).toBlob();

        postMessage({ success: true, blob });
    } catch (err) {
        postMessage({ success: false, error: (err as Error).message });
    }
};
