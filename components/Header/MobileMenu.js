"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/logo/logo.png";

import Nav from "./Nav";
import { useAppContext } from "@/context/Context";

const MobileMenu = () => {
  const { mobile, setMobile } = useAppContext();

  return (
    <>
      <div className={`popup-mobile-menu ${mobile ? "" : "active"}`}>
        <div className="inner-wrapper">
          <div className="inner-top">
            <div className="content">
              <div className="logo">
                <Link href="/">
                  <Image
                    src={logo}
                    width={137}
                    height={45}
                    alt="Education Logo Images"
                  />
                </Link>
              </div>
              <div className="rbt-btn-close">
                <button
                  className="close-button rbt-round-btn"
                  onClick={() => setMobile(!mobile)}
                >
                  <i className="feather-x"></i>
                </button>
              </div>
            </div>
            <p className="description">
              Taslamanyň konsepsiýasy bilim pudagy üçin ähli peýdaly maglumatlary özünde jemleýän umumy informasion bilim platformasyny döretmekden ybarat.
            </p>
          </div>
          <Nav />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
