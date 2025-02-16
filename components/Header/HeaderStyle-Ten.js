
import { useRouter } from "next/navigation";
import HeaderEight from "./Headers/Header-Eight";
import DarkSwitch from "./dark-switch";
import { useAppContext } from "@/context/Context";

const HeaderStyleTen = ({ headerSticky }) => {
  const router = useRouter();
  const { isLightTheme, toggleTheme } = useAppContext();
  return (
    <>
      <DarkSwitch isLight={isLightTheme} switchTheme={toggleTheme} />
      <header className="rbt-header rbt-header-10">
        <HeaderEight
          headerSticky={headerSticky}
          sticky="header-sticky"
          container="container-fluid"
          gapSpaceBetween="header-space-betwween"
          navigationEnd="rbt-navigation-start"
        />
      </header>
    </>
  );
};
export default HeaderStyleTen;
