import { useState } from "react";
import RecipeInfo from "./RecipeInfo";
import RecipePage from '../RecipePage/RecipePage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid, faXmark } from '@fortawesome/free-solid-svg-icons'; // Solid heart (filled)
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'; // Regular heart (empty)
import api from "../../util";

const RecipeCard = ({ recipes }) => {
    const [recipe, setRecipe] = useState(recipes);
    const [open, setOpen] = useState(false);

    const heartFilled = <FontAwesomeIcon icon={faHeartSolid} style={{
        color: "#ff0000", fontSize: "1.2rem"
    }} />
    const heartEmpty = <FontAwesomeIcon icon={faHeartRegular} style={{
        fontSize: "1.2rem"
    }} />

    const toggleFavorite = async (id) => {
        try {
            let favList = await api.get('/favorites', { withCredentials: true })
            console.log(favList);
            const favorited = favList.data.find((recipe) => recipe.id === id)

            if (!favorited) {
                await api.post('/favorites', { id }, { withCredentials: true, },)
            } else {
                await api.delete('/favorites', { id }, { withCredentials: true })
            }
        } catch (error) {
            console.error(error?.message);
        }
        setRecipe(prev => prev.recipeID === id ? { ...prev, isFavorite: !prev.isFavorite } : prev)
    };

    console.log(recipe);


    const handleOpen = () => {
        e.stopPropagation();
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
            <img src={recipe.recipeImage} alt={recipe.name} />
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
