import React from "react";
import { Link } from "react-router-dom";
import style from './Homepage.module.css';
import foodcollage from '/images/foodcollage1x.png'
import meatballs from '/images/meatballs1x.png'

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

  return (
    <>
      <h1>Hello, Chef.</h1>
      <div className={style.routesContainer}>
        <ul>
          {routeCards.map((routeCard) => (
            <li key={routeCard.id} className={style.routeCard}>
              <Link to={routeCard.link}>
                <div className={style.routesImage} style={{backgroundImage: `url(${routeCard.image})`}}>
                  <h2>{routeCard.title}</h2> 
                </div>
                <p>{routeCard.description}</p>
              </Link>
            </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default Homepage