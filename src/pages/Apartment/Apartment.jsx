import { useEffect } from "react";
import styles from "./Apartment.module.scss";
import { useParams } from "react-router-dom";

function Apartment() {
  // Extract the 'id' of the apartment from the URL
  const { id } = useParams();

  useEffect(() => {
    document.title = "Appartement - Kasa";
  }, []);

  return <h1>Appartement id : {id}</h1>;
}

export default Apartment;
