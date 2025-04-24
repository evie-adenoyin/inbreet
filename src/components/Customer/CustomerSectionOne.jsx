import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";

import Image from "../../assets/Rectangle 1270 (3).svg";
import BarChart from "../../assets/Group 208.svg";
import styles from "./style.module.css";
import Button from "../Button";

const CustomerSectionOne = () => {
  const DATA = [
    {
      id: 1,
      text: "We connect our customers with the best.",
    },
    {
      id: 2,
      text: "Advisor success customer launch party.",
    },
    {
      id: 3,
      text: "Business-to-consumer long tail.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.customerImageContainer}>
        <img className={styles.customerImage} src={Image} alt="CustomerImage" />

        <div className={styles.customerchartContainer1}>
          <div className={styles.chart1}>
            <div className={styles.chartFlow1}>
              <img src={BarChart} alt="Chart" />
            </div>
            <div className={styles.chartGroup1}>
              <span className={styles.chartValue}>30%</span>
              <span className={styles.chartText}>More income in june</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.customerDescription}>
        <span className={styles.content1}>
          {" "}
          We connect our customers with the best, and help them keep up-and stay
          open.
        </span>
        <div className={styles.customerDescriptionList1}>
          {DATA.map((item) => (
            <div key={item.id} className={styles.checkText}>
              <IoCheckmarkCircle className={styles.check} />{" "}
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <Button
          text={"Start now"}
          className={styles.actionBtn}
          variation={true}
        />
      </div>
    </div>
  );
};

export default CustomerSectionOne;
