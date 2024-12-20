import Header from "./components/Header/Header.jsx";
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { getAllData } from './util/index';
import Homepage from './components/Homepage/Homepage.jsx'
import FavoritesPage from "./components/FavoritesPage/FavoritesPage.jsx";


const URL = "http://localhost:8000/api/v1/";

function App() {
  const [message, setMessage] = useState("");
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        //fetch data from the API
        const myData = await getAllData(URL);
        setMessage(myData.data.message);

        // set recipe data
        setRecipeData({
          title: myData.data.title,
          cookTime: myData.data.cookTime,
          ingredients: myData.data.ingredients,
          steps: myData.data.steps,
          image: myData.data.image,
        });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    })();

    return () => {
      console.log("unmounting");
    };
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <h1>{message}</h1>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='FindARecipe' element={<h1>Find A Recipe</h1>} />
        <Route path='Favorites' element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
