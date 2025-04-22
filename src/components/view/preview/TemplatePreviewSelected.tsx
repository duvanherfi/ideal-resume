import { PDFViewer } from "@react-pdf/renderer";
import useResumeData from "../../../api/hooks/useResumeData";
import useResumeTheme from "../../../api/hooks/useResumeTheme";
import useResumeTemplate from "../../../api/hooks/useResumeTemplate";

const TemplatePreviewSelected = () => {
    const data = useResumeData();
    const theme = useResumeTheme();
    const template = useResumeTemplate();

    return (
        <div className="relative bg-transparent flex-shrink-0 aspect-[1/1.4142]">
            <div className="h-full w-full">
                {template.active && (
                    <PDFViewer width="100%" height="100%" style={{ border: 'none' }} showToolbar={false}>
                        <template.active.PDF data={data.get} theme={theme.get ?? undefined} />
                    </PDFViewer>
                )}
            </div>
        </div>
    )
};

export default TemplatePreviewSelected;