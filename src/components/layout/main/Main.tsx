import useIsMobile, { ScreenSize } from "@hooks/useIsMobile";
import LayoutDesktop from "./desktop/LayoutDesktop";
import LayoutMobile from "./mobile/LayoutMobile";

const Main: React.FC = () => {
  const isMobile = useIsMobile(ScreenSize.XL);

  return (
    <>
      {isMobile && <LayoutMobile />}
      {!isMobile && <LayoutDesktop />}
    </>
  );
}

export default Main;