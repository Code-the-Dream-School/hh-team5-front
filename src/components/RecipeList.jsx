import RecipeCard from "./RecipeCard/RecipeCard";
import PropTypes from 'prop-types'

const RecipeList = ({ recipes }) => {
    return (
        <>
            {recipes ?
                <div className={`cardList flex flex-col lg:grid lg:grid-cols-4`} >
                    {
                        recipes.map(item => {
                            return (
                                <RecipeCard key={item.recipeID} recipes={item} />
                            );
                        })
                    }
                </div > :
                <span className={`text-5xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]`}>No favorites have been added yet</span>
            }
        </>
    );
};

RecipeList.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default RecipeList;
