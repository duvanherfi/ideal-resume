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

  const classNameNormal = `w-full px-3 py-2 transition-all text-sm md:text-base lg:text-lg whitespace-nowrap border-b-4`;
  const classNameStatus = active
    ? "rounded-tr-md rounded-tl-md bg-accent-200/50 dark:bg-accent-900/50 font-bold text-accent-900 dark:text-accent-300 border-accent-900 dark:border-accent-300"
    : "text-secondary-700 dark:text-secondary-300 border-transparent hover:text-accent-800 dark:hover:text-accent-200 hover:border-accent-800 dark:hover:border-accent-200";

  const getTabClassName = () => `${classNameNormal} ${classNameStatus}`;

  return (
    <button
      onClick={onClick}
      className={`${getTabClassName()} flex flex-col lg:flex-row items-center justify-between xl:justify-center`}
    >
      {children}
      {t(text)}
    </button>
  );
};

export default TabButton;
