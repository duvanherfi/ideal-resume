import { Text } from "@react-pdf/renderer";
import ViewEmptySafe from "../common/ViewEmptySafe";
import TemplateStyleSheet from "../helper/TemplateStyleSheet";

type ContactProps = { label?: string, value?: string, styles: TemplateStyleSheet };

const Contact = ({ label, value, styles }: ContactProps) => (
    <ViewEmptySafe style={styles.header.contact.item} condition={value}>
        <Text style={styles.header.contact.label}>{label}:</Text>
        <Text style={styles.header.contact.value}>{value}</Text>
    </ViewEmptySafe>
);

export default Contact;