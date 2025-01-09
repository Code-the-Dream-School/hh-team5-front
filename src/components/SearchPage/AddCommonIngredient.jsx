import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const addButton = <FontAwesomeIcon icon={faCirclePlus} />

const AddCommonIngredient = ({ ingredient, handleAddCommonIngredient }) => {
  return (
    <li key={ingredient.id} class="flex flex-row max-w-52 rounded-[30px] min-w-[102.67px] justify-between bg-green text-white px-2 m-2">
      <span class="px-2 pb-1">{ingredient.title}</span>
      <button onClick={() => handleAddCommonIngredient(ingredient.id)}>{addButton}</button>
    </li>
  )
}

export default AddCommonIngredient