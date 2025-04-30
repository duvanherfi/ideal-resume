import { Document, Page, View } from '@react-pdf/renderer';
import React from 'react';
import TemplateProps from '../../common/TemplateProps';
import { MainSection, ProfileHeader } from '../layout/Elegant.layout';
import templateStyle from '../styles/Elegant.styles';

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