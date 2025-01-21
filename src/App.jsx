import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage.jsx';
import FavoritesPage from "./components/FavoritesPage/FavoritesPage.jsx";
import SearchPage from "./components/SearchPage/SearchPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/FindARecipe' element={<SearchPage />} />
        <Route path='/Favorites' element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;