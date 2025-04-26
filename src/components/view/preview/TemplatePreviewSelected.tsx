import useResumeLabels from "../../../api/hooks/useResumeLabels";
import useResumeTemplate from "../../../api/hooks/useResumeTemplate";
import useResumeTheme from "../../../api/hooks/useResumeTheme";
import useUserData from "../../../api/hooks/useUserData";
import TemplateViewer from "./TemplateViewer";

const TemplatePreviewSelected = () => {
    const data = useUserData();
    const theme = useResumeTheme();
    const template = useResumeTemplate();
    const { labels } = useResumeLabels();

    return (
        <TemplateViewer data={data.get} theme={theme.get ?? undefined} labels={labels} template={template.active} />
    );
};

export default TemplatePreviewSelected;