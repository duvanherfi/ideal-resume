import useResumeTemplate from "../../hooks/useResumeTemplate";
import useTranslations from "../../hooks/useTranslations";
import DownloadResumeLink from "../preview/DownloadResumeLink";
import TemplatePreviewSelected from "../preview/TemplatePreviewSelected";
import Modal from "../ui/Modal";
import Title from "../ui/text/Title";
import ViewTemplateGallery from "./ViewTemplateGallery";

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
                    <ViewTemplateGallery />
                </Modal>
            </div>
        </div>
    )
};

export default ViewTemplatePreview;