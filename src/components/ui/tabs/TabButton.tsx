import useTranslations from "../../../hooks/useTranslations";

interface TabButtonProps {
  text: string;
  children?: React.ReactNode;
  onClick: () => void;
  active: boolean;
}

const TabButton = (props: TabButtonProps) => {
  const { t } = useTranslations();
  const { onClick, active, text, children } = props;

  const classNameNormal = `w-full px-2 py-1 transition-all text-sm md:text-base lg:text-lg rounded-md whitespace-nowrap`;
  const classNameStatus = () => active
    ? "font-bold bg-accent-100 text-primary-900 dark:bg-accent-900/70 dark:text-primary-100"
    : "bg-secondary-500/10 dark:bg-white/10 text-black dark:text-primary-100 dark:hover:text-primary-100 hover:bg-accent-100 dark:hover:bg-accent-900/70";

  const getTabClassName = () => `${classNameNormal} ${classNameStatus()}`;

  return (
    <button
      onClick={onClick}
      className={`${getTabClassName()} flex flex-col items-center justify-between`}
    >
      {children}
      {t(text)}
    </button>
  );
};

export default TabButton;
