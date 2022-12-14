import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Barcode from "../../assets/barcode.png";

const Header = () => {
  return (
    <header className="web-header">
      <div className="header-wrapper">
        <Link to="/">
          <h1 className="logo">mIIu</h1>
        </Link>
        <ul className="web-navs">
          <Link to="/">
            <li className="web-nav" key="1">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="web-nav" key="2">
              About
            </li>
          </Link>
          <Link to="/music">
            <li className="web-nav" key="3">
              Musics
            </li>
          </Link>
          <a target="_blink" href="https://twitter.com/m2uofficial">
            <li className="web-nav" key="4">
              Contact
            </li>
          </a>
        </ul>
        <div className="header-bottom">
          <p>Music To You.</p>
          <img className="barcode" src={Barcode} alt="II barcode" />
        </div>
      </div>
    </header>
  );
};

export default Header;
