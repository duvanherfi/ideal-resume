import { Document, Page, View } from '@react-pdf/renderer';
import React from 'react';
import TemplateProps from '../../common/TemplateProps';
import { ContactSection, MainColumn, ProfileHeader, SideColumn } from '../layout/Elegant.layout';
import styleBuilder from '../styles/Elegant.styles';

const TemplateElegant: React.FC<TemplateProps> = (props: TemplateProps) => {
    const { theme } = props;
    const styles = styleBuilder(theme);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <ProfileHeader {...props} styles={styles} />
                <ContactSection {...props} styles={styles} />
                <View style={styles.layout.mainContent}>
                    <MainColumn {...props} styles={styles} />
                    <SideColumn {...props} styles={styles} />
                </View>
            </Page>
        </Document>
    );
};

export default TemplateElegant;