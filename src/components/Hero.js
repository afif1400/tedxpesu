import React from "react";
import backgroundImage from "../assets/Earth_Black_background.jpg";
import socialButton from "../assets/Countdown_social_share_01 - Black BG.png";
import { Button } from "@material-ui/core";

const Hero = () => {
  return (
    <div className="hero_container">
      <img className="earth_image" src={backgroundImage} />
      <div className="hero_heading">
        <p className="h1">
          Coming to you on <span>10.10.20</span>
        </p>
        <p className="h2">Change climate change.</p>
        <p className="h3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
          doloribus ea illo minima modi molestiae recusandae? At delectus itaque
          laborum.
        </p>
        <div className="register">
          <Button size="large" variant="contained" className="button">
            Register
          </Button>
        </div>
        <div className="socialButton">
          <img src={socialButton} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
