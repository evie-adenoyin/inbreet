import React from "react";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Customer from "../../components/Customer";
import Testimonal from "../../components/Testimonal";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Customer />
      <Testimonal />
    </main>
  );
};

export default HomePage;
