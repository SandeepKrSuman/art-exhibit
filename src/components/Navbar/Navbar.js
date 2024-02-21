import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <nav className={styles.navbar}>
      <span className={styles.navbrand}>
        <a className={styles.brandtitle} href="/">
          ArtExhibit
        </a>
      </span>
      <ul className={`${styles.nav} ${show ? styles.show : ""}`}>
        <li className={styles.navitem}>
          <a className={styles.navlink} href="/">
            Home
          </a>
        </li>
        <li className={styles.navitem}>
          <a className={styles.navlink} href="/about">
            About
          </a>
        </li>
        <li className={styles.navitem}>
          <a className={styles.navlink} href="/collections">
            Collections
          </a>
        </li>
        <li className={styles.navitem}>
          <a className={styles.navlink} href="/contact">
            Contact
          </a>
        </li>
      </ul>
      <span className={styles.toggler}>
        <button
          className={styles.togglerBtn}
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? <IoMdClose /> : <IoBagHandleOutline />}
        </button>
      </span>
    </nav>
  );
}
