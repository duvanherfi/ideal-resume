import useResumeTemplate from "../../../api/hooks/useResumeTemplate";
import Title from "../../ui/text/Title";
import ViewLabelsForm from "../user-data/ViewLabelsForm";
import DownloadResumeLink from "./DownloadResumeLink";
import TemplatePreviewSelected from "./TemplatePreviewSelected";

const ViewTemplatePreview = () => {
    const template = useResumeTemplate();
    if (!template.active) return null;

    return (
        <div className="space-y-2 h-full w-full bg-primary-300/20 dark:bg-primary-950/20 backdrop-blur-lg py-4">
            <Title className="hidden 2xl:text-center">screen.preview.title</Title>
            <div className="flex w-full justify-end px-8">
                <DownloadResumeLink />
            </div>
            <div className="mx-auto w-1/2 xl:w-full px-8">
                <TemplatePreviewSelected />
            </div>
            <div className="xl:hidden">
                <ViewLabelsForm />
            </div>
        </div>
    )
};

export default ViewTemplatePreview;