import useResumeTheme from "@resume-api/hooks/useResumeTheme";

export interface ThemeColorBadgeProps {
    name: string;
    value: {
        primary: string;
    };
}

const ThemeColorBadge = (props: ThemeColorBadgeProps) => {
    const { name, value } = props;
    const theme = useResumeTheme();

    const style = {
        backgroundColor: `${value.primary}20`,
        color: value.primary,
        border: theme.get?.primary === value.primary ? `2px solid ${value.primary}` : "1px solid transparent"
    }

    return (
        <button key={value.primary} onClick={() => theme.setTheme(value)} className="flex flex-col items-center gap-x-1 px-3 py-1 rounded-full text-xs transition-all" style={style}>
            <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: value.primary }}></span>
            <span className="hidden xl:block">{name}</span>
        </button>
    );
};

export default ThemeColorBadge;