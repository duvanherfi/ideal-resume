import { Document, Page, View } from '@react-pdf/renderer';
import React from 'react';
import TemplateProps from '../../common/TemplateProps';
import { ContactSection, MainColumn, ProfileHeader, SideColumn } from '../layout/Minimalist.layout';
import styleBuilder from '../styles/Minimalist.styles';

const TemplateMinimalist: React.FC<TemplateProps> = (props: TemplateProps) => {
    const { theme } = props;
    const styles = styleBuilder(theme);

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