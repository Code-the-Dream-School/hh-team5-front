import React from "react";
import foodcollage from '/images/foodcollage.png'
import meatballs from '/images/meatballs.jpg'

const Homepage = () => {
  const routeCards = [
    {
      id: 1,
      title: "Find a Recipe",
      image: foodcollage,
      description: `Find a recipe by entering 3-5 ingredients from your pantry and discover delicious dishes you can make. It’s a simple way to turn what you have on hand into mealtime inspiration!`, 
      link: "/findarecipe",
    },
    {
      id: 2,
      title: "Check your Favorites",
      image: meatballs,
      description: `Browse through your favorite recipes to revisit dishes or spark inspiration for your next meal. Whether you're planning a quick dinner or a special feast, your favorites are just a click away!`, 
      link: "/favorites"
    }
  ]
}

export default Homepage