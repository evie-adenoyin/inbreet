import React from "react";
import { useNavigate } from "react-router-dom";

import ImageLogo from "../../assets/Logo.svg";
import styles from "./style.module.css";
import Button from "../Button";

const Navbar = () => {
  const navigate = useNavigate();
  const LINKS = [
    {
      title: "Products",
      href: "/",
    },
    {
      title: "Services",
      href: "/",
    },
    {
      title: "About",
      href: "/",
    },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        <img src={ImageLogo} alt="imageLogo" className={styles.img} />
      </div>
      <div className={styles.navLinks}>
        <div className={styles.navLinks}>
          {LINKS.map((link, key) => (
            <a key={key} href={link?.href}>
              {link?.title}
            </a>
          ))}
        </div>
        <div>
          <Button text={"Log In"} className={styles.login} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
