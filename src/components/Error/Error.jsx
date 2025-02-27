import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Error.module.scss";

function Error({ title = "Erreur", subtitle = "Une erreur s'est produite." }) {
  useEffect(() => {
    document.title = title + " - Kasa";
  }, [title]);

  return (
    <section className={`${styles.error} d-flex flex-column align-items-center justify-content-se flex-fill`}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <Link to="/">Retourner sur la page d&rsquo;accueil</Link>
    </section>
  );
}

export default Error;
