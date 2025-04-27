import { Document, Page } from '@react-pdf/renderer';
import React from 'react';
import TemplateProps from '../../common/TemplateProps';
import { MainSection, ProfileHeader, TwoColumnsSection } from './TemplateModern.sections';
import styleBuilder from './TemplateModern.styles';

const TemplateModern: React.FC<TemplateProps> = (props: TemplateProps) => {
    const { theme } = props;
    const styles = styleBuilder(theme || undefined);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <ProfileHeader {...props} styles={styles} />
                <MainSection {...props} styles={styles} />
                <TwoColumnsSection {...props} styles={styles} />
            </Page>
        </Document>
    );
};

export default TemplateModern;