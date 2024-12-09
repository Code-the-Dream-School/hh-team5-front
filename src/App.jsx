import React, { useState, useEffect } from 'react';
import { getAllData } from './util/index';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'

const URL = 'http://localhost:8000/api/v1/';

function App() {
  
  const [message, setMessage] = useState(''); 

  useEffect(() => {

    (async () => {
      const myData = await getAllData(URL)
      setMessage(myData.data);
    })();
      
    return () => {
      console.log('unmounting');
    }

  }, []);

  return (
  <BrowserRouter>
    <h1>{message}</h1>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='FindARecipe' element={<h1>Find A Recipe</h1>}/>
      <Route path='Favorites' element={<h1>Favorites</h1>}/>
    </Routes>
  </BrowserRouter>
  );

}

export default App
