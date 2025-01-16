import { useState, useEffect } from 'react';
import RecipeList from '../RecipeList';
import Header from '../Header/Header';
// import { recipes } from '../../list'; // stand-in data until we have access to MongoDB
import api from '../../util';

const FavoritesPage = () => {
    const [favRecipes, setFavRecipes] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const res = await api.get('/favorites', { withCredentials: true, })
            console.log(res)
            setFavRecipes(res.data)
        } catch (error) {
            console.error('Failed to fetch favorite recipes', error);
        }
    }

    return (
        <>
            <Header />
            <h1>Favorites</h1>
            {favRecipes.length === 0 && <span className={`text-5xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]`}>No favorites have been added yet</span>}
            <RecipeList recipes={favRecipes} />
        </>
    );
};

export default FavoritesPage;