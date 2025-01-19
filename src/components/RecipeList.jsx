import RecipeCard from "./RecipeCard/RecipeCard";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

const RecipeList = ({ recipes }) => {
  const [currentPage, setCurrentPage] = useState(1); //track current page
  const [sortedRecipes, setSortedRecipes] = useState([]); // State for sorted recipes
  const recipesPerPage = 4; // numbers par page

  // Sorting function to sort recipes by cook time
  const sortRecipesByCookTime = (recipes) => {
    return recipes.sort((a, b) => {
      // Assuming timeCook is a string like "30 minutes", so we parse it to an integer
      const timeA = parseInt(a.timeCook, 10);
      const timeB = parseInt(b.timeCook, 10);

      return timeA - timeB; // Ascending order (smallest to largest)
    });
  };

  // Use effect to sort recipes whenever the recipes prop changes
  useEffect(() => {
    const sorted = sortRecipesByCookTime(recipes);
    setSortedRecipes(sorted);
  }, [recipes]);

  //index range for the current page
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  //navigation to the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(recipes.length / recipesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  //navigation to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <p className="font-heading text-black text-2xl max-[480px]:m-0 mt-10">Recipes found:</p>
      <div className="flex flex-wrap justify-center max-w-full gap-4">
        {currentRecipes.map((item) => (<RecipeCard key={item.recipeID} recipes={item} />))}
      </div>
      <div className="flex flex-row font-heading text-xl justify-evenly mb-4 mt-16">
          <button className="mt-6" onClick={prevPage} disabled={currentPage === 1}>Previous</button>
         <span className="mt-6 max-[480px]:mx-10 mx-16">Page {currentPage} of {Math.ceil(recipes.length / recipesPerPage)}</span>
          <button className="mt-6" onClick={nextPage} disabled={currentPage === Math.ceil(recipes.length / recipesPerPage)}>Next</button>
      </div>
    </div>
  )
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecipeList;
