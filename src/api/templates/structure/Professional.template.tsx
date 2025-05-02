import { Document, Page, View } from "@react-pdf/renderer";
import TemplateProps from "@resume-api/types/template/TemplateProps";
import { MainColumn, ProfileHeader, SideColumn } from "@resume-api/templates/layout/Professional.layout";
import templateStyle from "@resume-api/templates/styles/Professional.styles";
import React from "react";

const TemplateProfessional: React.FC<TemplateProps> = (props: TemplateProps) => {
    const { theme } = props;
    const styles = templateStyle(theme);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <ProfileHeader {...props} styles={styles} />
                <View style={styles.layout.row}>
                    <MainColumn {...props} styles={styles} />
                    <SideColumn {...props} styles={styles} />
                </View>
            </Page>
        </Document>
    );
};

export default TemplateProfessional;