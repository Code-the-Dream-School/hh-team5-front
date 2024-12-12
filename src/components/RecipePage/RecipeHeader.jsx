// This component will show the title and cook time.
import React from 'react';

const RecipeHeader = ({ title, cookTime }) => {
  return (
    <div className="recipe-header">
      <h1>{title}</h1>
      <p>Cook Time: {cookTime}</p>
    </div>
  );
};

export default RecipeHeader;
