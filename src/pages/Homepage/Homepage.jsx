import { useEffect } from "react";
import styles from "./Homepage.module.scss";
import Hero from "../../components/Hero/Hero";
import heroImg from "../../assets/images/hero/home_1240.jpg";
import CardApartment from "./CardApartment/CardApartment";

function Homepage() {
  useEffect(() => {
    document.title = "Kasa | Location d'appartements entre particuliers";
  }, []);

  return (
    <>
      <Hero image={heroImg} altText="Chez vous, partout et ailleurs" title="Chez vous, partout et ailleurs" />
      <section className={styles.cardsWrapper}>
        <CardApartment
          src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
          title="Appartement cosy"
        />
        <CardApartment
          src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg"
          title="Magnifique appartement proche Canal Saint Martin"
        />
        <CardApartment
          src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg"
          title="Studio de charme - Buttes Chaumont"
        />
        <CardApartment
          src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg"
          title="Nid douillet au coeur du 11ème"
        />
        <CardApartment
          src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg"
          title="Magnifique appartement proche Canal Saint Martin"
        />
        <CardApartment
          src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg"
          title="Magnifique appartement proche Canal Saint Martin"
        />
        <CardApartment
          src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg"
          title="Magnifique appartement proche Canal Saint Martin"
        />
        <CardApartment
          src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg"
          title="Magnifique appartement proche Canal Saint Martin"
        />
      </section>
    </>
  );
}

export default Homepage;
