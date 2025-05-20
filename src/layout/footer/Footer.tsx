import useI18N from "@hooks/app/useI18N";
import I18n from "@language/common/I18nKeys";
import contacts from "./common/contacts";
import FooterIcon from "./common/FooterIcon";

const Footer: React.FC = () => {
  const { t } = useI18N();

  return (
    <footer className="backdrop-blur-md hidden lg:block 2xl:sticky border-t border-secondary-900/20 dark:border-secondary-500/20 bottom-0 bg-white/30 text-black dark:bg-black/70 dark:text-secondary-100 py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-bold mb-4 md:mb-0 text-primary-900 dark:text-primary-100">
            {t(I18n.FOOTER.AUTHOR)}
            <a href="https://sebastian-velo.web.app/">
              Sebastián Velo
            </a>
          </p>
          <div className="flex space-x-6 items-center">
            {contacts.map((link) => (<FooterIcon key={link.name} {...link} />))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
