// the recipe page layout that displays the recipe,
import React from 'react';
import RecipeHeader from './RecipeHeader';  // This will include RecipeTitle and CookTime
import RecipeContent from './RecipeContent'; // Ingredients and Directions
import RecipeImage from './RecipeImage'; // Display the recipe image



const RecipePage = ({ recipe }) => {
  return (
    <div className="recipe-page">
      <RecipeHeader title={recipe.title} cookTime={recipe.cookTime} />
      <RecipeImage image={recipe.image} />
      <RecipeContent ingredients={recipe.ingredients} steps={recipe.steps} />
    </div>
  );
};

export default RecipePage;

