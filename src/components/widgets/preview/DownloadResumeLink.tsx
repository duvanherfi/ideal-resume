import useResumeLabels from "@api-hooks/useResumeLabels";
import useResumeTemplate from "@api-hooks/useResumeTemplate";
import useResumeTheme from "@api-hooks/useResumeTheme";
import useUserData from "@api-hooks/useUserData";
import Button from "@components/ui/buttons/Button";
import Icons from "@icons/Icons";
import { PDFDownloadLink } from "@react-pdf/renderer";

const DownloadResumeLink = () => {
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
                    fileName={`${data.get.firstName ?? 'Resume'}-${data.get.lastName ?? 'PDF'}.pdf`}
                    className="inline-flex"
                >
                    {({ blob, url, loading, error }) => (
                        <Button disabled={loading} variant="primary">
                            {loading ? <Icons.Loading /> : <Icons.Download />}
                        </Button>
                    )}
                </PDFDownloadLink>
            </div>
        </div>
    );
};

export default DownloadResumeLink;