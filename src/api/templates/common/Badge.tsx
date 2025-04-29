import { Text, View } from "@react-pdf/renderer";

interface BadgeProps<T> {
    children?: string | string[];
    styles: T;
};

const Badge = <T extends { container: any; text: any; }>({ children, styles }: BadgeProps<T>) => (
    <View style={styles.container}>
        <Text style={styles.text}>{children}</Text>
    </View>
);

export default Badge;