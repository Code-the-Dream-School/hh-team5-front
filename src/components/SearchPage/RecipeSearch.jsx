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
    <form className="flex flex-col items-center mt-4" onSubmit={handleSearch}>
      <label className="font-heading text-black text-xl md:text-2xl text-center m-2 sm:mt-10">Search for Ingredients</label>
      <span className="flex flex-row px-2 justify-evenly bg-white focus-within:ring-2 focus-within:ring-blue-400 rounded-md focus-within:shadow-s focus-within:shadow-blue-400 border-gray-400 border-[0.5px]">
        <input
          className="py-1 border-none focus:ring-0 outline-none rounded-l-md"
          id="ingredients"
          type="text"
          minLength="2"
          required 
          autoFocus
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-white rounded-r-md">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </span>
    </form>
  )
}

export default RecipeSearch