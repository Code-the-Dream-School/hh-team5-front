import React from 'react'
import PropTypes from 'prop-types'
import CommonIngredients from './CommonIngredients.jsx'
import { commonIngredients } from "../../commoningredients";
import RecipeSearch from "./RecipeSearch";

const SearchPage = () => {
  return (
    <>
      <div class="bg-yellow min-h-screen flex items-center flex-col p-4">
        <CommonIngredients commonIngredients={commonIngredients}/>
        <RecipeSearch />
      </div>
    </>
  )
}

export default SearchPage