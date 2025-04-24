import React from "react";

import Image from "../../assets/HeroGraphics (1).svg";

import Navbar from "../Navbar";
import Button from "../Button";
import Sponsors from "../Sponsors";

import styles from "./style.module.css";
import { SPONSOR_DATA } from "./Data";

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.divider}>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.container}>
        <Navbar />

        <div className={styles.contentContainer}>
          <div className={styles.contentContainerHeader}>
            <span>Save time by building fast with Boldo Template</span>
            <p>
              Funding handshake buyer business-to-business metrics iPad
              partnership. First <br /> mover advantage innovator success
              deployment non-disclosure.
            </p>
            <div className={styles.contentContainerButtons}>
              <Button
                text={"Buy template"}
                variation={true}
                className={styles.contentContainerButton}
              />
              <Button
                text={"Explore"}
                className={styles.contentContainerButton}
              />
            </div>
          </div>
          <div>
            <img src={Image} alt="" />
          </div>
        </div>
        <div className={styles.contentContainerSponsors}>
          <Sponsors data={SPONSOR_DATA} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
