import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/logo/logo.png";
import logoLight from "../../public/images/dark/logo/logo-light.png";

import CopyRight from "./CopyRight";

import FooterData from "../../data/footer.json";
import SingleFooter from "./FooterProps/SingleFooter";
import { useAppContext } from "@/context/Context";

const FooterOne = ({ bgColor }) => {
  const { isLightTheme } = useAppContext();
  return (
    <>
      <footer
        className={`rbt-footer footer-style-1 ${
          bgColor ? bgColor : "bg-color-white"
        } overflow-hidden`}
      >
        {/* <div className="footer-top">
          <div className="container">
            {FooterData &&
              FooterData.footerTwo.map((footer, index) => (
                <div className="row g-5 justify-content-around" key={index}>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="footer-widget">
                      <div className="logo">
                        <Link href="/">
                          {isLightTheme ? (
                            <Image
                              src={logo}
                              width={152}
                              height={50}
                              priority={true}
                              alt="Education Logo Images"
                            />
                          ) : (
                            <Image
                              src={logoLight}
                              width={152}
                              height={50}
                              priority={true}
                              alt="Education Logo Images"
                            />
                          )}
                        </Link>
                      </div>

                      <p className="description mt--20">{footer.description}</p>
                      
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div> */}

        <CopyRight />
      </footer>
    </>
  );
};

export default FooterOne;
