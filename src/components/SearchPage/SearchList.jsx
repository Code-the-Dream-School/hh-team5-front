import React, { useState } from "react"
import api from "../../util"
import RecipeList from "../RecipeList"

const SearchList = ({ selectedIngredients }) => {
  const [matchRecipes, setMatchRecipes] = useState([])

  const handleRecipeSearch = (e) => {
    e.preventDefault()
    if (selectedIngredients.length < 3) {
      alert("Please enter at least 3 ingredients");
      return;
    }
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
        alert("No recipes found")
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
    <>
      <button onClick={handleRecipeSearch}>Find A Recipe</button>
      <RecipeList recipes={matchRecipes} />
    </>
  )
}

export default SearchList