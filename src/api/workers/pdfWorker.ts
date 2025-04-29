import { DocumentProps, pdf } from '@react-pdf/renderer';
import { asyncTemplates } from '@resume-api/context/resume-template/templates';
import React, { ReactElement } from 'react';
import TemplateProps from '../common/TemplateProps';

interface WorkerMessage {
    templateId: string;
    props: TemplateProps;
}

self.onmessage = async (e: MessageEvent<WorkerMessage>) => {
    try {
        const { templateId, props } = e.data;

        const templateImporter = asyncTemplates[templateId];
        if (!templateImporter) {
            throw new Error(`Template with id "${templateId}" not found`);
        }

        const { default: PDFComponent } = await templateImporter();

        const docElement = React.createElement(PDFComponent, props);
        const blob = await pdf(docElement as ReactElement<DocumentProps>).toBlob();

        postMessage({ success: true, blob });
    } catch (err) {
        postMessage({ success: false, error: (err as Error).message });
    }
};