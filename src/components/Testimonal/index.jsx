import React from "react";
import styles from "./style.module.css";
import { Data } from "./Data";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

const Testimonal = () => {
  return (
    <>
      <section className={styles.testimonal}>
        <div className={styles.testimonalContainer}>
          <div className={styles.testimonalDescription}>
            <span>An enterprise template to ramp up your company website</span>
          </div>
          <div className={styles.Buttons}>
            <button>
              <FiArrowLeft className={styles.arrow} />
            </button>
            <button>
              <FiArrowRight className={styles.arrow} />
            </button>
          </div>

          <div className={`${styles.testimonies}`}>
            {Data.map((item) => (
              <div key={item.id} className={styles.slideContainer}>
                <div className={styles.list}>
                  <span className={styles.text}>"{item.text}"</span>
                  <div className={styles.listCont}>
                    <img src={item.image} alt="logoImage" />
                    <div className={styles.Imag}>
                      <span className={styles.name}>{item.name}</span>
                      <span className={styles.position}>{item.position}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonal;
