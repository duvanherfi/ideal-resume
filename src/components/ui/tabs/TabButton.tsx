import useTranslations from "@hooks/useTranslations";
import { getButtonClassName } from "./tabHelper";

export interface TabButtonProps {
  text?: string;
  children?: React.ReactNode;
  onClick: () => void;
  active: boolean;
  inline?: boolean;
}

const TabButton = (props: TabButtonProps) => {
  const { t } = useTranslations();
  const { onClick, active, text = "", children, inline = false } = props;

  return (
    <button onClick={onClick} className={`${getButtonClassName(active, inline)}`}>
      {children}
      <span>{t(text)}</span>
    </button>
  );
};

export default TabButton;