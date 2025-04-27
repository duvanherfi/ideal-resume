import useResumeLabels from "@resume-api/hooks/useResumeLabels";
import useResumeTemplate from "@resume-api/hooks/useResumeTemplate";
import useResumeTheme from "@resume-api/hooks/useResumeTheme";
import useUserData from "@resume-api/hooks/useUserData";
import TemplateViewer from "../common/TemplateViewer";

const SelectedTemplatePreview = () => {
    const data = useUserData();
    const theme = useResumeTheme();
    const template = useResumeTemplate();
    const { labels } = useResumeLabels();

    return (
        <TemplateViewer data={data.get} theme={theme.get ?? undefined} labels={labels} template={template.active} />
    );
};

export default SelectedTemplatePreview;