import styles from "./Hero.module.scss";

function Hero({ image, altText, title }) {
  return (
    <section className={styles.hero}>
      <img src={image} alt={altText} />
      {title && <h1>{title}</h1>}
    </section>
  );
}

export default Hero;
