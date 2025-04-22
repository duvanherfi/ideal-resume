import { PDFViewer } from "@react-pdf/renderer";
import useResumeData from "../../../api/hooks/useResumeData";
import useResumeTheme from "../../../api/hooks/useResumeTheme";
import useResumeTemplate from "../../../api/hooks/useResumeTemplate";
import { ResumeLabels } from "../../../api/types";
import useResumeLabels from "../../../api/hooks/useResumeLabels";

const defaultLabels: ResumeLabels = {
    profileSummary: "About",
    workExperiences: "Professional Experience",
    education: "Academic Background",
    projects: "Projects",
    skills: "Technical Skills",
    languages: "Languages",
    email: "Email",
    phone: "Phone",
    location: "Location",
    lastUpdated: "Last updated",
    present: "Present"
};

const TemplatePreviewSelected = () => {
    const data = useResumeData();
    const theme = useResumeTheme();
    const template = useResumeTemplate();
    const { labels } = useResumeLabels();
    //const labels = useResumeLabels();
    //const labels = propsLabels ? mergeData(propsLabels, defaultLabels) : defaultLabels;

    return (
        <div className="relative bg-transparent flex-shrink-0 aspect-[1/1.4142]">
            <div className="h-full w-full">
                {template.active && (
                    <PDFViewer width="100%" height="100%" style={{ border: 'none' }} showToolbar={false}>
                        <template.active.PDF data={data.get} theme={theme.get ?? undefined} labels={labels} />
                    </PDFViewer>
                )}
            </div>
        </div>
    )
};

export default TemplatePreviewSelected;