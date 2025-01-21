import React, { useState } from "react"
import api from "../../util"
import RecipeList from "../RecipeList"

const SearchList = ({ selectedIngredients, matchRecipes, setMatchRecipes }) => {
  const [searchedRecipes, setSearchedRecipes] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleRecipeSearch = (e) => {
    e.preventDefault()
    if (selectedIngredients.length < 3) {
      setErrorMessage("Please enter at least 3 ingredients.");
      return;
    }
    if (selectedIngredients.length > 5) {
      setErrorMessage("You can enter a maximum of 5 ingredients.");
      return;
    }
    setErrorMessage("")
    setSearchedRecipes(true)
    fetchData()
  }

  const fetchData = async () => {
    try {
      setMatchRecipes([])

      const selectedIngredientsArr = selectedIngredients.map((ingredient) => ingredient.title)
      console.log(selectedIngredientsArr)

      const params = Object.fromEntries(selectedIngredientsArr.map((ingredient, index) => [index, ingredient]))
      console.log(params)

      const res = await api.get('/search', {params})
      console.log(res.data)
    
      if (res.data.data.length === 0){
        setErrorMessage("No recipes found.")
      }
      else {
        setMatchRecipes(res.data.data)
      }
    } 
    catch (error) {
      console.error('Failed to fetch matching recipes', error);
    }
  }

  return (
    <div className="flex flex-col items-center">
      {errorMessage && (<span className="font-body text-red text-center text-lg my-4">{errorMessage}</span>)}
      <button className="font-heading rounded-[10px] bg-green text-white text-xl p-2 px-16 mt-2" onClick={handleRecipeSearch}>Find A Recipe</button>
      {searchedRecipes && matchRecipes.length > 0 && (
        <RecipeList recipes={matchRecipes} />
      )}
    </div>
  )
}

export default SearchList