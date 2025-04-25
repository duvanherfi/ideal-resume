import useResumeTemplate from "../../../api/hooks/useResumeTemplate";
import ViewTitle from "../common/ViewTitle";
import ViewCustomizeTemplate from "../customize/ViewCustomizeTemplate";
import DownloadResumeLink from "./DownloadResumeLink";
import TemplatePreviewSelected from "./TemplatePreviewSelected";

const ViewTemplatePreview = () => {
    const template = useResumeTemplate();
    if (!template.active) return null;

    return (
        <div className="space-y-2 h-full w-full bg-gradient-to-bl from-primary-100 via-primary-200/50 to-white/50 dark:from-primary-950/50 dark:via-secondary-900/50 dark:to-black backdrop-blur-lg py-4 2xl:w-full">
            <ViewTitle className="md:hidden" title="screen.preview.title" />
            <div className="flex w-full justify-end px-8">
                <DownloadResumeLink />
            </div>
            <div className="mx-auto w-1/2 xl:w-full px-8">
                <TemplatePreviewSelected />
            </div>
            <div className="xl:hidden">
                <ViewCustomizeTemplate />
            </div>
        </div>
    )
};

export default ViewTemplatePreview;