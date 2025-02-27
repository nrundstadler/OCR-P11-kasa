import { useEffect } from "react";
import styles from "./About.module.scss";
import Hero from "../../components/Hero/Hero";
import heroImg from "../../assets/images/hero/about_1240.jpg";

function About() {
  useEffect(() => {
    document.title = "A propros - Kasa";
  }, []);

  return <Hero image={heroImg} altText="A propros" />;
}

export default About;
