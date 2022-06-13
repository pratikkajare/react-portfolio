import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TextUtils from "../../img/TextUtills.png";
import Ecommerce from "../../img/Amazone_clone.png";
import GithubOverpp from "../../img/githubOver.png";
import Weatherapp from "../../img/weatherapp.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      {/* <span>Portfolio</span> */}

      {/* slider */}
      <Swiper
        spaceBetween={70}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a
            className="a_link"
            href="https://weatherapp-pratik.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Weatherapp} alt="Weatherapp" />
            <small className="pr_name"> Weather_App</small>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a
            className="a_link"
            href="https://pratikkajare.github.io/Amazone-clone/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Ecommerce} alt="Amazone_Clone" />
            <small className="pr_name"> Amazone_Clone</small>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            className="a_link"
            href="https://pratikkajare.github.io/TextUtility/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={TextUtils} alt="TextUtils" />
            <small className="pr_name"> TextUtils</small>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a
            className="a_link"
            href="https://github.com/PratikKajare/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GithubOverpp} alt="GithubOverpp" />
            <small className="pr_name"> GithubOverview</small>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
