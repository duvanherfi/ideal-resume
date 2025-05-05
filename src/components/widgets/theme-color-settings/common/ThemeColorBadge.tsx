import useResumeTheme from "@api-hooks/useResumeTheme";
import { TemplateColorScheme } from "@resume-api/types/template/TemplateTheme";

export interface ThemeColorBadgeProps {
    name?: string;
    property: keyof TemplateColorScheme;
    color: string;
}

const ThemeColorBadge: React.FC<ThemeColorBadgeProps> = ({ name, property, color }) => {
    const theme = useResumeTheme();

    const style = {
        backgroundColor: color ? `${color}20` : "",
        color: color,
        border: theme.getColor(property) === color ? `2px solid ${color}` : "1px solid transparent",
        backgroundImage: !color ? "repeating-linear-gradient(45deg, red 0, red 10px, transparent 10px, transparent 20px)" : undefined
    };

    return (
        <button key={color} onClick={() => theme.changeColor(property, color)} className="flex flex-col items-center gap-x-1 px-3 py-1 rounded-full text-xs transition-all" style={style}>
            <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: color }}></span>
            <span className="hidden 2xl:block">{name}</span>
        </button>
    );
};

export default ThemeColorBadge;