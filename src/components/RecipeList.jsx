import RecipeCard from "./RecipeCard/RecipeCard";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

const RecipeList = ({ recipes }) => {
  const [currentPage, setCurrentPage] = useState(1); //track current page
  const [sortedRecipes, setSortedRecipes] = useState([]); // State for sorted recipes
  const [sortAscending, setSortAscending] = useState(true);
  const recipesPerPage = 4; // numbers par page

  // Sorting function to sort recipes by cook time
  const sortRecipesByCookTime = (recipes) => {
    return [...recipes].sort((a, b) => {
      // Assuming timeCook is a string like "30 minutes"- parse it to an integer
      const timeA = parseInt(a.timeCook.replace(/\D/g,""), 10) || 0;
      const timeB = parseInt(b.timeCook.replace(/\D/g, ""), 10) || 0;
      return sortAscending ? timeA - timeB : timeB - timeA; // Ascending or descending order
    });
  };

  // Use effect to sort recipes whenever the recipes prop changes
  useEffect(() => {
    if (recipes && recipes.length > 0) {
      const sorted = sortRecipesByCookTime(recipes);

      console.log(sorted);
      setSortedRecipes(sorted);
    }
  }, [recipes, sortAscending]);

  //index range for the current page
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = sortedRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  //navigation to the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(sortedRecipes.length / recipesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  //navigation to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

    // Toggle the sort direction when the button is clicked
    const toggleSortDirection = () => {
      setSortAscending(!sortAscending); // Toggle between true (ascending) and false (descending)
    };

  return (
    <div>
       <button onClick={toggleSortDirection}>
        Sort by Cook Time ({sortAscending ? "Ascending" : "Descending"})
      </button>
      <div className="cardList">
        {currentRecipes.map((item) => (
          <RecipeCard key={item.recipeID} recipes={item} />
        ))}
      </div>
      <div className="pagination-controls">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of{" "}
          {Math.ceil(sortedRecipes.length / recipesPerPage)}
        </span>
        <button
          onClick={nextPage}
          disabled={
            currentPage === Math.ceil(sortedRecipes.length / recipesPerPage)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecipeList;
