import React from "react";
import { Link } from "react-scroll";


import {
  SvgInstagram,
  SvgLinkedIn,
  SvgLogo,
  SvgTwitter,
} from "../Assets/Assets";

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

      {/* <div className="social">
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
      </div> */}
      <div className="social">
        <ul>
          <li className="item">
            <a
              href="https://www.linkedin.com/in/praveenkumar-j-082b91248/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgLinkedIn/>
            </a>
          </li>
          <li className="item">
            <a
              href="https://github.com/Praveenkumarj27"
              target="_blank"
              rel="noopener noreferrer"
            >
             <SvgInstagram/>
            </a>
          </li>
          <li className="item">
            <a
              href="https://twitter.com/Praveenj27"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgTwitter/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
