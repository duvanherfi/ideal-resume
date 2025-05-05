import Accordion from "@components/ui/Accordion";
import Subtitle from "@components/ui/text/Subtitle";
import useResumeTheme from "@resume-api/hooks/useResumeTheme";
import ThemeColorSettings from "./ThemeColorSettings";
import GlassCard from "@components/ui/GlassCard";

const AdvancedThemeSettings: React.FC = () => {
    const theme = useResumeTheme();

    return (
        <Accordion>
            <GlassCard>
                <Subtitle>{"Avanzado"}</Subtitle>
            </GlassCard>
            {theme.getColorKeys().map(property => (
                <ThemeColorSettings key={property} property={property} />
            ))}
        </Accordion>
    );
};

export default AdvancedThemeSettings;