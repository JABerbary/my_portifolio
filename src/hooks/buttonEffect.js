import React from "react";
import "../";

const Button = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
