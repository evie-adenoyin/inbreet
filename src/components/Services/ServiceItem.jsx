import React from "react";

import { IoArrowForwardOutline } from "react-icons/io5";
import styles from "./style.module.css";

const ServiceItem = ({ data }) => {
  return (
    <article className={styles.servicesContainer}>
      {data.map((item, key) => (
        <div key={key} className={styles.servicesArticlesContainer}>
          <img src={item?.image} alt="" />
          <span>{item?.text}</span>
          <div className={styles.explore}>
            <span>{item?.explore}</span>
            <div>
              <IoArrowForwardOutline className={styles.arrow} />
            </div>
          </div>
        </div>
      ))}
    </article>
  );
};

export default ServiceItem;
