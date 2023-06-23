import React from "react";
import BannerBackground from "assets/images/home-banner-background.png";
import BannerImage from "assets/images/Financial data-amico.png";
import Navbar from "layouts/welcome/components/Navbar";
import DefaultNavbar from "examples/Navbars/welcomeNavbar";

import { FiArrowRight } from "react-icons/fi";
import MDBox from "components/MDBox";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            InnovAfrica : Push project and Investigate
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
