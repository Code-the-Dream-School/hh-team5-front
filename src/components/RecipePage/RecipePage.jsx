// The recipe page layout that displays the recipe
import React from "react";
import RecipeHeader from "./RecipeHeader"; // This will include RecipeTitle and CookTime
import RecipeContent from "./RecipeContent"; // Ingredients and Directions
import RecipeImage from "./RecipeImage"; // Display the recipe image
import styles from "./RecipePage.module.css"; // Import styles
import NavLink from "../Header/NavLink"; // Import NavLink

const RecipePage = ({ recipe, onClose }) => {
  const { name, timeCook, recipeImage, ingredients, directions } = recipe;

  return (
    <>
      <div className={styles.recipeOverlay} onClick={onClose}></div>
      <div className={styles.recipePage}>
        <div className={styles.recipeContent}>
          <RecipeHeader title={name} cookTime={timeCook} />
          <RecipeContent ingredients={ingredients} steps={directions} />
        </div>
        <RecipeImage image={recipeImage} />
      </div>
    </>
  );
};

export default RecipePage;
