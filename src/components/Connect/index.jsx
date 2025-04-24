import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

import Image from "../../assets/Rectangle 12702.svg";
import styles from "./style.module.css";

const Connect = () => {
  const DATA = [
    {
      id: 1,
      text: "We connect our customers with the best?",
      icon: <IoIosArrowDropdownCircle size={32} color="#0a2640" />,
    },
    {
      id: 2,
      text: "Android research & development rockstar?",
      icon: <IoIosArrowDropdownCircle size={32} color="#0a2640" />,
    },
  ];
  return (
    <section className={styles.connect}>
      <img src={Image} alt="Connectimage" className={styles.imageWrapper} />

      <div className={styles.contentWrapper}>
        <p className={styles.sectionHeader}>
          We connect our customers with the best, and help them keep up-and stay
          open.
        </p>
        <div className={styles.dropDown}>
          {DATA.map((item) => (
            <div key={item.id} className={styles.dropList}>
              <span>{item?.text}</span>
              <span>{item?.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connect;
