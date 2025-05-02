import { Document, Page, View } from "@react-pdf/renderer";
import TemplateProps from "@resume-api/common/TemplateProps";
import { MainSection, ProfileHeader } from "@resume-api/templates/layout/Elegant.layout";
import templateStyle from "@resume-api/templates/styles/Elegant.styles";
import React from "react";

const TemplateElegant: React.FC<TemplateProps> = (props) => {
    const { theme } = props;
    const styles = templateStyle(theme);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <ProfileHeader {...props} styles={styles} />
                <View style={styles.common.divider} />
                <MainSection {...props} styles={styles} />
            </Page>
        </Document>
    );
};

export default TemplateElegant;