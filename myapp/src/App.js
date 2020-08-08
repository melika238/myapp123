import React, { useEffect, useState } from 'react';
import recipe from './recipe';
import './App.css';
const App =()=>{
  const APP_ID='bbc0d1a4';
  const APP_KEY=' 92f2af27a79e0755e743b7fc4b614f84';
 
  const[recipes, setRecipes]=useState([]);
  useEffect(  () => {
 getRecipes  (); 
  }, []);
  const getRecipes =async()=>{
    const response = await fetch( 
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
      ); 
  const date = await response.json();
  setRecipes(date.hits);
  console.log(date.hits);
  };
  return(
    <div className='App'>
    <form className='search-form'>
      <input className='search-bar' type='text'/>
      <button  className='search-button' type='submit' >search </button>
    </form>
  {recipes.map(recipe =>(

<recipe title={recipe.recipe.label } 
calories={recipe.recipe.calories}
image ={recipe.recipe.image}
/>
  ))}
    </div>
  );
}


export default App;
