// This is a component that renders each ingredient.
import React from 'react';

const IngredientItem = ({ ingredient }) => {
  // destructuring ingredient object
  let { name, preparation } = ingredient;

  return <li>{`${name} (${preparation})`}</li>;
};

export default IngredientItem;
