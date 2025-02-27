import styles from "./CardApartment.module.scss";

function CardApartment({ src, title }) {
  return (
    <a className={styles.link} href="">
      <article className={styles.card}>
        <h2>{title}</h2>
        <img src={src} alt={`photo de ${title}`} />
      </article>
    </a>
  );
}

export default CardApartment;
