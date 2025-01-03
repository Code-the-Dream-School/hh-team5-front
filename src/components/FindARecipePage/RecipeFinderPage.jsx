import React, {useState} from 'react';
import CommonIngredients from './CommonIngredients.jsx'
import SelectedIngredientsList from './SelectedIngredientsList.jsx';
import { commonIngredients } from "../../commoningredients";

const RecipeFinderPage = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([])

  const handleAddIngredient = (id) => {
    const selectedIngredient = commonIngredients.find((item) => item.id === id)

    if (selectedIngredient && !selectedIngredients.some((item) => item.id === id)){
      setSelectedIngredients([...selectedIngredients, selectedIngredient])
    }
  }

  const handleRemoveIngredient = (id) => {
    setSelectedIngredients(selectedIngredients.filter((ingredient) => ingredient.id !== id))
  }

  return (
    <div class="bg-yellow min-h-screen flex items-center flex-col p-4">
      <CommonIngredients commonIngredients={commonIngredients} handleAddIngredient={handleAddIngredient} />
      <SelectedIngredientsList selectedIngredients={selectedIngredients} handleRemoveIngredient={handleRemoveIngredient} />
    </div>
  )
}

export default RecipeFinderPage