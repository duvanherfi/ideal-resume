import { Document, Page, View } from '@react-pdf/renderer';
import React from 'react';
import TemplateProps from '../../common/TemplateProps';
import { ContactSection, MainColumn, ProfileHeader, SideColumn } from '../sections/TemplateMinimalist.sections';
import styleBuilder from '../styles/TemplateMinimalist.styles';

const TemplateMinimalist: React.FC<TemplateProps> = (props: TemplateProps) => {
    const { theme } = props;
    const styles = styleBuilder(theme || undefined);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <ProfileHeader {...props} styles={styles} />
                <View style={styles.divider} />
                <ContactSection {...props} styles={styles} />
                <View style={styles.content}>
                    <MainColumn {...props} styles={styles} />
                    <SideColumn {...props} styles={styles} />
                </View>
            </Page>
        </Document>
    );
};

export default TemplateMinimalist;