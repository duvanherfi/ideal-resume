import { PDFDownloadLink } from "@react-pdf/renderer";
import useTranslations from "../../../hooks/useTranslations";
import Button from "../../ui/buttons/Button";
import useResumeData from "../../../api/hooks/useResumeData";
import useResumeTheme from "../../../api/hooks/useResumeTheme";
import useResumeTemplate from "../../../api/hooks/useResumeTemplate";

const DownloadResumeLink = () => {
    const { t } = useTranslations();
    const data = useResumeData();
    const theme = useResumeTheme();
    const template = useResumeTemplate();
    
    if (!template.active) return null;
    return (
        <div className="flex self-center">
            <PDFDownloadLink
                document={<template.active.PDF data={data.get} theme={theme.get || undefined} />}
                fileName={`${data.get.firstName || 'Resume'}-${data.get.lastName || 'PDF'}.pdf`}
                className="inline-flex"
            >
                {({ blob, url, loading, error }) => (
                    <Button disabled={loading} variant="secondary">
                        {loading ? t("link.download.loading") : t("link.download.label")}
                    </Button>
                )}
            </PDFDownloadLink>
        </div>
    );
};

export default DownloadResumeLink;