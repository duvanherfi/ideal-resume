import { Document, Page, View } from '@react-pdf/renderer';
import React from 'react';
import TemplateProps from '../../common/TemplateProps';
import { MainColumn, ProfileHeader, SideColumn } from '../sections/Professional.sections';
import styleBuilder from '../styles/Professional.styles';

const TemplateProfessional: React.FC<TemplateProps> = (props: TemplateProps) => {
    const { theme } = props;
    const styles = styleBuilder(theme);

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