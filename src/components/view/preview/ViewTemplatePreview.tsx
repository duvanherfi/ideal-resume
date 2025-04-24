import useResumeTemplate from "../../../api/hooks/useResumeTemplate";
import GlassCard from "../../ui/GlassCard";
import Title from "../../ui/text/Title";
import DownloadResumeLink from "./DownloadResumeLink";
import TemplatePreviewSelected from "./TemplatePreviewSelected";

const ViewTemplatePreview = () => {
    const template = useResumeTemplate();
    if (!template.active) return null;

    return (
        <GlassCard className={`min-h-screen xl:overflow-y-hidden bg-primary-200/50 dark:bg-black/30 border-primary-500/30 dark:border-secondary-500/20 backdrop-blur-xl shadow-md w-full mx-auto border-l-2 xl:h-full`}>
            <div className="space-y-8 h-full">
                <Title className="hidden 2xl:text-center">screen.preview.title</Title>
                <div className="mx-auto w-1/2 xl:w-full px-8">
                    <TemplatePreviewSelected />
                </div>
                <div className="flex w-full justify-center">
                    <DownloadResumeLink />
                </div>
            </div>
        </GlassCard>
    )
};

export default ViewTemplatePreview;