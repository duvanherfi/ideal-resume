import useResumeLabels from "@api-hooks/useResumeLabels";
import useResumeTemplate from "@api-hooks/useResumeTemplate";
import useResumeTheme from "@api-hooks/useResumeTheme";
import useUserData from "@api-hooks/useUserData";
import Button from "@components/ui/buttons/Button";
import useI18N from "@hooks/useI18N";
import Icons from "@icons/Icons";
import { PDFDownloadLink } from "@react-pdf/renderer";
import I18n from "src/locales/I18nKeys";

const DownloadResumeLink: React.FC = () => {
    const { t } = useI18N();
    const data = useUserData();
    const theme = useResumeTheme();
    const template = useResumeTemplate();
    const { labels } = useResumeLabels();

    if (!template.active) return null;

    return (
        <div className="flex w-full justify-end xl:px-8">
            <div className="flex self-center">
                <PDFDownloadLink
                    document={<template.active.PDF data={data.get} theme={theme.get} labels={labels} />}
                    fileName={`${data.get.firstName ?? "Resume"}-${data.get.lastName ?? "PDF"}.pdf`}
                    className="inline-flex"
                >
                    {({ blob, url, loading, error }) => (
                        <Button disabled={loading} variant="primary">
                            <div className="flex space-x-2">
                                <span>{t(I18n.PREVIEW.DOWNLOAD.LABEL)}</span>
                                {loading ? <Icons.Loading /> : <Icons.Download />}
                            </div>
                        </Button>
                    )}
                </PDFDownloadLink>
            </div>
        </div>
    );
};

export default DownloadResumeLink;