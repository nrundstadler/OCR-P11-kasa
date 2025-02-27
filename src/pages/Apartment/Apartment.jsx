import { useEffect } from "react";
import styles from "./Apartment.module.scss";

function Apartment() {
  useEffect(() => {
    document.title = "Appartement - Kasa";
  }, []);

  return <h1>Apartment</h1>;
}

export default Apartment;
