import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import style from './Homepage.module.css';
import foodcollage from '/images/foodcollage1x.png'
import meatballs from '/images/meatballs1x.png'
import Login from "../Login";
import api from "../../util";

const Homepage = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        await api.get('/favorites', { withCredentials: true, });
        setIsLoggedIn(true);
      } catch (error) {
        setIsLoggedIn(false);
      }
    }

    checkLoginStatus();
  }, [isLoggedIn])

  const handleFavoritesClick = (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      console.log("No token found.");
      setShowModal(true);
      return;
    }
    setShowModal(false);
    navigate('/favorites');
  }

  const cancel = () => {
    setShowModal(false);
  }


  return (
    <>
      <h1>Hello, Chef.</h1>
      <div className={style.routesContainer}>
        <ul>
          {routeCards.map((routeCard) => (
            <li key={routeCard.id} className={style.routeCard}>
              {routeCard.link === "/favorites" ? (
                <div onClick={(e) => handleFavoritesClick(e)} className={`hover:cursor-pointer`} >
                  <div className={style.routesImage} style={{ backgroundImage: `url(${routeCard.image})` }}>
                    <h2>{routeCard.title}</h2>
                  </div>
                  <p>{routeCard.description}</p>
                </div>
              ) : (
                <Link to={routeCard.link}>
                  <div className={style.routesImage} style={{ backgroundImage: `url(${routeCard.image})` }}>
                    <h2>{routeCard.title}</h2>
                  </div>
                  <p>{routeCard.description}</p>
                </Link>
              )}
            </li>
          ))
          }
        </ul>
      </div>
      {showModal && <Login cancel={cancel} />}
    </>
  )
}

export default Homepage