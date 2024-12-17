import { useState } from "react";
import Modal from '../Modal'
import RecipeInfo from "./RecipeInfo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'; // Solid heart (filled)
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'; // Regular heart (empty)


const RecipeCard = ({ recipe , onFavoriteToggle}) => {
    // const [recipe, setRecipe] = useState(recipes);
    const [open, setOpen] = useState(false);

    const heartFilled = <FontAwesomeIcon icon={faHeartSolid} style={{
        color: "#ff0000", fontSize: "1.2rem"
    }} />
    const heartEmpty = <FontAwesomeIcon icon={faHeartRegular} style={{
        fontSize: "1.2rem"
    }} />

    const toggleFavorite = (id) => {
        // setRecipe(prev => prev.recipeID === id ? { ...prev, isFavorite: !prev.isFavorite } : prev)
        onFavoriteToggle(recipe.recipeID); 
    };

    const handleOpen = (e) => {
        e.stopPropagation();  // Prevent click event from bubbling up
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="card" onClick={handleOpen}>
            <button
                onClick={(e) => { 
                    e.stopPropagation(); // Prevent modal from opening when clicking favorite
                    toggleFavorite(); // Toggle favorite status
                }}
                className="favorite"

            >
                {recipe.isFavorite ? heartFilled : heartEmpty}
            </button>
            <img src={recipe.recipeImage} alt={recipe.name} />
            <RecipeInfo key={recipe.recipeID} name={recipe.name} time={recipe.timeCook} />

            {open && (
                <Modal onClose={handleClose}>
                    <div className="recipeDetailModal">
                     <h2>{recipe.name}</h2>
                      <img src={recipe.recipeImage} alt={recipe.name} />
                      <p>Cook Time: {recipe.timeCook}</p>

                      <h3>Ingredients:</h3>
                        <ul>
                {recipe.ingredients?.map((ingredient, index) => (
                        <li key={index}>{ingredient.name}:{ingredient.preparation}</li>
                ))}
                        </ul>

                           <h3>Directions:</h3>
                           <ol>
                           {recipe.directions?.map((direction, index) => (
                             <li key={index}>{direction}</li>
                ))}
                              </ol>
                    </div>
                   
                    {/* <>
                        {"hi"}
                    </> */}

                </Modal>
             )}
         </div>
    );
};
 

export default RecipeCard; 