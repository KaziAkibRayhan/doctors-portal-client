import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import TreatmentInfo from "../TreatmentInfo/TreatmentInfo";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <TreatmentInfo></TreatmentInfo>
    </div>
  );
};

export default Home;
