import styles from "./StarRating.module.scss";
import starImg from "../../assets/images/star.svg";

const StarRating = ({ rating }) => {
  const stars = Array(5)
    .fill(false)
    .map((element, index) => index < rating);

  return (
    <div className={styles.starRating}>
      <span className="sr-only">{`Note de l'appartement : ${rating} sur 5`}</span>
      {stars.map((isFilled, index) => (
        <img
          src={starImg}
          alt="classement"
          width={25}
          height={24}
          role="img"
          key={index}
          className={`${styles.starImg} ${!isFilled ? styles.starImgEmpty : ""}`}
        />
      ))}
    </div>
  );
};

export default StarRating;
