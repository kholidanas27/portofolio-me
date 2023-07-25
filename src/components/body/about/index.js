import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
import { Typography } from 'antd';

function About() {
  const { Text } = Typography;
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
        Hello There ✋,I am,
         <br /> <span className="info-name">Kholid Anas Amrulloh</span>.
         <br /> <span>I am Fullstack Developer with experience working using Laravel, Java, AngularJs, ReactJs, ExpressJs, Symfony and VueJs</span>
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/coding.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;