import React from "react";
import Pricing from "../components/Pricing/Pricing";
import ProjectDiscuss from "../components/shared/projectdiscuss/ProjectDiscuss";
import FAQ from "../components/FAQ/faq";

const PriceDetails = () => {
  return (
    <div className="pt-10 text-white">
      <Pricing></Pricing> <FAQ></FAQ> <ProjectDiscuss></ProjectDiscuss>
    </div>
  );
};

export default PriceDetails;
