import { useEffect } from "react";

import styles from "./About.module.scss";
import Hero from "../../components/Hero/Hero";
import imgHero from "../../assets/images/hero/about_1240.jpg";

function About() {
  useEffect(() => {
    document.title = "A propros - Kasa";
  }, []);

  return <Hero image={imgHero} altText="A propros" />;
}

export default About;
