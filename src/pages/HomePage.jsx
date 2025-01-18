import React from "react";
import Header from "../components/HomePageComponents/Header";
// import MiddleSection from "../components/HeroSection";
import HeroSection from "../components/HomePageComponents/HeroSection";
import MSection from "../components/HomePageComponents/MSection";
import VideoSection from "../components/HomePageComponents/VideoSection";
import BlackSection from "../components/HomePageComponents/BlackSection";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="pt-[80px] p-6">
        <HeroSection />
        <MSection />
        <VideoSection />
        <BlackSection />
      </div>
    </div>
  );
}

export default HomePage;
