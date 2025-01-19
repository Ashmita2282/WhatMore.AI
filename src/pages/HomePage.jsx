import React from "react";
import Header from "../components/HomePageComponents/Header";
import HeroSection from "../components/HomePageComponents/HeroSection";
import VideoSection from "../components/HomePageComponents/VideoSection";
import BlackSection from "../components/HomePageComponents/BlackSection";
import FAQs from "../components/HomePageComponents/FAQs";
import Footer from "../components/HomePageComponents/Footer";
import ConvertSection from "../components/HomePageComponents/ConvertSection";
import ManageSection from "../components/HomePageComponents/ManageSection";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="pt-[80px]">
        <HeroSection />
        <VideoSection />
        <BlackSection />
        <ConvertSection />
        <ManageSection />
        <FAQs />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
