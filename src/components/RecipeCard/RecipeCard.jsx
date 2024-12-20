import { useState } from "react";
import RecipeInfo from "./RecipeInfo";
import RecipePage from '../RecipePage/RecipePage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid, faXmark } from '@fortawesome/free-solid-svg-icons'; // Solid heart (filled)
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'; // Regular heart (empty)

const RecipeCard = ({ recipes }) => {
    const [recipe, setRecipe] = useState(recipes);
    const [open, setOpen] = useState(false);

    const heartFilled = <FontAwesomeIcon icon={faHeartSolid} style={{
        color: "#ff0000", fontSize: "1.2rem"
    }} />
    const heartEmpty = <FontAwesomeIcon icon={faHeartRegular} style={{
        fontSize: "1.2rem"
    }} />

    const toggleFavorite = (id) => {
        setRecipe(prev => prev.recipeID === id ? { ...prev, isFavorite: !prev.isFavorite } : prev)
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (e) => {
        e.stopPropagation();
        setOpen(false);
    };

    return (
        <div className="card" onClick={handleOpen}>
            <button
                onClick={(e) => {
                    e.stopPropagation()
                    toggleFavorite(recipe.recipeID)
                }}
                className="favorite"
            >
                {recipe.isFavorite ? heartFilled : heartEmpty}
            </button>
            <img src={recipe.recipeImage} />
            <RecipeInfo key={recipe.recipeID} name={recipe.name} time={recipe.timeCook} />
            {open &&
                <div className={`absolute inset-0 w-full h-full border-2 border-black rounded-2xl bg-white z-50 m-auto`} >
                    <span onClick={handleClose}>
                        <FontAwesomeIcon icon={faXmark} style={{
                            fontSize: "2rem",
                            position: 'absolute',
                            top: "1rem",
                            right: "1rem",
                        }} />
                    </span>
                    <RecipePage
                        key={recipe.recipeID}
                        recipe={recipe}
                        onClose={handleClose}
                    />
                </div>}
        </div>
    );
};

export default RecipeCard;
