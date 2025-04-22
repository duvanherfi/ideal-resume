import useResumeTheme from "../../../hooks/useResumeTheme";

interface ColorThemeBadgeProps {
    suggestedTheme: {
        name: string;
        value: {
            primary: string;
        };
    }
}

const ColorThemeBadge = (props: ColorThemeBadgeProps) => {
    const { suggestedTheme } = props;
    const theme = useResumeTheme();

    const style = {
        backgroundColor: `${suggestedTheme.value.primary}20`,
        color: suggestedTheme.value.primary,
        border: theme.get?.primary === suggestedTheme.value.primary ? `2px solid ${suggestedTheme.value.primary}` : "1px solid transparent"
    }

    return (
        <button key={suggestedTheme.value.primary} onClick={() => theme.setTheme(suggestedTheme.value)} className="flex flex-col items-center gap-x-1 px-3 py-1 rounded-full text-xs transition-all" style={style}>
            <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: suggestedTheme.value.primary }}></span>
            {suggestedTheme.name}
        </button>
    );
};

export default ColorThemeBadge;