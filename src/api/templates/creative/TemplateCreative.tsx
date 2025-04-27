import { Document, Page, View } from '@react-pdf/renderer';
import React from 'react';
import TemplateProps from '../../common/TemplateProps';
import { ContactSection, MainColumn, ProfileContainer, ProfileHeader, SideColumn } from './TemplateCreative.sections';
import styleBuilder from './TemplateCreative.styles';

const TemplateCreative: React.FC<TemplateProps> = (props: TemplateProps) => {
    const { theme } = props;
    const styles = styleBuilder(theme || undefined);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.mainContent}>
                    <ProfileHeader {...props} styles={styles} />
                    <View style={styles.contentContainer}>
                        <MainColumn {...props} styles={styles} />
                        <SideColumn {...props} styles={styles} />
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default TemplateCreative;