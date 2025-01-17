import React from "react";
import AddCommonIngredient from "./AddCommonIngredient";

const CommonIngredients = ({commonIngredients, handleAddCommonIngredient}) => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="font-heading text-black text-2xl w-full text-center m-2 mt-10">Add a common ingredient</h2>
      <ul className="grid grid-cols-5 grid-rows-2 max-w-4xl">
        {commonIngredients.map((ingredient) => (
          <AddCommonIngredient 
            key={ingredient.id}
            ingredient={ingredient}
            handleAddCommonIngredient={handleAddCommonIngredient}
          />
          ))
        }
      </ul>
    </div>
  )
}

export default CommonIngredients