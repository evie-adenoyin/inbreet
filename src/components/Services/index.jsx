import React from "react";
import styles from "./style.module.css";
import { DATA } from "./Data";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <>
      <section className={styles.services}>
        <div className={styles.servicesCon}>
          <div className={styles.ServicesHeader}>
            <span className={styles.ServicesHeaderTextHeading}>
              Our services
            </span>
            <span className={styles.ServicesHeaderText}>
              Handshake infographic mass market crowdfunding iteration.
            </span>
          </div>
          <ServiceItem data={DATA} />
        </div>
      </section>
    </>
  );
};

export default Services;
