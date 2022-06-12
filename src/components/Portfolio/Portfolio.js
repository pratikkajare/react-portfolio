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
          <img src={TextUtils} alt="TextUtils" />
          <small className="pr_name"> TextUtils</small>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="Amazone_Clone" />
          <small className="pr_name"> Amazone_Clone</small>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Weatherapp} alt="Weatherapp" />
          <small className="pr_name"> Weather App</small>
        </SwiperSlide>
        <SwiperSlide>
          <img src={GithubOverpp} alt="GithubOverpp" />
          <small className="pr_name"> GithubOverview</small>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
