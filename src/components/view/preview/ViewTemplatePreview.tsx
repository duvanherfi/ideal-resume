import useResumeTemplate from "../../../api/hooks/useResumeTemplate";
import useTranslations from "../../../hooks/useTranslations";
import Modal from "../../ui/Modal";
import Title from "../../ui/text/Title";
import FormLabels from "../form/form/FormLabels";
import ViewGallery from "../gallery/ViewGallery";
import DownloadResumeLink from "./DownloadResumeLink";
import TemplatePreviewSelected from "./TemplatePreviewSelected";

const ViewTemplatePreview = () => {
    const { t } = useTranslations();
    const template = useResumeTemplate();
    if (!template.active) return null;

    return (
        <div className="pt-8 space-y-8 h-full lg:px-16">
            <Title className="hidden xl:block 2xl:text-center">screen.preview.title</Title>
            <div className="md:w-2/3 mx-auto">
                <TemplatePreviewSelected />
            </div>
            <div className="flex w-full justify-around">
                <Modal buttonText={t("preview.modal.button")} buttonVariant="primary" buttonClassName="hidden md:block">
                    <ViewGallery />
                </Modal>
                <Modal buttonText={t("form.labels.title")} buttonVariant="primary" buttonClassName="hidden md:block">
                    <FormLabels />
                </Modal>
                <DownloadResumeLink />
            </div>

        </div>
    )
};

export default ViewTemplatePreview;