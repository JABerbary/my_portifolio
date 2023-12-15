import React from "react";
import styles from "../../Styles/scss/card.module.scss";

const QuemSou = ({ sobre }) => {
  return (
    //isso daqui vai ser uma tag de textbox
    <div className={styles.card}>
      <h2>{sobre}</h2>
    </div>
  );
};

export default QuemSou;
