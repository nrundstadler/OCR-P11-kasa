import { useEffect } from "react";

import styles from "./About.module.scss";
import Hero from "../../components/Hero/Hero";
import imgHero from "../../assets/images/hero/about_1240.jpg";
import Collapse from "../../components/Collapses/Collapse/Collapse";
import CollapsesContainer from "../../components/Collapses/CollapsesContainer/CollapsesContainer";

function About() {
  useEffect(() => {
    document.title = "A propros - Kasa";
  }, []);

  return (
    <>
      <Hero image={imgHero} altText="A propros" />
      <section className={styles.aboutContainer}>
        <CollapsesContainer>
          <Collapse title="Fiabilité" titleLevel={1}>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et
            toutes les informations sont régulièrement vérifiées par nos équipes
          </Collapse>
          <Collapse title="Respect" titleLevel={1}>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
            pertubation du voisinage entraînera une exclusion de notre plateforme.
          </Collapse>
          <Collapse title="Service" titleLevel={1}>
            La qualité du service est au cœur de notre engagement chez Kassa. Nous veillons à ce que chaque interaction,
            que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienvaillance.
          </Collapse>
          <Collapse title="Sécurité " titleLevel={1}>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
            correspond aux critères de sécurité établis par nos services. En laissant une note ausssi bien à l&apos;hôte
            qu&apos;au locataire, cela permet à nos équipe de vérifier que les standards sont bien respectés. Nous
            organisons également des ateliers sur la sécurité domestique pour nos hôtes.
          </Collapse>
        </CollapsesContainer>
      </section>
    </>
  );
}

export default About;
