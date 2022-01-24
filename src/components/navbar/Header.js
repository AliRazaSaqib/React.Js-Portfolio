/** @format */

import React, { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import "./header.css";
import "../../App.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 0 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };

  return (
    <div className={`navbar ${stickyClass}`}>
      <div className="logo-nav">
        <div className="logo-container">
          <a href="#">
            <img src={logo} alt="not found" />
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option active-border" onClick={closeMobileMenu}>
            <a href="#home">Home</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#services">Services</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#testinonials">Testimonials</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#about">About</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseIcon className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
