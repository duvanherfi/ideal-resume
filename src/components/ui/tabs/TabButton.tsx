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
    ? "rounded-tr-md rounded-tl-md bg-primary-200/50 dark:bg-primary-900/50 font-bold text-primary-900 dark:text-primary-300 border-primary-900 dark:border-primary-300"
    : "text-secondary-700 dark:text-secondary-300 border-transparent hover:text-primary-800 dark:hover:text-primary-200 hover:border-primary-800 dark:hover:border-primary-200";

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
