import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

import Image from "../../assets/Rectangle 12702.svg";
import styles from "./style.module.css";

const Connect = () => {
  const DATA = [
    {
      id: 1,
      text: "We connect our customers with the best?",
      image: <IoIosArrowDropdownCircle className={styles.icon} />,
    },
    {
      id: 2,
      text: "Android research & development rockstar?",
      image: <IoIosArrowDropdownCircle className={styles.icon} />,
    },
  ];
  return (
    <>
      <section className={styles.connect}>
        <div className={styles.ImageContainer}>
          <img src={Image} alt="Connectimage" />
        </div>
        <div className={styles.DescContainer}>
          <div className={styles.Text}>
            <span>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </span>
          </div>
          <div className={styles.dropDown}>
            {DATA.map((item) => (
              <div key={item.id} className={styles.dropList}>
                <span>{item.text}</span>
                <span className={styles.icon}>{item.image}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Connect;
