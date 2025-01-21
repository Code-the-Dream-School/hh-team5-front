import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header.jsx';
import CommonIngredients from './CommonIngredients.jsx';
import { commonIngredients } from "../../commoningredients";
import RecipeSearch from "./RecipeSearch";
import SelectedIngredientsList from './SelectedIngredientsList.jsx';
import SearchList from './SearchList.jsx';

const SearchPage = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [matchRecipes, setMatchRecipes] = useState([])

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

  const handleClearAllIngredients = () => {
    setSelectedIngredients([])
    setMatchRecipes([])
  }

  return (
    <div className="bg-yellow min-h-screen flex flex-col items-center">
      <Header />
      <div>
        <CommonIngredients commonIngredients={commonIngredients} handleAddCommonIngredient={handleAddCommonIngredient} />
        <RecipeSearch commonIngredients={commonIngredients} handleAddIngredient={handleAddIngredient} selectedIngredients={selectedIngredients} />
        <SelectedIngredientsList selectedIngredients={selectedIngredients} handleRemoveIngredient={handleRemoveIngredient} handleClearAllIngredients={handleClearAllIngredients} />
      </div>
      <div className="flex-grow">
        <SearchList selectedIngredients={selectedIngredients} matchRecipes={matchRecipes} setMatchRecipes={setMatchRecipes} />
      </div>
    </div>
  )
}

export default SearchPage