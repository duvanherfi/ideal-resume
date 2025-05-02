import { Document, Page, View } from "@react-pdf/renderer";
import { ContactSection, MainColumn, ProfileHeader, SideColumn } from "@resume-api/templates/layout/Minimalist.layout";
import templateStyle from "@resume-api/templates/styles/Minimalist.styles";
import type TemplateProps from "@resume-api/types/template/TemplateProps";
import React from "react";

const TemplateMinimalist: React.FC<TemplateProps> = (props: TemplateProps) => {
    const { theme } = props;
    const styles = templateStyle(theme);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <ProfileHeader {...props} styles={styles} />
                <View style={styles.common.divider} />
                <ContactSection {...props} styles={styles} />
                <View style={styles.common.divider} />
                <View style={styles.layout.mainContent}>
                    <MainColumn {...props} styles={styles} />
                    <SideColumn {...props} styles={styles} />
                </View>
            </Page>
        </Document>
    );
};

export default TemplateMinimalist;