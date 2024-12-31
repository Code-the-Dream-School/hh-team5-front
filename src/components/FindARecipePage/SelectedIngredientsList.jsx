import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';

const removeButton = <FontAwesomeIcon icon={faTrashCan} />

const SelectedIngredientsList = ({selectedIngredients, handleRemoveIngredient}) => {
  return (
    <div class="flex flex-row justify-start">   
      <p class="font-heading text-black text-xl w-full text-center m-2">Selected ingredients:</p>
      <ul class="flex flex-row">
        {selectedIngredients.map((ingredient) => (
          <li key={ingredient.id} class="flex flex-row max-w-52 rounded-[30px] min-w-[102.67px] justify-between bg-green text-white px-2 m-2">
            <span class="pl-2 pb-1">{ingredient.title}</span>
            <button type="button" onClick={() => handleRemoveIngredient(ingredient.id)}>{removeButton}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectedIngredientsList