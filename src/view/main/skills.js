import React from "react";
import styles from "../../styles/scss/card.module.scss";

// Definindo o componente funcional
function skills() {
  //aqui eu posso colocar um card com as linguagens que domino com -
  //um timeline ou um arrow entre os cards, ai os cards ficam sobrepostos na linha
  return (
    <div className={styles.card}>
      <h2>Skills</h2>
    </div>
  );
}

// Exportando o componente para ser utilizado em outros arquivos
export default skills;
