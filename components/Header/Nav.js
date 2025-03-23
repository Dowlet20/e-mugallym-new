
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
            className={isActive("/student-dashboard") ? "active" : ""}
            href="/student-dashboard"
            >
              Talyp paneli
          </Link>
        </li>
        <li className="has-dropdown has-menu-child-item">
          <Link
            className={isActive("/kitaphana") ? "active" : ""}
            href="/kitaphana"
            onClick={(e) => {
              e.preventDefault(); 
            }}
            >
              Kitaphana
          </Link>
        </li>
        <li className="has-dropdown has-menu-child-item">
          <Link
            className={isActive("/cesme") ? "active" : ""}
            href="/cesme"
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
