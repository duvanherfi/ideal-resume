import ViewTitle from "@components/widgets/common/ViewTitle";
import DownloadResumeLink from "@components/widgets/preview/DownloadResumeLink";
import SelectedTemplatePreview from "@components/widgets/preview/SelectedTemplatePreview";
import I18n from "src/locales/I18nKeys";
import ViewCustomization from "./ViewCustomization";

const ViewTemplatePreview: React.FC = () => {
    return (
        <div className="space-y-4 h-full w-full xl:bg-white/40 xl:dark:bg-black/40 backdrop-blur-xl xl:px-4 2xl:w-full overflow-y-auto scrollbar lg:pb-24 xl:pb-32">
            <ViewTitle simple title={I18n.PREVIEW.TITLE} subtitle={I18n.PREVIEW.SUBTITLE} className="pt-4" />
            <SelectedTemplatePreview />
            <DownloadResumeLink />
            <div className="pb-8 xl:pb-0 xl:hidden">
                <ViewCustomization />
            </div>
        </div>
    )
};

export default ViewTemplatePreview;