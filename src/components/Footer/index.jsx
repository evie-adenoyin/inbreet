import React from "react";
import styles from "./style.module.css";
import ImageLogo from "../../assets/Logo.svg";
import { Data } from "./Data";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.cta}>
        <div className={styles.ctaDivider}>
          <div className={styles.ctaCircle}></div>
        </div>
        <div className={styles.ctaContent}>
          <span>An enterprise template to ramp up your company website</span>

          <form className={styles.ctaForm}>
            <input type="text" placeholder="Your email address" />
            <button> Start Now</button>
          </form>
        </div>
      </div>
      <div className={styles.footerMain}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <img src={ImageLogo} alt="Logo" />
            <p>
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
            <span>All rights reserved.</span>
          </div>
          <div className={styles.footerNav}>
            <button className={styles.hiringButton}>Hiring!</button>
            {Data.map((link, key) => (
              <div key={key} className={styles.navGroup}>
                <span className={styles.footheader}>{link.navHeader}</span>
                <div className={styles.navLinks}>
                  {link.navLinks.map((subLink, key) => (
                    <span key={key}>{subLink?.title}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
