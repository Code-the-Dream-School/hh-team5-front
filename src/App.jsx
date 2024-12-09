import React, { useState, useEffect } from 'react';
import { getAllData } from './util/index';
import RecipeList from './components/RecipeList';
import { recipes } from './list';


const URL = 'http://localhost:8000/api/v1/';

function App() {

  // const [message, setMessage] = useState('');

  // useEffect(() => {

  //   (async () => {
  //     const myData = await getAllData(URL)
  //     setMessage(myData.data);
  //   })();

  //   return () => {
  //     console.log('unmounting');
  //   }

  // }, []);
  // <h1>{message}</h1>

  return (
    <>
      <RecipeList recipes={recipes} />
    </>
  );

}

export default App
