import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="d-flex flex-row align-items-center container">
      <div className="flex-fill">
        <img src={logo} alt="logo Kasa" width={211} height={68} />
      </div>
      <nav className={styles.navbar}>
        <ul className="d-flex flex-row">
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
