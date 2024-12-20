// the recipe page layout that displays the recipe,
import React from 'react';
import RecipeHeader from './RecipeHeader';  // This will include RecipeTitle and CookTime
import RecipeContent from './RecipeContent'; // Ingredients and Directions
import RecipeImage from './RecipeImage'; // Display the recipe image



const RecipePage = ({ recipe }) => {
  const { name, timeCook, recipeImage, ingredients, directions } = recipe;
  return (
    <div className="recipe-page">
      <RecipeHeader title={name} cookTime={timeCook} />
      <RecipeImage image={recipeImage} />
      <RecipeContent ingredients={ingredients} steps={directions} />
    </div>
  );
};

export default RecipePage;
