import ViewTitle from "../view/common/ViewTitle";
import DownloadResumeLink from "../view/preview/DownloadResumeLink";
import SelectedTemplatePreview from "../view/preview/SelectedTemplatePreview";
import ViewCustomizeTemplate from "./ViewCustomizeTemplate";

const ViewTemplatePreview = () => {
    return (
        <div className="space-y-2 h-full w-full bg-white/20 dark:bg-black/10 backdrop-blur-xl xl:px-4 2xl:w-full overflow-y-auto scrollbar xl:pb-64">
            <div className="xl:hidden">
                <ViewCustomizeTemplate />
            </div>
            <ViewTitle simple className="pb-4" title="screen.preview.title" subtitle="screen.preview.subtitle" />
            <div className="mx-auto w-1/2 xl:w-full xl:px-8">
                <SelectedTemplatePreview />
            </div>
            <div className="flex w-full justify-end xl:px-8">
                <DownloadResumeLink />
            </div>
        </div>
    )
};

export default ViewTemplatePreview;