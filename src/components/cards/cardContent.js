import React from "react";
import styles from "../../Styles/scss/card.module.scss";
const CardContent = ({ title, content }) => {
  return (
    <div className={styles.card_content}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default CardContent;
