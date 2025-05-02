import useI18N from "@hooks/useI18N";

interface SubtitleProps {
    children: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
    const { t } = useI18N();

    return (
        <h2 className="text-2xl font-semibold mb-8 text-accent-900 dark:text-accent-100">
            {t(children)}
        </h2>
    );
}

export default Subtitle;