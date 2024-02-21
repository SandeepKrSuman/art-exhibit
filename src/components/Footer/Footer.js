import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import styles from "./Footer.module.css";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <FaFacebookF /> &nbsp; <FaInstagram /> &nbsp; <FaXTwitter /> &nbsp;{" "}
        <MdEmail />
      </p>
      <p>Copyright &#169; {year} ArtExhibit</p>
    </footer>
  );
}
