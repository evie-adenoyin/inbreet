import React from "react";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Customer from "../../components/Customer";
import Testimonal from "../../components/Testimonal";
import Connect from "../../components/Connect";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Customer />
      <Testimonal />
      <Connect />
    </main>
  );
};

export default HomePage;
