import React, {useState} from 'react';
import PropTypes from 'prop-types';
import CommonIngredients from './CommonIngredients.jsx';
import { commonIngredients } from "../../commoningredients";
import RecipeSearch from "./RecipeSearch";
import SelectedIngredientsList from './SelectedIngredientsList.jsx';
import SearchList from './SearchList.jsx';

const SearchPage = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([])

  const handleAddCommonIngredient = (id) => {
    const selectedCommonIngredient = commonIngredients.find((item) => item.id === id)

    if (selectedCommonIngredient && !selectedIngredients.some((item) => item.id === id)){
      setSelectedIngredients([...selectedIngredients, selectedCommonIngredient])
    }
  }

  const handleAddIngredient = (ingredient) => {
    setSelectedIngredients([...selectedIngredients, ingredient])
  }

  const handleRemoveIngredient = (id) => {
    setSelectedIngredients(selectedIngredients.filter((ingredient) => ingredient.id !== id))
  }

  return (
    <>
      <div class="bg-yellow min-h-screen flex items-center flex-col p-4">
        <CommonIngredients commonIngredients={commonIngredients} handleAddCommonIngredient={handleAddCommonIngredient} />
        <RecipeSearch commonIngredients={commonIngredients} handleAddIngredient={handleAddIngredient} selectedIngredients={selectedIngredients} />
        <SelectedIngredientsList selectedIngredients={selectedIngredients} handleRemoveIngredient={handleRemoveIngredient} />
        <SearchList selectedIngredients={selectedIngredients} />
      </div>
    </>
  )
}

export default SearchPage