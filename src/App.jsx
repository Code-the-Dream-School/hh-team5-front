import React, { useState, useEffect } from "react";
import { getAllData } from "./util/index";
import Header from "./components/Header/Header.jsx";
import RecipePage from "./components/RecipePage/RecipePage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          ingridients: myData.data.ingridients,
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
      <Routes>
        <Route path="/" element={<h1>{message}</h1>} />
        <Route
          path="/recipe"
          element={recipeData && <RecipePage recipe={recipeData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
