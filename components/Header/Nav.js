
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { useState } from "react";


const Nav = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const pathname = usePathname();

  const isActive = (href) => pathname.startsWith(href);

  const toggleMenuItem = (item) => {
    setActiveMenuItem(activeMenuItem === item ? null : item);
  };

  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        <li className="has-dropdown has-menu-child-item">
          <Link
            className={isActive("/talyp-paneli") ? "active" : ""}
            href="/talyp-paneli"
            >
              Talyp paneli
          </Link>
        </li>
        <li className="has-dropdown has-menu-child-item">
          <Link
            className={isActive("/biz-barada") ? "active" : ""}
            href="/biz-barada"
            // onClick={(e) => {
            //   e.preventDefault(); 
            // }}
            >
              Biz barada
          </Link>
        </li>
        <li className="has-dropdown has-menu-child-item">
          <Link
            className={isActive("/cesmeler") ? "active" : ""}
            href="/cesmeler"
            >
              Çeşmeler
          </Link>
        </li>
        {/* <li className="has-dropdown has-menu-child-item">
          <Link
              className={isActive("/biz-barada") ? "active" : ""}
              href="/biz-barada"
              >
                Biz barada
            </Link>
        </li> */}
      </ul>
    </nav>
  );
};
export default Nav;
