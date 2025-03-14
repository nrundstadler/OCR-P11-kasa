import { useState } from "react";
import styles from "./Carousel.module.scss";

const Carousel = ({ pictures }) => {
  const [index, setIndex] = useState(0);
  const hasMultiplePictures = pictures.length > 1;

  const prevSlide = () => {
    setIndex(currentIndex => (currentIndex === 0 ? pictures.length - 1 : currentIndex - 1));
  };

  const nextSlide = () => {
    setIndex(currentIndex => (currentIndex === pictures.length - 1 ? 0 : currentIndex + 1));
  };

  return (
    <div className={styles.carousel} aria-label="Carrousel de photos">
      {hasMultiplePictures && (
        <button className={styles.btnPrev} onClick={prevSlide} aria-label="Image précédente">
          &lsaquo;
        </button>
      )}
      <div className={styles.carouselTrack} style={{ transform: `translateX(-${index * 100}%)` }}>
        {pictures.map((img, i) => (
          <img key={i} src={img} alt={`Photo ${i + 1}`} className={styles.carouselPicture} />
        ))}
      </div>
      {hasMultiplePictures && (
        <button className={styles.btnNext} onClick={nextSlide} aria-label="Image suivante">
          &rsaquo;
        </button>
      )}
    </div>
  );
};

export default Carousel;
