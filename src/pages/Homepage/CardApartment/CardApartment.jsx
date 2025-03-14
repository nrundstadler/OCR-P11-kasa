import styles from "./CardApartment.module.scss";
import { Link } from "react-router-dom";

function CardApartment({ id, src, title }) {
  return (
    <Link className={styles.link} to={`/appartement/${id}`}>
      <article className={styles.card}>
        <h2>{title}</h2>
        <img src={src} alt={`photo de ${title}`} />
      </article>
    </Link>
  );
}

export default CardApartment;
