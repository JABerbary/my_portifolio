// Navbar.js
import React, { useRef } from "react";
import styles from "../../styles/scss/navbar.module.scss";
import QuemSou from "../../view/main/about";
import Experiencia from "../../view/main/experiencia";
import Portifolio from "../../view/main/portifolio";
import Skills from "../../view/main/skills";
import Contato from "../../view/main/contato";

import { Link } from "react-router-dom";

const Navbar = () => {
  // Create refs for each section
  const quemSouRef = useRef(null);
  const experienciaRef = useRef(null);
  const portifolioRef = useRef(null);
  const skillsRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <nav className={`${styles.navigation}`}>
      <div className={`${styles.navbar}`}>
        <ul>
          <li>
            <Link to="/about" onClick={() => scrollToSection(quemSouRef)}>
              Sobre
            </Link>
          </li>
          <li>
            <Link
              to="/experiencia"
              onClick={() => scrollToSection(experienciaRef)}
            >
              Experiencia
            </Link>
          </li>
          <li>
            <Link
              to="/portifolio"
              onClick={() => scrollToSection(portifolioRef)}
            >
              Portifolio
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={() => scrollToSection(skillsRef)}>
              Skills
            </Link>
          </li>
        </ul>
      </div>
      <div ref={quemSouRef}>
        <QuemSou sobre="Formado em análise e desenvolvimento de sistemas blablabla"></QuemSou>
      </div>
      <div ref={experienciaRef}>
        <Experiencia />
      </div>
      <div ref={portifolioRef}>
        <Portifolio />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
    </nav>
  );
};

export default Navbar;
