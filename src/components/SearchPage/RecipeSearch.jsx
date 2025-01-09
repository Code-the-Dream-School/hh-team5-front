import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const RecipeSearch = ({ commonIngredients, handleAddIngredient, selectedIngredients }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()

    const searchIngredient = commonIngredients.find((ingredient) =>
      ingredient.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (searchIngredient) {
      const isAlreadySelected = selectedIngredients.some((item) => item.id === searchIngredient.id)
      if (!isAlreadySelected) {
        handleAddIngredient(searchIngredient)
      } 
    } 
    else {
      const newIngredient = {
        id: Date.now(),
        title: searchTerm,
      }
      const isAlreadySelected = selectedIngredients.some((item) => item.title.toLowerCase() === searchTerm.toLowerCase())
      if (!isAlreadySelected) {
        handleAddIngredient(newIngredient)
      } 
    }
    setSearchTerm("")
  }

  return (
    <form onSubmit={handleSearch}>
      <label className="text-xl">Search for Ingredients</label>
      <br />
      <span className="focus-within:ring-2 focus-within:ring-blue-400 rounded-md focus-within:shadow-md focus-within:shadow-blue-400">
        <input
          className="border-none focus:ring-0 outline-none rounded-l-md"
          id="ingredients"
          type="text"
          autoFocus
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-white rounded-r-md px-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </span>
    </form>
  )
}

export default RecipeSearch