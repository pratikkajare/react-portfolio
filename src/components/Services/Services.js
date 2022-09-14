import React, { useContext } from "react";
import "./Services.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import "./Works.css";
import html from "../../img/html5.png";
import Reactpng from "../../img/react.png";
import Css3 from "../../img/css3.png";
import Mysqld from "../../img/mysql.png";
import Javasp from "../../img/javas.png";
import Mongod from "../../img/mongodb.png";
import Phpp from "../../img/phpp.png";
import Nodep from "../../img/nodep.png";
import Clp from "../../img/c++p.png";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  // const transition = {
  //   duration: 1,
  //   type: "spring",
  // };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>
          Frontend Developer with experience in web designing and development.
        </span>
        <a
          href="https://drive.google.com/drive/u/0/folders/1kxfzetj-JeRVs7YrO9VxN3nDFzEOxH6o"
          download
        >
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.0, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={html} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Css3} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Reactpng} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Mysqld} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Javasp} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Nodep} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Clp} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Phpp} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Mongod} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Services;
