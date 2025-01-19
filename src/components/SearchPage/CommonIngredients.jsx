import React from "react";
import AddCommonIngredient from "./AddCommonIngredient";

const CommonIngredients = ({commonIngredients, handleAddCommonIngredient}) => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="font-heading text-black text-xl md:text-2xl w-full text-center my-2 md:mt-10">Add a common ingredient</h2>
      <ul className="grid max-[480px]:grid-cols-2 grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 m-2 max-w-4xl">
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