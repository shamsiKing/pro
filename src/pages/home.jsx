import React from "react";
import HeroSection from "../companents/HeroSection/HeroSection";
import TrustedSlider from "../companents/TrustedSlider/TrustedSlider";
import RobotAutomationSection from "../companents/RobotAutomationSection/RobotAutomationSection";
import CobotsSeriesSlider from "../companents/CobotsSeriesSlider/CobotsSeriesSlider";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TrustedSlider />
      <RobotAutomationSection />
      <CobotsSeriesSlider/>
    </div>
  );
};

export default Home;
