import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import styles from "./Apartment.module.scss";

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

  // Display an error message if there was an error fetching the data or if the data is null
  if (hasError || dataApartments === null) {
    return <Error title="500" subtitle="Une erreur est survenue, veuillez réessayer plus tard." />;
  }

  // Display a loading message while the data is being fetched
  if (isLoading) {
    return <Loading />;
  }

  // Display a 404 error message if the apartment with the specified 'id' was not found
  if (!thisApartment) {
    return <Error title="404" subtitle="Oups! La page que vous demandez n'existe pas." />;
  }

  // Render the apartment details
  return (
    <>
      <h1>Appartement id : {thisApartment.id}</h1>
      <h2>{thisApartment.title}</h2>
    </>
  );
}

export default Apartment;
