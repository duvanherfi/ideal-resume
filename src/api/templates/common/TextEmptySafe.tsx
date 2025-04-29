import { Text } from "@react-pdf/renderer";

interface TextEmptySafeProps {
    children: any;
    style: any;
    condition?: boolean;
}
const TextEmptySafe = (props: TextEmptySafeProps) => (
    props.children && props.condition !== false ?
        <Text style={props.style}>
            {props.children}
        </Text>
        : null
);

export default TextEmptySafe;