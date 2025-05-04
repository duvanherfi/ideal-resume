import ViewTitle from "@components/widgets/common/ViewTitle";
import DownloadResumeLink from "@components/widgets/preview/DownloadResumeLink";
import SelectedTemplatePreview from "@components/widgets/preview/SelectedTemplatePreview";
import I18n from "src/locales/I18nKeys";
import ViewCustomization from "./ViewCustomization";

const ViewTemplatePreview: React.FC = () => {
    return (
        <div className="space-y-2 h-full w-full bg-white/20 dark:bg-black/10 backdrop-blur-xl xl:px-4 2xl:w-full overflow-y-auto scrollbar xl:pb-64">
            <div className="xl:hidden">
                <ViewCustomization />
            </div>
            <ViewTitle simple title={I18n.PREVIEW.TITLE} subtitle={I18n.PREVIEW.SUBTITLE} className="pb-4" />
            <SelectedTemplatePreview />
            <DownloadResumeLink />
        </div>
    )
};

export default ViewTemplatePreview;