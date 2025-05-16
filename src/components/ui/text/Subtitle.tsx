import useI18N from "@hooks/useI18N";

interface SubtitleProps {
    children: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
    const { t } = useI18N();

    return (
        <h2 className="text-xl md:text-2xl font-semibold py-2 text-accent-950 dark:text-accent-100">
            {t(children)}
        </h2>
    );
}

export default Subtitle;