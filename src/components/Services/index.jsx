import React from "react";
import styles from "./style.module.css";
import { DATA } from "./Data";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesWrapper}>
        <div className={styles.servicesHeader}>
          <span className={styles.servicesTitle}>Our services</span>
          <span className={styles.servicesSubtitle}>
            Handshake infographic mass market crowdfunding iteration.
          </span>
        </div>
        <ServiceItem data={DATA} />
      </div>
    </section>
  );
};

export default Services;
