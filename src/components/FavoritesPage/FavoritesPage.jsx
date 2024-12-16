import RecipeList from '../RecipeList';
import { recipes } from '../../list'; // stand-in data until we have access to MongoDB

const FavoritesPage = () => {
    return (
        <>
            <h1>Hearts</h1>
            <RecipeList recipes={recipes} />
        </>
    );
};

export default FavoritesPage;