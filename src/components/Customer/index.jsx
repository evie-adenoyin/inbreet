import React from "react";
import styles from "./style.module.css";

import CustomerSectionOne from "./CustomerSectionOne";
import CustomerSectionTwo from "./CustomerSectionTwo";
const Customer = () => {
  return (
    <>
      <section className={styles.customer}>
        <CustomerSectionOne />
        <CustomerSectionTwo />
      </section>
    </>
  );
};

export default Customer;
