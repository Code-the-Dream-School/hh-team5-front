// This is a component that renders each ingredient.
import React from "react";

const IngredientItem = ({ ingredient }) => {
  // destructuring ingredient object
  let { name, preparation } = ingredient;

  return (
    <li
      style={{
        backgroundColor: "#f9f5e7",
        lineHeight: "0.9",
        textAlign: "left",
        margin: "0.1",
      }}
    >
      {" "}
      {`${name} (${preparation})`}
    </li>
  );
};

export default IngredientItem;
