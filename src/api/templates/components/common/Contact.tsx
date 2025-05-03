import { Text } from "@react-pdf/renderer";
import TemplateStyleSheet from "@resume-api/templates/styles/common/TemplateStyleSheet";
import ViewEmptySafe from "./ViewEmptySafe";

interface ContactProps { 
    label?: string;
    value?: string; 
    styles: TemplateStyleSheet;
};

const Contact = ({ label, value, styles }: ContactProps) => (
    <ViewEmptySafe style={styles.header.contact.item} condition={value}>
        <Text style={styles.header.contact.label}>{label}</Text>
        <Text style={styles.header.contact.value}>{value}</Text>
    </ViewEmptySafe>
);

export default Contact;