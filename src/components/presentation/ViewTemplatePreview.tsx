import ViewTitle from "@components/view/common/ViewTitle";
import DownloadResumeLink from "@components/view/preview/DownloadResumeLink";
import SelectedTemplatePreview from "@components/view/preview/SelectedTemplatePreview";
import I18nKeys from "src/locales/I18nKeys";
import ViewCustomizeTemplate from "./ViewCustomizeTemplate";

const ViewTemplatePreview = () => {
    return (
        <div className="space-y-2 h-full w-full bg-white/20 dark:bg-black/10 backdrop-blur-xl xl:px-4 2xl:w-full overflow-y-auto scrollbar xl:pb-64">
            <div className="xl:hidden">
                <ViewCustomizeTemplate />
            </div>
            <ViewTitle simple className="pb-4" title={I18nKeys.PREVIEW.TITLE} subtitle={I18nKeys.PREVIEW.SUBTITLE} />
            <SelectedTemplatePreview />
            <DownloadResumeLink />
        </div>
    )
};

export default ViewTemplatePreview;