import DesktopLayout from "./desktop/DesktopLayout";
import MobileLayout from "./mobile/MobileLayout";

const Main: React.FC = () => {
  return (
    <>
      <MobileLayout />
      <DesktopLayout />
    </>
  );
}

export default Main;