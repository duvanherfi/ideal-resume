import useI18N from "@hooks/app/useI18N";
import { getButtonClassName } from "./utils/utils";

export interface TabButtonProps {
  text?: string;
  children?: React.ReactNode;
  onClick: () => void;
  active: boolean;
  inline?: boolean;
}

const TabButton: React.FC<TabButtonProps> = ({ onClick, active, text = "", children, inline = false }) => {
  const { t } = useI18N();

  return (
    <button onClick={onClick} className={`${getButtonClassName(active, inline)}`}>
      {children}
      <span>{t(text)}</span>
    </button>
  );
};

export default TabButton;