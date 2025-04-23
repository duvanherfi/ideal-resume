import useResumeTemplate from "../../../api/hooks/useResumeTemplate";
import Title from "../../ui/text/Title";
import DownloadResumeLink from "./DownloadResumeLink";
import TemplatePreviewSelected from "./TemplatePreviewSelected";

const ViewTemplatePreview = () => {
    const template = useResumeTemplate();
    if (!template.active) return null;

    return (
        <div className="space-y-8 h-full lg:px-16">
            <Title className="hidden 2xl:text-center">screen.preview.title</Title>
            <div className="flex w-full justify-center space-x-4">
                <DownloadResumeLink />
            </div>
            <div className="md:w-2/3 mx-auto">
                <TemplatePreviewSelected />
            </div>
        </div>
    )
};

export default ViewTemplatePreview;