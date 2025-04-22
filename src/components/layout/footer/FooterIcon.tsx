import Icons from "../../ui/icons/Icons";

const getSocialIcon = (icon: string) => {
    switch (icon) {
        case "linkedin":
            return <Icons.Linkedin />;
        case "github":
            return <Icons.Github />;
        case "mail":
            return <Icons.Mail />;
        default:
            return null;
    }
};

interface FooterIconProps {
    id: string;
    name: string;
    url: string;
}

const FooterIcon = (props: FooterIconProps) => {
    return (
        <a
            key={props.name}
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-600 hover:text-primary-600 dark:text-secondary-200 dark:hover:text-primary-400 transition-colors"
            aria-label={props.name}
        >           {getSocialIcon(props.id)}
        </a>
    );
};

export default FooterIcon;
