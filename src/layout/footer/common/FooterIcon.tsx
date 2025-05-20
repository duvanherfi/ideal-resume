import SocialIcon from "./SocialIcon";

interface FooterIconProps {
    id: string;
    name: string;
    url: string;
}

const FooterIcon: React.FC<FooterIconProps> = ({ id, name, url }) => {
    const className = "text-secondary-600 hover:text-primary-600 dark:text-secondary-200 dark:hover:text-primary-400 transition-colors";

    return (
        <a key={name} href={url} target="_blank" rel="noopener noreferrer" className={className} aria-label={name}>
            <SocialIcon icon={id} />
        </a>
    );
};

export default FooterIcon;
