// This component is used to show the recipe image
import React from "react";

const RecipeImage = ({ image }) => {
  return <img src={image} alt="Recipe" className="recipeImage" />;
};

export default RecipeImage;
