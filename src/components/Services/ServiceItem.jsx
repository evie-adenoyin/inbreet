import React from "react";

import { IoArrowForwardOutline } from "react-icons/io5";
import styles from "./style.module.css";

const ServiceItem = ({ data }) => {
  return (
    <article className={styles.servicesGrid}>
      {data.map((item, key) => (
        <div key={key} className={styles.serviceCard}>
          <img src={item?.image} alt="Service illustration" />
          <span>{item?.text}</span>
          <div className={styles.serviceExplore}>
            <span>{item?.explore}</span>
            <div>
              <IoArrowForwardOutline size={20} color="white" />
            </div>
          </div>
        </div>
      ))}
    </article>
  );
};

export default ServiceItem;
