import React from "react";
import { Link } from "react-router-dom";
import ingredients from '/images/ingredients.jpg'
import meatballs from '/images/meatballs.png'

const Homepage = () => {
  const routeCards = [
    {
      id: 1,
      title: "Find a Recipe",
      image: ingredients,
      description: `Find a recipe by entering 3-5 ingredients from your pantry and discover delicious dishes you can make. It’s a simple way to turn what you have on hand into mealtime inspiration!`, 
      link: "/findarecipe",
    },
    {
      id: 2,
      title: "Check your Favorites",
      image: meatballs,
      description: `Browse through your favorite recipes to revisit dishes for your next meal. Whether you're planning a quick dinner or a special feast, your favorites are just a click away!`, 
      link: "/favorites"
    }
  ]

  return (
    <div class="bg-green min-h-screen flex items-center flex-col p-4">
      <h1 class="font-heading text-white text-4xl w-full text-center py-2 mt-12 mb-8">Hello, Chef.</h1>
      <div class="max-w-4xl m-4">
        <ul class="flex flex-row">
          {routeCards.map((routeCard) => (
            <li class="bg-yellow rounded-[20px] drop-shadow-md p-8 m-6" key={routeCard.id}>
              <Link to={routeCard.link}>
                <div class="rounded-[15px] drop-shadow-md py-16 bg-contain bg-no-repeat" style={{ backgroundImage: `url(${routeCard.image})`, backgroundSize:'100% 100%'}}>
                  <h2 class="bg-black font-heading text-white text-2xl w-full text-center py-2">{routeCard.title}</h2> 
                </div>
                <p class="font-body text-center mt-6">{routeCard.description}</p>
              </Link>
            </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Homepage