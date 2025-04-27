import { Document, Page, View } from '@react-pdf/renderer';
import React from 'react';
import TemplateProps from '../../common/TemplateProps';
import { LeftColumn, ProfileHeader, RightColumn } from '../sections/TemplateProfessional.sections';
import styleBuilder from '../styles/TemplateProfessional.styles';

const TemplateProfessional: React.FC<TemplateProps> = (props: TemplateProps) => {
    const { theme } = props;
    const styles = styleBuilder(theme || undefined);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <ProfileHeader {...props} styles={styles} />
                <View style={styles.contentContainer}>
                    <LeftColumn {...props} styles={styles} />
                    <RightColumn {...props} styles={styles} />
                </View>
            </Page>
        </Document>
    );
};

export default TemplateProfessional;