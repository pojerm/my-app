import React from "react";
import "./image.css";
import mobileImage from "../../assets/illustration-sign-up-mobile.svg";
import desktopImage from "../../assets/illustration-sign-up-desktop.svg";

export const Image = () => {
  return (
    <div className="picture-wrapper">
      <picture>
        <source
          srcset={desktopImage}
          media="(min-width: 600px)"
          className="desktop-image"
        />
        <img src={mobileImage} alt="" className="mobile-image" />
      </picture>
    </div>
  );
};
