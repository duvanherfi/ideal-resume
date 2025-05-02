import { Document, Page } from "@react-pdf/renderer";
import { MainSection, ProfileHeader, TwoColumnsSection } from "@resume-api/templates/layout/Modern.layout";
import templateStyle from "@resume-api/templates/styles/Modern.styles";
import type TemplateProps from "@resume-api/types/template/TemplateProps";
import React from "react";

const TemplateModern: React.FC<TemplateProps> = (props: TemplateProps) => {
    const { theme } = props;
    const styles = templateStyle(theme);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <ProfileHeader {...props} styles={styles} />
                <MainSection {...props} styles={styles} />
                <TwoColumnsSection {...props} styles={styles} />
            </Page>
        </Document>
    );
};

export default TemplateModern;