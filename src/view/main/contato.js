import React from "react";
import styles from "../../styles/scss/card.module.scss";

// Definindo o componente funcional
function Contato() {
  return (
    <div className={styles.card}>
      <h2>contato</h2>
      <br></br>
      <span>Linkedin</span>
      <span>Email</span>
      <span>Watsapp</span>
    </div>
  );
}

// Exportando o componente para ser utilizado em outros arquivos
export default Contato;
