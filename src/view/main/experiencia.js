import React from "react";
import Timeline from "../../components/timeline/timeline";
import styles from "../../Styles/scss/card.module.scss";
import InputButton from "../../components/inputs/inputButton";

// Definindo o componente funcional
function experiencia() {
  return (
    <div className={styles.card}>
      <Timeline />
      <span>
        <InputButton />
      </span>
    </div>
  );
}

// Exportando o componente para ser utilizado em outros arquivos
export default experiencia;
