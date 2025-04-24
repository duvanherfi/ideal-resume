import { PDFDownloadLink } from "@react-pdf/renderer";
import useTranslations from "../../../hooks/useTranslations";
import Button from "../../ui/buttons/Button";
import useUserData from "../../../api/hooks/useUserData";
import useResumeTheme from "../../../api/hooks/useResumeTheme";
import useResumeTemplate from "../../../api/hooks/useResumeTemplate";
import useResumeLabels from "../../../api/hooks/useResumeLabels";
import Icons from "../../ui/icons/Icons";

const DownloadResumeLink = () => {
    const { t } = useTranslations();
    const data = useUserData();
    const theme = useResumeTheme();
    const template = useResumeTemplate();
    const { labels } = useResumeLabels();

    if (!template.active) return null;
    return (
        <div className="flex self-center">
            <PDFDownloadLink
                document={<template.active.PDF data={data.get} theme={theme.get || undefined} labels={labels} />}
                fileName={`${data.get.firstName || 'Resume'}-${data.get.lastName || 'PDF'}.pdf`}
                className="inline-flex"
            >
                {({ blob, url, loading, error }) => (
                    <Button disabled={loading} variant="secondary">
                        {loading ? t("link.download.loading") : <Icons.Save />}
                    </Button>
                )}
            </PDFDownloadLink>
        </div>
    );
};

export default DownloadResumeLink;