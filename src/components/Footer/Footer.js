import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Pratikkajare826@gmail.com</span>
        <div className="f-icons">
          <a
            href="https://www.instagram.com/pratik_kajare/"
            target="_blank"
            rel="noreferrer"
          >
            <Insta color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.linkedin.com/in/pratik-kajare-3699a51aa/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin color="white" size={"3rem"} />
          </a>
          <a
            href="https://github.com/PratikKajare"
            target="_blank"
            rel="noreferrer"
          >
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
