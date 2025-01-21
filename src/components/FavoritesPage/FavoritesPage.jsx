import { useState, useEffect } from 'react';
import RecipeList from '../RecipeList';
// import { recipes } from '../../list'; // stand-in data until we have access to MongoDB
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
            {!isLoading && (
                <>
                    <h1>Favorites</h1>
                    <RecipeList recipes={favRecipes} />
                </>)}
        </>
    );
};

export default FavoritesPage;