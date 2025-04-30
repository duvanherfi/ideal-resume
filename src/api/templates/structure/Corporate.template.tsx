import { Document, Page, View } from '@react-pdf/renderer';
import React from 'react';
import TemplateProps from '../../common/TemplateProps';
import { ContactSection, MainColumn, ProfileHeader, SideColumn } from '../layout/Corporate.layout';
import templateStyle from '../styles/Corporate.styles';

const TemplateCorporate: React.FC<TemplateProps> = (props: TemplateProps) => {
    const { theme } = props;
    const styles = templateStyle(theme || undefined);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <ProfileHeader {...props} styles={styles} />
                <ContactSection {...props} styles={styles} />
                <View style={styles.common.divider} />
                <View style={styles.layout.mainContent}>
                    <MainColumn  {...props} styles={styles} />
                    <SideColumn  {...props} styles={styles} />
                </View>
            </Page>
        </Document>
    );
};

export default TemplateCorporate;