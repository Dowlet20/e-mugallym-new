
"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import TeamThree from "@/components/Team/TeamThree";


const InstructorPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen 
            headerSticky="rbt-sticky" 
            headerType="" 
          />
          <MobileMenu />
          <Cart />
          <BreadCrumb title="Çeşmeler" text="Çeşmeler" />
          <div 
            className="rbt-team-area bg-color-white rbt-section-gapBottom"
          >
            <TeamThree />
          </div>
          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default InstructorPage;