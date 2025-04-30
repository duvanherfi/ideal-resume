import ViewTitle from "../view/common/ViewTitle";
import ViewCustomizeTemplate from "./ViewCustomizeTemplate";
import DownloadResumeLink from "../view/preview/DownloadResumeLink";
import SelectedTemplatePreview from "../view/preview/SelectedTemplatePreview";

const ViewTemplatePreview = () => {
    return (
        <div className="space-y-2 h-full w-full bg-white/20 dark:bg-black/10 backdrop-blur-xl p-4 2xl:w-full">
            <ViewTitle className="xl:hidden" title="screen.preview.title" />
            <div className="flex w-full justify-end px-8">
                <DownloadResumeLink />
            </div>
            <div className="mx-auto w-1/2 xl:w-full px-8">
                <SelectedTemplatePreview />
            </div>
            <div className="xl:hidden">
                <ViewCustomizeTemplate />
            </div>
        </div>
    )
};

export default ViewTemplatePreview;