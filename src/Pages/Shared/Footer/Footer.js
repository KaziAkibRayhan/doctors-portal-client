import React from "react";
import { Link } from "react-router-dom";
import footer from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
      }}
      className="p-10"
    >
      <div className="footer justify-around">
        <div>
          <span className="footer-title">Services</span>
          <Link to={"/"} className="link link-hover">
            Emergency Checkup
          </Link>
          <Link to={"/"} className="link link-hover">
            Monthly Checkup
          </Link>
          <Link to={"/"} className="link link-hover">
            Weekly Checkup
          </Link>
          <Link to={"/"} className="link link-hover">
            Deep Checkup
          </Link>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <Link to={"/"} className="link link-hover">
            Fluoride Treatment
          </Link>
          <Link to={"/"} className="link link-hover">
            Cavity Filling
          </Link>
          <Link to={"/"} className="link link-hover">
            Teath Whitening
          </Link>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <Link to={"/"} className="link link-hover">
            New York - 101010 Hudson
          </Link>
        </div>
      </div>
      <div className="text-center mt-24">
        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
