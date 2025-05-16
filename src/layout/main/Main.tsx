import useIsMobile, { ScreenSize } from "@hooks/app/useIsMobile";
import LayoutDesktop from "./desktop/LayoutDesktop";
import LayoutMobile from "./mobile/LayoutMobile";

const Main: React.FC = () => {
  const isMobile = useIsMobile(ScreenSize.LG);

  return (
    <>
      {isMobile && <LayoutMobile />}
      {!isMobile && <LayoutDesktop />}
    </>
  );
}

export default Main;