import useResumeTemplate from "../../../api/hooks/useResumeTemplate";
import useTranslations from "../../../hooks/useTranslations";
import DownloadResumeLink from "./DownloadResumeLink";
import TemplatePreviewSelected from "./TemplatePreviewSelected";
import Modal from "../../ui/Modal";
import Title from "../../ui/text/Title";
import ViewGallery from "../gallery/ViewGallery";

const ViewTemplatePreview = () => {
    const { t } = useTranslations();
    const template = useResumeTemplate();
    if (!template.active) return null;

    return (
        <div className="pt-8 space-y-8">
            <Title className="hidden xl:block">screen.preview.title</Title>
            <div className="md:w-2/3 mx-auto">
                <TemplatePreviewSelected />
            </div>
            <div className="flex w-full justify-evenly">
                <DownloadResumeLink />
                <Modal buttonText={t("preview.modal.button")} buttonVariant="secondary" buttonClassName="hidden md:block">
                    <ViewGallery />
                </Modal>
            </div>
        </div>
    )
};

export default ViewTemplatePreview;