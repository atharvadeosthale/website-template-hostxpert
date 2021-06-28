import React from "react";
import "./Hero.css";
import { ReactComponent as Earth } from "./resources/earth.svg";

function Hero() {
  return (
    <div className="hero p-5 md:pl-36 md:pr-36 h-screen flex justify-between items-center">
      <div className="hero__leftContainer text-center md:text-left">
        <div className="hero__heading leading-tight md:leading-snug text-5xl md:text-6xl font-bold md:w-5/6 ">
          Web Hosting made simple
        </div>
        <div className="hero__subheading mt-5 text-lg text-gray-500">
          99.9% uptime and 24/7 support
        </div>
        <div className="hero__button mt-7 flex items-center  flex-col md:flex-row">
          <button className="hero__btn mb-4 md:mb-0">View Pricing</button>
          <button className="hero__btnOutlined md:ml-6">Request Demo</button>
        </div>
      </div>
      <div className="hero__rightContainer">
        <Earth
          className="opacity-0 h-1 w-1 md:opacity-100 lg:h-auto lg:w-auto md:h-96 md:w-96"
          style={{ marginTop: -50 }}
        />
      </div>
    </div>
  );
}

export default Hero;
