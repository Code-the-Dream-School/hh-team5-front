import RecipeCard from "./RecipeCard/RecipeCard";
import PropTypes from 'prop-types'
import React, {useState} from 'react'

const RecipeList = ({ recipes }) => {
  const [currentPage, setCurrentPage] = useState(1); //track current page
  const recipesPerPage = 4; // numbers par page

//index range for the current page
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe,indexOfLastRecipe);

//navigation to the next page
  const nextPage = () => {
    if ( currentPage < Math.ceil(recipes.length / recipesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

//navigation to the previous page
  const prevPage = () => {
    if (currentPage > 1){
      setCurrentPage(currentPage -1);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <p className="font-heading text-black text-2xl mt-10">Recipes found:</p>
      <div className="flex flex-wrap justify-center max-w-full gap-4">
        {currentRecipes.map((item) => (<RecipeCard key={item.recipeID} recipes={item} />))}
      </div>
      <div className="flex flex-row font-heading text-xl justify-evenly mb-4 mt-16">
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span className="mx-16">Page {currentPage} of {Math.ceil(recipes.length / recipesPerPage)}</span>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(recipes.length / recipesPerPage)}>Next</button>
      </div>
    </div>
  );
};

RecipeList.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default RecipeList;
