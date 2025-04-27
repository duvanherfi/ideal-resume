import ViewTitle from "../view/common/ViewTitle";
import ViewCustomizeTemplate from "./ViewCustomizeTemplate";
import DownloadResumeLink from "../view/preview/DownloadResumeLink";
import SelectedTemplatePreview from "../view/preview/SelectedTemplatePreview";

const ViewTemplatePreview = () => {
    return (
        <div className="space-y-2 h-full w-full bg-white/50 dark:bg-black/10 backdrop-blur-lg p-4 2xl:w-full">
            <ViewTitle className="md:hidden" title="screen.preview.title" />
            <div className="mx-auto w-1/2 xl:w-full">
                <SelectedTemplatePreview />
            </div>
            <div className="flex w-full justify-end px-8">
                <DownloadResumeLink />
            </div>
            <div className="xl:hidden">
                <ViewCustomizeTemplate />
            </div>
        </div>
    )
};

export default ViewTemplatePreview;