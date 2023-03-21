import React, { useRef, useState } from "react";

import useMediaQuery from "../../hooks/useMediaQuery";

import Title from "./Title";

import "./Header.css";
import {
  DISPLAY_BLOCK,
  DISPLAY_NONE,
  HAMBURGER_ICON,
  CROSS_ICON,
  OPEN_MENU,
  CLOSE_MENU,
} from "../../utils/constants";

const openMenuState = {
  text: HAMBURGER_ICON,
  ariaLabel: OPEN_MENU,
};

const closeMenuState = {
  text: CROSS_ICON,
  ariaLabel: CLOSE_MENU,
};

const Header = () => {
  const navItemsRef = useRef();
  const [menuButton, setMenuButton] = useState(openMenuState);
  const isBelow768 = useMediaQuery("(max-width: 768px)");

  const toggleMenu = () => {
    const navItemsElement = navItemsRef?.current;

    if (isBelow768) {
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

  return (
    <header>
      <nav className="navbar">
        <Title />
        <button
          className="menu-btn"
          onClick={toggleMenu}
          dangerouslySetInnerHTML={{ __html: menuButton.text }}
          aria-label={menuButton.ariaLabel}
        />
        <div className="nav-items" ref={navItemsRef}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
