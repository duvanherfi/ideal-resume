import { View, type ViewProps } from "@react-pdf/renderer";

interface ViewEmptySafeProps extends ViewProps {
    children?: any;
    condition: any;
}
const ViewEmptySafe = (props: ViewEmptySafeProps) => (
    props.condition ?
        <View style={props.style}>
            {props.children}
        </View>
        : null
);

export default ViewEmptySafe;