import React, { useState } from "react"
import api from "../util"
import RecipeList from "./RecipeList"

const SearchList = ({ ingredients }) => {
    const [matchRecipes, setMatchRecipes] = useState([])

    const handleRecipeSearch = (e) => {
        e.preventDefault()
        if (ingredients.length() < 3) {
            alert("Please enter at least 3 ingredients");
            return;
        }
        fetchData()
    }

    const fetchData = async () => {
        try {
            const res = await api.get('/search')
            setMatchRecipes(res)
        } catch (error) {
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