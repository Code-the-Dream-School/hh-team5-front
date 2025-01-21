// his component renders a list of ingredients.
import React from "react";
import IngredientItem from "./IngredientItem";

const IngredientsList = ({ ingredients }) => {
  return (
    <div className="ingredients-list">
      <h3 style={{ fontSize: "25px" }}>Ingredients</h3>
      <ol>
        {ingredients.map((ingredient, index) => (
          <IngredientItem key={index} ingredient={ingredient} />
        ))}
      </ol>
    </div>
  );
};

export default IngredientsList;
