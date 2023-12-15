// Navbar.js
import React from "react";
import styles from "../../Styles/scss/navbar.module.scss";

import { Link } from "react-router-dom"; // Certifique-se de instalar 'react-router-dom' se não estiver instalado
const Navbar = () => {
  return (
    <nav className={`${styles.navigation}`}>
      <div className={`${styles.navbar}`}>
        <ul>
          <li>
            <Link to="/about">Sobre</Link>{" "}
          </li>
          <li>
            <Link to="/experiencia">Experiencia</Link>
          </li>
          <li>
            <Link to="/portifolio">Portifolio</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
