import RecipeCard from "./RecipeCard";

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

export default RecipeList;