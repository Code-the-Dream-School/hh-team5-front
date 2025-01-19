import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Header from "../Header/Header";
import ingredients from '/images/ingredients.jpg';
import meatballs from '/images/meatballs.png'
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
      image: ingredients,
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
    <div className="bg-green min-h-screen flex items-center flex-col">
      <Header />
      <h1 className="font-heading text-white text-2xl w-full text-center py-2 mt-6 md:text-4xl md:mt-12 md:mb-8 ">Hello, Chef.</h1>
      <div className="flex max-w-6xl md:m-4 justify-between">
        <ul className="flex flex-col min-[480px]:mx-8 sm:mx-12 md:flex-row">
          {routeCards.map((routeCard) => (
            <li key={routeCard.id} className="bg-yellow rounded-[20px] drop-shadow-md p-6 m-6 my-4 sm:p-8 sm:px-8">
              {routeCard.link === "/favorites" ? (
                 <div onClick={(e) => handleFavoritesClick(e)} className={`hover:cursor-pointer`} >
                 <div className="rounded-[15px] drop-shadow-md py-16 bg-contain bg-no-repeat" style={{ backgroundImage: `url(${routeCard.image})`, backgroundSize:'100% 100%'}}>
                   <h2 className="bg-black font-heading text-white text-2xl w-full text-center py-2">{routeCard.title}</h2>
                 </div>
                 <p className="font-body text-center mt-6">{routeCard.description}</p>
               </div>
              ) : (
                <Link to={routeCard.link}>
                <div className="rounded-[15px] drop-shadow-md py-16 bg-contain bg-no-repeat" style={{ backgroundImage: `url(${routeCard.image})`, backgroundSize:'100% 100%'}}>
                  <h2 className="bg-black font-heading text-white text-2xl w-full text-center py-2">{routeCard.title}</h2>
                </div>
                <p className="font-body text-center mt-6">{routeCard.description}</p>
              </Link>
            )}
            </li>
          ))}
        </ul>
      </div>
      {showModal && <Login cancel={cancel} />}
    </div>
  )
}

export default Homepage