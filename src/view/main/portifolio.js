import React from "react";
import styles from "../../Styles/scss/card.module.scss";
import CardContent from "../../components/cards/cardContent";

// Definindo o componente funcional
function portifolio() {
  const cards = [
    { title: "Subcard 1", content: "Conteúdo do Subcard 1." },
    { title: "Subcard 2", content: "Conteúdo do Subcard 2." },
    { title: "Subcard 3", content: "Conteúdo do Subcard 3." },
  ];
  //aqui eu posso colocar um card com as linguagens que domino com -
  //um timeline ou um arrow entre os cards, ai os cards ficam sobrepostos na linha
  return (
    <div className={styles.card}>
      <h2>Meus Projetos</h2>
      <div className={styles.card_list}>
        {cards.map((card, index) => (
          <CardContent key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
}

// Exportando o componente para ser utilizado em outros arquivos
export default portifolio;
