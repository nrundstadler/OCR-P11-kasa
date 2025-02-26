import styles from "./Footer.module.scss";
import logoWhite from "../../assets/images/logo_white.svg";

function Footer() {
  return (
    <footer className={`d-flex flex-column align-items-center justify-content-center flex ${styles.footer}`}>
      <img src={logoWhite} alt="logo Kasa" width={123} height={41} />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
