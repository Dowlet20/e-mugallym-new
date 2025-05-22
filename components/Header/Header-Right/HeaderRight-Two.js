"use client";

import Link from "next/link";

import { useSelector } from "react-redux";
import { useAppContext } from "@/context/Context";
import { useRouter } from "next/navigation";
import User from "../Offcanvas/User";

const HeaderRightTwo = ({ btnClass, btnText, userType }) => {
  const { mobile, setMobile, search, setSearch, cartToggle, setCart, token, setToken } =
    useAppContext();
  const router = useRouter();
  const { total_items } = useSelector((state) => state.CartReducer);

  return (
    <div className="header-right">
      <ul className="quick-access">
        {token && (
          <li className="access-icon">
            <Link
              className={`search-trigger-active rbt-round-btn ${
                search ? "" : "open"
              }`}
              href="#"
              onClick={() => setSearch(!search)}
            >
              <i className="feather-search"></i>
            </Link>
          </li>
        )}
        {token && (
          <li className="account-access rbt-user-wrapper d-none d-xl-block">
          <Link href="#">
            <i className="feather-user"></i>
            {userType}
          </Link>
          <User />
        </li>
        )}
        {!token ? (
          <li className="container px-4 py-3 d-flex justify-content-between align-items-center">

            <div className="d-flex gap-3">
              <Link 
                className="btn  px-5 py-3"
                style={{
                  borderColor: '#705fec',
                  color: '#705fec',
                  fontSize:"15px",
                }}
                href="/login"
              >
                Giriş
              </Link>
              <Link 
                className="btn px-5 py-3"
                style={{
                  backgroundColor: '#8a62f4',
                  color: 'white',
                  fontSize:"15px",
                }}
                href="/register"
              >
                Agza bol
              </Link>
            </div>
          </li>
        ) :(
          // <li className="container px-4 py-3 d-flex justify-content-between align-items-center">

          //   <div className="d-flex gap-3">
          //     <button 
          //       className="btn  px-5 py-3"
          //       style={{
          //         borderColor: '#705fec',
          //         color: '#705fec',
          //         fontSize:"15px",
          //       }}

          //       onClick={() => {
          //         sessionStorage.removeItem("authToken");
          //         sessionStorage.removeItem("refreshToken");
          //         setToken(false)
          //         router.push("/")
          //       }}
          //     >
          //       Çykyş
          //     </button>
          //   </div>
          // </li>
          <></>
        )}
      </ul>

      <div className="mobile-menu-bar d-block d-xl-none">
        <div className="hamberger">
          <button
            className="hamberger-button rbt-round-btn"
            onClick={() => setMobile(!mobile)}
          >
            <i className="feather-menu"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderRightTwo;
