import RecipeCard from "./RecipeCard/RecipeCard";
import PropTypes from 'prop-types'

const RecipeList = ({ recipes }) => {
    return (
        <div className="cardList" >
            {
                recipes.map(item => {
                    return (
                        <RecipeCard key={item.recipeID} recipes={item} />
                    );
                })
            }
        </div >
    );
};

RecipeList.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default RecipeList;
