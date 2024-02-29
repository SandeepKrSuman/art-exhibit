import { useState } from "react";
import { FaBars, FaRegUserCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BagState } from "../../context/BagContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const { bag } = BagState();

  return (
    <nav className={styles.navbar}>
      <span className={styles.navbrand}>
        <a className={styles.brandtitle} href="/">
          <img className={styles.brandlogo} src="/splashblack.png" alt="logo" />
          ArtExhibit
        </a>
      </span>
      <ul className={`${styles.nav} ${show ? styles.show : ""}`}>
        <li className={styles.navitem}>
          <Link
            className={styles.navlink}
            to="/"
            onClick={() => setShow(false)}
          >
            Home
          </Link>
        </li>
        <li className={styles.navitem}>
          <Link
            className={styles.navlink}
            to="/about"
            onClick={() => setShow(false)}
          >
            About
          </Link>
        </li>
        <li className={styles.navitem}>
          <Link
            className={styles.navlink}
            to="/collections"
            onClick={() => setShow(false)}
          >
            Collections
          </Link>
        </li>
        <li className={styles.navitem}>
          <Link
            className={styles.navlink}
            to="/contact"
            onClick={() => setShow(false)}
          >
            Contact
          </Link>
        </li>
      </ul>

      <span className={styles.buttons}>
        <Link to="/bag">
          <button className={styles.cart}>
            <IoBagHandleOutline />
            <span className={styles.itemCount}>{bag.length}</span>
          </button>
        </Link>
        <Link to="/profile">
          <button className={styles.profile}>
            <FaRegUserCircle />
          </button>
        </Link>
        <button
          className={styles.togglerBtn}
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? <IoMdClose /> : <FaBars />}
        </button>
      </span>
    </nav>
  );
}
