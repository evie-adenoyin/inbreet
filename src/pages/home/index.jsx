import React from "react";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Customer from "../../components/Customer";
import Testimonal from "../../components/Testimonal";
import Connect from "../../components/Connect";
import Blog from "../../components/Blog";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Customer />
      <Testimonal />
      <Connect />
      <Blog />
      <Footer />
    </main>
  );
};

export default HomePage;
