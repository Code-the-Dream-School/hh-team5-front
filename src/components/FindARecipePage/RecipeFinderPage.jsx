import React from 'react';
import CommonIngredients from './CommonIngredients.jsx'
import { commonIngredients } from "../../commoningredients";

const RecipeFinderPage = () => {
  return (
    <div class="bg-yellow min-h-screen flex items-center flex-col p-4">
      <CommonIngredients commonIngredients={commonIngredients}/>
    </div>
  );
};

export default RecipeFinderPage;