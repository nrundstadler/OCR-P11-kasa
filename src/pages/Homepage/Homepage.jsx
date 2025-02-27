import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import styles from "./Homepage.module.scss";
import Hero from "../../components/Hero/Hero";
import heroImg from "../../assets/images/hero/home_1240.jpg";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import CardApartment from "./CardApartment/CardApartment";

function Homepage() {
  useEffect(() => {
    document.title = "Kasa | Location d'appartements entre particuliers";
  }, []);

  const { isLoading, hasError, data: ApartmentsData } = useFetch(window.location.origin + "/data/apartments.json");

  if (hasError) {
    return <Error title="500" subtitle="Une erreur est survenue, veuillez réessayer plus tard." />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Hero image={heroImg} altText="Chez vous, partout et ailleurs" title="Chez vous, partout et ailleurs" />
      <section className={styles.cardsWrapper}>
        {ApartmentsData.map(apartment => (
          <CardApartment key={apartment.id} id={apartment.id} src={apartment.cover} title={apartment.title} />
        ))}
      </section>
    </>
  );
}

export default Homepage;
