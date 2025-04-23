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

  const classNameNormal = `w-full px-3 py-2 transition-all text-sm md:text-base lg:text-lg rounded-md whitespace-nowrap`;
  const classNameStatus = active
    ? "font-bold bg-primary-200/50 text-blue-900 dark:bg-primary-900 dark:text-blue-100"
    : "bg-secondary-300/80 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-blue-50 dark:hover:bg-blue-900/40";

  const getTabClassName = () => `${classNameNormal} ${classNameStatus}`;

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
