// his component renders a list of ingredients.
import React from 'react';
import IngredientItem from './IngridientItem';

const IngredientsList = ({ ingredients }) => {
  return (
    <div className="ingredients-list">
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <IngredientItem key={index} ingredient={ingredient} />
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;
