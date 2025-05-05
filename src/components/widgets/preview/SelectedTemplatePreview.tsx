import useResumeLabels from "@api-hooks/useResumeLabels";
import useResumeTemplate from "@api-hooks/useResumeTemplate";
import useResumeTheme from "@api-hooks/useResumeTheme";
import useUserData from "@api-hooks/useUserData";
import TemplateViewer from "../common/TemplateViewer";

const SelectedTemplatePreview: React.FC = () => {
    const data = useUserData();
    const theme = useResumeTheme();
    const template = useResumeTemplate();
    const { labels } = useResumeLabels();

    return (
        <div className="mx-auto w-full xl:px-8">
            <TemplateViewer data={data.get} theme={theme.get} labels={labels} template={template.active} />
        </div>
    );
};

export default SelectedTemplatePreview;