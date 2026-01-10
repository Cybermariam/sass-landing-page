import React from "react";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import ContentSection from "../components/ContentSection";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Testimonial from "../components/Testimonial";

import FaQs from "../components/FaQs";

const LandingPage = () => {
  return (
    <div className="flex flex-col grow">
      <HeroSection />
      <FeatureSection />
      <ContentSection />
      <Services />
      <Pricing />
      <Testimonial />
      <FaQs />
    </div>
  );
};

export default LandingPage;
