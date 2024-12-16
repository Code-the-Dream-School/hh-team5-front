import { useState } from "react";
import Modal from '../Modal'
import RecipeInfo from "./RecipeInfo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'; // Solid heart (filled)
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

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="card" onClick={handleOpen}>
            <button
                onClick={() => toggleFavorite(recipe.recipeID)}
                className="favorite"
            >
                {recipe.isFavorite ? heartFilled : heartEmpty}
            </button>
            <img src={recipe.recipeImage} />
            <RecipeInfo key={recipe.recipeID} name={recipe.name} time={recipe.timeCook} />
            {open &&
                <Modal onClose={handleClose}>
                    <>
                        {"hi"}
                    </>
                </Modal>}
        </div>
    );
};

export default RecipeCard;