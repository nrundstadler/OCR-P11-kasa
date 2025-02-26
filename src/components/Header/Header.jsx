import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <header className="d-flex flex-row align-items-center container">
      <div className="flex-fill">
        <img src={logo} alt="logo Kasa" width={211} height={68} />
      </div>
      <nav className={styles.navbar}>
        <ul className="d-flex flex-row">
          <li>
            <a href="#" className="active">
              Accueil
            </a>
          </li>
          <li>
            <a href="#">A Propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
