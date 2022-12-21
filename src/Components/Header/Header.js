import React from "react";
import { Link } from "react-scroll";
import {
  SvgInstagram,
  SvgLinkedIn,
  SvgLogo,
  SvgTwitter,
} from "../../Assets/Assets";
import "./Header.css"

function Header() {
  return (
    <div className="headerContainer">
      <div className="leftSide">
        <SvgLogo />
        <Link className="title">Animal Shelter</Link>
      </div>
      <div className="hidden lg:block">
        <div className="mid">
          <Link to="/" className=" text">
            Home
          </Link>
          <Link to="/footer" className="text">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="social">
        <ul>
          <li className="item">
            <Link to="/" rel="noopener noreferrer">
              <SvgLinkedIn />
            </Link>
          </li>
          <li className="item">
            <Link to="/" rel="noopener noreferrer">
              <SvgInstagram />
            </Link>
          </li>
          <li className="item">
            <Link to="/" rel="noopener noreferrer">
              <SvgTwitter />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
