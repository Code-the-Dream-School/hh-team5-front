import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';

const removeButton = <FontAwesomeIcon icon={faTrashCan} />

const SelectedIngredientsList = ({selectedIngredients, handleRemoveIngredient, handleClearAllIngredients}) => {
  return (
    <div className="flex flex-row justify-start">   
      <p className="font-heading text-black text-xl w-full text-center m-2">Selected ingredients:</p>
      <ul className="flex flex-row">
        {selectedIngredients.map((ingredient) => (
          <li key={ingredient.id} className="flex flex-row max-w-52 rounded-[30px] min-w-[102.67px] justify-between bg-green text-white px-2 m-2">
            <span className="pl-2 pb-1">{ingredient.title}</span>
            <button type="button" onClick={() => handleRemoveIngredient(ingredient.id)}>{removeButton}</button>
          </li>
        ))}
      </ul>
      {selectedIngredients.length > 0 && (
        <button type="button" className="rounded-[30px] min-w-[102.67px] bg-red-500 text-white px-2 m-2" onClick={handleClearAllIngredients}>Clear All</button>
      )}
    </div>
  )
}

export default SelectedIngredientsList