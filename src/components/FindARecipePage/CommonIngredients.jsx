import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';

const addButton = <FontAwesomeIcon icon={faCirclePlus} />

const CommonIngredients = ({commonIngredients}) => {
  return (
    <div class="flex flex-col items-center">
      <h2 class="font-heading text-black text-xl w-full text-center">Add a common ingredient:</h2>
      <ul class="grid grid-cols-5 grid-rows-2 max-w-4xl">
        {commonIngredients.map((ingredient) => (
          <li key={ingredient.id} class="flex flex-row max-w-52 rounded-[30px] min-w-[102.67px] justify-between bg-green text-white px-2 m-2">
            <p class="px-2 pb-1">{ingredient.title}</p>
            <button>{addButton}</button>
          </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CommonIngredients