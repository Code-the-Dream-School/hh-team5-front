import { useState, useEffect } from 'react';
import RecipeList from '../RecipeList';
import Header from '../Header/Header';
import api from '../../util';

const FavoritesPage = () => {
    const [favRecipes, setFavRecipes] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const res = await api.get('/favorites', { withCredentials: true, })

            fetchRecipes(res.data)

            setIsLoading(false)
        } catch (error) {
            console.error('Failed to fetch favorite recipes', error);
        }
    }

    const fetchRecipes = async (arrID) => {
        try {
            console.log(arrID);

            const promises = arrID.map(id => api.get(`/recipes/${id}`)) // an array of Promises
            const resPromises = await Promise.all(promises)


            const favorites = resPromises.map(item => item.data)

            setFavRecipes(favorites)
        } catch (error) {
            console.error(error?.message);
        }
    }

    return (
        <>
            <Header />
            <h1>Favorites</h1>
            {!isLoading && (
                <>
                    {favRecipes.length > 0 ? (
                        <RecipeList recipes={favRecipes} />
                    ) : (
                        <p className={`text-3xl text-center`}>No favorite recipes.</p>
                    )}
                </>
            )}
        </>
    );
};

export default FavoritesPage;