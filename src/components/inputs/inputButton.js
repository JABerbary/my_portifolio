import React from "react";
import Button from "../../hooks/buttonEffect";

const InputButton = () => {
  const handleClick = () => {
    console.log("Botão clicado!");
    // Adicione lógica adicional aqui, se necessário
  };

  return (
    <header>
      <Button onClick={handleClick} label="Download" />
    </header>
  );
};

export default InputButton;
