import { Document, Page, View } from '@react-pdf/renderer';
import TemplateProps from '@resume-api/common/TemplateProps';
import { MainColumn, ProfileHeader, SideColumn } from '@resume-api/templates/layout/Creative.layout';
import templateStyle from '@resume-api/templates/styles/Creative.styles';
import React from 'react';

const TemplateCreative: React.FC<TemplateProps> = (props: TemplateProps) => {
    const { theme } = props;
    const styles = templateStyle(theme);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.layout.mainContent}>
                    <ProfileHeader {...props} styles={styles} />
                    <View style={styles.layout.row}>
                        <MainColumn {...props} styles={styles} />
                        <SideColumn {...props} styles={styles} />
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default TemplateCreative;