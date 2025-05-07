import Accordion from "@components/ui/accordion/Accordion";
import Subtitle from "@components/ui/text/Subtitle";
import useResumeTheme from "@resume-api/hooks/useResumeTheme";
import I18n from "@language/common/I18nKeys";
import GenericThemeColorSettings from "./GenericThemeColorSettings";

const AdvancedThemeSettings: React.FC = () => {
    const theme = useResumeTheme();

    return (
        <Accordion
            togglerClassName="text-accent-900 dark:text-accent-100 bg-white/40 dark:bg-black/50 border-secondary-500/30 dark:border-secondary-500/20 backdrop-blur-xl rounded-tr-lg rounded-tl-lg shadow-md py-3 px-8 mx-auto border flex w-full hover:bg-white/60 dark:hover:bg-black/70 hover:shadow-lg transition-all duration-200"
        >
            <Subtitle>{I18n.THEME.COLOR.ADVANCED.TITLE}</Subtitle>
            {theme.color.getKeys().map(property => (
                <GenericThemeColorSettings key={property} property={property} />
            ))}
        </Accordion>
    );
};

export default AdvancedThemeSettings;