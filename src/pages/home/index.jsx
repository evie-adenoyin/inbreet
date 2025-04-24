import React from "react";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Customer from "../../components/Customer";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Customer />
      {/* <Connect /> */}
    </main>
  );
};

export default HomePage;
