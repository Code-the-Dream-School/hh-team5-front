import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';

const removeButton = <FontAwesomeIcon icon={faTrashCan} />

const SelectedIngredientsList = ({selectedIngredients, handleRemoveIngredient, handleClearAllIngredients}) => {
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex flex-col lg:flex-row">   
        <p className="font-heading text-black text-xl md:text-2xl text-center self-center m-2">Selected ingredients:</p>
        <ul className="grid grid-cols-3 max-[480px]:grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 sm:max-w-6xl items-center m-2">
          {selectedIngredients.map((ingredient) => (
            <li key={ingredient.id} className="flex flex-row max-w-52 rounded-[30px] min-w-[102.67px] justify-between bg-teal text-white px-2 m-2 lg:my-6">
              <span className="px-2 pb-1">{ingredient.title}</span>
              <button type="button" onClick={() => handleRemoveIngredient(ingredient.id)}>{removeButton}</button>
            </li>
          ))}
        {selectedIngredients.length > 0 && (
          <button type="button" className="rounded-[30px] min-w-[60px] bg-red text-white pb-1 px-2 m-2" onClick={handleClearAllIngredients}>Clear</button>
        )}
        </ul>
      </div>
    </div>
  )
}

export default SelectedIngredientsList