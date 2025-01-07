import React from "react";
import AddCommonIngredient from "./AddCommonIngredient";


const CommonIngredients = ({commonIngredients, handleAddIngredient}) => {
  return (
    <div class="flex flex-col items-center">
      <h2 class="font-heading text-black text-xl w-full text-center m-2">Add a common ingredient:</h2>
      <ul class="grid grid-cols-5 grid-rows-2 max-w-4xl">
        {commonIngredients.map((ingredient) => (
          <AddCommonIngredient 
            key={ingredient.id}
            ingredient={ingredient}
            handleAddIngredient={handleAddIngredient}
          />
          ))
        }
      </ul>
    </div>
  )
}

export default CommonIngredients