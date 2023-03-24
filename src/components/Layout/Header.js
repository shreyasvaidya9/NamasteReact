import React, { useRef, useState } from "react";

import {
  Bars3Icon as Menubar,
  XCircleIcon as Menuclose,
} from "@heroicons/react/24/outline";

import useMediaQuery from "../../hooks/useMediaQuery";

import Title from "./Title";

import "./Header.css";
import {
  DISPLAY_BLOCK,
  DISPLAY_NONE,
  OPEN_MENU,
  CLOSE_MENU,
  BELOW_MEDIUM_SCREEN,
} from "../../utils/constants";

const openMenuState = {
  component: <Menubar />,
  ariaLabel: OPEN_MENU,
};

const closeMenuState = {
  component: <Menuclose />,
  ariaLabel: CLOSE_MENU,
};

const Header = () => {
  const navItemsRef = useRef();
  const [menuButton, setMenuButton] = useState(openMenuState);
  const isBelowMediumScreen = useMediaQuery(BELOW_MEDIUM_SCREEN);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleMenu = () => {
    const navItemsElement = navItemsRef?.current;

    if (isBelowMediumScreen) {
      // get the current display property of the menu button
      const currentDisplay = window
        ?.getComputedStyle(navItemsElement)
        ?.getPropertyValue("display");

      if (currentDisplay === DISPLAY_BLOCK) {
        // close the menu
        navItemsElement.style.display = DISPLAY_NONE;
        setMenuButton(openMenuState);
      } else {
        // open the menu
        navItemsElement.style.display = DISPLAY_BLOCK;
        setMenuButton(closeMenuState);
      }
    }
  };

  const updateAuthentication = () => setIsAuthenticated((value) => !value);

  return (
    <header>
      <nav className="navbar">
        <Title />
        <button
          className="menu-btn"
          onClick={toggleMenu}
          aria-label={menuButton.ariaLabel}
        >
          {menuButton.component}
        </button>
        <div className="nav-items" ref={navItemsRef}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            {isAuthenticated ? (
              <li>
                <button onClick={updateAuthentication}>Logout</button>
              </li>
            ) : (
              <li>
                <button onClick={updateAuthentication}>Login / Register</button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
