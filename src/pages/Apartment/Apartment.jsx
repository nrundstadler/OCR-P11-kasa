import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import styles from "./Apartment.module.scss";
import Carousel from "../../components/Carousel/Carousel";
import StarRating from "../../components/StarRating/StarRating";
import Collapse from "../../components/Collapses/Collapse/Collapse";
import CollapsesContainer from "../../components/Collapses/CollapsesContainer/CollapsesContainer";

function Apartment() {
  // Extract the id of the apartment from the URL
  const { id } = useParams();

  // Fetch the apartments data
  const { isLoading, hasError, data: dataApartments } = useFetch(window.location.origin + "/data/apartments.json");

  // Find the apartment with the matching 'id' from the fetched data
  const thisApartment = dataApartments ? dataApartments.find(apartment => apartment.id === id) : null;

  // Update the document title with the apartment name
  useEffect(() => {
    if (thisApartment) {
      document.title = `${thisApartment.title} - Kasa`;
    }
  }, [thisApartment]);

  // Display a loading message while the data is being fetched
  if (isLoading) {
    return <Loading />;
  }

  // Display an error message if there was an error fetching the data or if the data is null
  if (hasError || dataApartments === null) {
    return <Error title="500" subtitle="Une erreur est survenue, veuillez réessayer plus tard." />;
  }

  // Display a 404 error message if the apartment with the specified 'id' was not found
  if (!thisApartment) {
    return <Error title="404" subtitle="Oups! La page que vous demandez n'existe pas." />;
  }

  const [firstName, lastName] = thisApartment.host.name.split(" ");

  // Render the apartment details
  return (
    <>
      {Array.isArray(thisApartment.pictures) && thisApartment.pictures.length > 0 && (
        <Carousel pictures={thisApartment.pictures} />
      )}
      <section className={styles.appartmentDetails}>
        <div className={styles.appartmentInfo}>
          <h1>{thisApartment.title}</h1>
          <h2 className={styles.location}>{thisApartment.location}</h2>
          <div className={styles.tagsWraper}>
            <div className={styles.tag}>Cozy</div>
            <div className={styles.tag}>Canal</div>
            <div className={styles.tag}>Paris 10</div>
          </div>
        </div>
        <div className={styles.ratingHostWraper}>
          <div className={styles.hostWraper}>
            <div className={styles.hostName}>
              {firstName}
              <br />
              {lastName}
            </div>
            <img className={styles.hostPicture} src={thisApartment.host.picture} alt="Propriétaire de l'appartement" />
          </div>
          {thisApartment.rating && <StarRating rating={thisApartment.rating} />}
        </div>
      </section>
      <CollapsesContainer columns={2}>
        <Collapse title="Description" titleLevel={3}>
          <p>{thisApartment.description}</p>
        </Collapse>
        <Collapse title="Équipements" titleLevel={3}>
          <ul>
            {thisApartment.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </CollapsesContainer>
    </>
  );
}

export default Apartment;
