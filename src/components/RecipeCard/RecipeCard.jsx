import { useEffect, useState } from "react";
import RecipeInfo from "./RecipeInfo";
import RecipePage from '../RecipePage/RecipePage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid, faXmark } from '@fortawesome/free-solid-svg-icons'; // Solid heart (filled)
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'; // Regular heart (empty)
import api from "../../util";

const RecipeCard = ({ recipes }) => {
    const [recipe, setRecipe] = useState(recipes);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        checkFavorite()
    }, [])

    const heartFilled = <FontAwesomeIcon icon={faHeartSolid} style={{
        color: "#ff0000", fontSize: "1.2rem"
    }} />
    const heartEmpty = <FontAwesomeIcon icon={faHeartRegular} style={{
        fontSize: "1.2rem"
    }} />

    const checkFavorite = async () => {
        try {
            const favList = await api.get('/favorites', { withCredentials: true })
            console.log("favlist: ", favList.data);

            // if in fav list, change isFavorite to true
            favList.data.map((ids) => {
                if (ids === recipes._id) {
                    setRecipe(prev => prev._id === ids ? { ...prev, isFavorite: true } : prev)
                }
            })
        } catch (error) {
            console.error(error?.message);
        }
    }

    const toggleFavorite = async (id) => {
        try {
            const favList = await api.get('/favorites', { withCredentials: true })
            console.log("favlist: ", favList.data);
            console.log(id);

            const favorited = favList.data.find((recipe) => recipe === id)
            console.log(favorited, "favorited");


            if (!favorited) {
                await api.post('/favorites', { id }, { withCredentials: true, },)
            } else {
                await api.delete('/favorites', { data: { id } }, { withCredentials: true })
            }
        } catch (error) {
            console.error(error?.message);
        }
        setRecipe(prev => prev._id === id ? { ...prev, isFavorite: !prev.isFavorite } : prev)
    };

    console.log("remaining fav: ", recipe);


    const handleOpen = (e) => {
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
                    toggleFavorite(recipe._id)
                }}
                className="favorite"
            >
                {recipe.isFavorite ? heartFilled : heartEmpty}
            </button>
            <img src={recipe.recipeImage} alt={recipe.name} />
            <RecipeInfo key={recipe._id} name={recipe.name} time={recipe.timeCook} />
            {open &&
                <div className="recipePage" onClick={(e) => e.stopPropagation()}>
                    <span onClick={handleClose}>
                        <FontAwesomeIcon icon={faXmark} style={{
                            fontSize: "2rem",
                            position: 'absolute',
                            top: "1rem",
                            right: "1rem",
                        }} />
                    </span>
                    <RecipePage
                        key={recipe._id}
                        recipe={recipe}
                        onClose={handleClose}
                    />
                </div>}
        </div>
    );
};

export default RecipeCard;
