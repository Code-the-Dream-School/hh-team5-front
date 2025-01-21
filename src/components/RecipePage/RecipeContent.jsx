// This component is a wrapper for displaying ingredients and directions.
import React from "react";
import IngredientsList from "./IngredientsList";
import DirectionsList from "./DirectionsList";

const RecipeContent = ({ ingredients, steps }) => {
  return (
    <div className="recipeContent">
      <IngredientsList ingredients={ingredients} />
      <DirectionsList steps={steps} />
    </div>
  );
};

export default RecipeContent;
