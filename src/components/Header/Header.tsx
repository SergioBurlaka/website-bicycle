import mainLogo from "../../assets/img/logos/logo-1.png";

import { useEffect, useState } from "react";

import "./header.scss";

import { useResponsive } from "ahooks";

function Header() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);

  const { lg: isLg } = useResponsive();

  useEffect(() => {
    setSidebarCollapsed(!isLg);
    setOpenBurger(isLg);
  }, [isLg]);

  return (
    <header className={`header ${openBurger && !isLg ? "open-modal" : ""}`}>
      <div className="my-container">
        <div className="header__row">
          <img className="logo" src={mainLogo} alt="" />

          {!sidebarCollapsed && (
            <ul className="menu">
              <li>about us</li>
              <li>work</li>
              <li>shop</li>
              <li>contact</li>
            </ul>
          )}

          {!isLg && (
            <div
              onClick={() => {
                if (openBurger) {
                  document.body.style.overflow = "unset";
                } else {
                  document.body.style.overflow = "hidden";
                }
                setOpenBurger(!openBurger);
                setSidebarCollapsed(openBurger);
              }}
              className={`burger ${openBurger ? "active" : ""}`}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
