import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header.jsx";
import Homepage from './components/Homepage/Homepage.jsx';
import FavoritesPage from "./components/FavoritesPage/FavoritesPage.jsx";
import SearchPage from "./components/SearchPage/SearchPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/FindARecipe' element={<SearchPage />} />
        <Route path='/Favorites' element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
