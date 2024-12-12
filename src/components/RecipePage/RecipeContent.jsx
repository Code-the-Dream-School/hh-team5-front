// This component is a wrapper for displaying ingredients and directions.
import React from 'react';
import IngredientsList from './IngridientsList';
import DirectionsList from './DirectionsList';

const RecipeContent = ({ ingredients, steps }) => {
  return (
    <div className="recipe-content">
      <IngredientsList ingredients={ingredients} />
      <DirectionsList steps={steps} />
    </div>
  );
};

export default RecipeContent;