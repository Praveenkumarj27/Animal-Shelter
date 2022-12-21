import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import {
  SvgFB,
  SvgLinkedIn,
  SvgLocation,
  SvgLogo,
  SvgMailIcon,
  SvgTwitter,
} from "../Assets/Assets";

function Footer() {
  return (
    <div className="footerWrapper">
      <div className="footerMain">
        <div className="col-lg-4">
          <div className="banner">
            <SvgLogo />
            <p className="bannerTitle">ANIMAL SHELTER</p>
          </div>
          <p className="con1">
            One of the best animal shelter places in India. We’re recognized by
            the government. Please take a pledge to take care of these lovely
            pets !
          </p>

          <button
            class="btn btn-inline-primary "
            type="button"
            style={{
              background: "#ff6584",
              outline: "#ff6584",
              padding: "10px",
            }}
          >
            Adopt{" "}
            <span>
              {" "}
              <AiOutlineArrowRight />
            </span>
          </button>
        </div>
        <div className="col-lg-4" style={{textAlign:"left",marginLeft:"50px"}}>
          <p className="heading" style={{textAlign:"left",marginLeft:"20px"}}>GET IN TOUCH</p>
          <div className="inline" style={{textAlign:"left"}}>
          <ImLocation2 size={50} color="white" />
            <p className="con2">
              llesfnee cnu efoin eoifn oewifnewo inf sdccsdcneno ie woiwemfwokm
              fwew ecen cloenwo we - 355233
            </p>
          </div>
          <div className="inline">
            <SvgMailIcon />
            <p className="con3">cisubdcusb@gmail.com</p>
          </div>
          <p className="heading"  style={{textAlign:"left",marginLeft:"20px"}}>FOLLOW US</p>

          <span className="link">
            <SvgTwitter />
          </span>
          <span className="link">
            <SvgFB />
          </span>
          <span className="link">
            <SvgLinkedIn />
          </span>
        </div>
        <div className="col-lg-4" style={{textAlign:"left",marginLeft:"50px"}}>
          <p className="heading">QUICK LINKS</p>
          <p className="con3">Home</p>
          <p className="con3">Contact Us</p>
        </div>
      </div>
      <div className="termsAndConditions">
        <p text>Copyright ©2023. Animal Shelter</p>
        <div className="rightSec">
          <p className="condition">Privacy policy</p>
          <p className="condition">Terms of service</p>
          <p className="condition">Privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
