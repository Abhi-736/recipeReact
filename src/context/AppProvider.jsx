import React from "react";
import { createContext, useState, useEffect, useContext } from "react";

const userContext = createContext();
const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
  const [MealArray, setMealArray] = React.useState([]);
  const [Loading, setLoading] = React.useState(false);
  const [selectedMeal, setselectedMeal] = React.useState("");
  const [favourite, setFavourite] = React.useState(JSON.parse(localStorage.getItem('favourite'))||[]);

  const fetchMeals = (url) => {
    setLoading(true);
    
    let finalURL = `${allMealsUrl}${url}`;
    fetch(finalURL)
      .then((res) => res.json())
      .then((data) => {
        setMealArray(data.meals);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const fetchRandom = () => {
    setLoading(true);
    setMealArray([]);
    fetch(randomMealUrl)
      .then((res) => res.json())
      .then((data) => {
        setMealArray(data.meals);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const openMedalDescription = (card) => {
    setselectedMeal(card);
    console.log(card);
  };

  const addFavourite = (id) => {
    const newFavMeal = MealArray.filter((value) => value.idMeal === id);
    favourite.length === 0
      ? setFavourite([...newFavMeal])
      : !favourite.find((value) => value.idMeal === id) &&
        setFavourite((value) => [...value, ...newFavMeal]);

  };

  useEffect(()=>{
    localStorage.setItem('favourite',JSON.stringify(favourite))
  },[favourite])


  const removeFavourite = (id) => {
    const newFavourite = favourite.filter((value) => value.idMeal !== id);
    setFavourite(newFavourite);
  };

  const contextStore = {
    fetchMeals,
    fetchRandom,
    Loading,
    MealArray,
    selectedMeal,
    openMedalDescription,
    favourite,
    addFavourite,
    setselectedMeal,
    removeFavourite,
  };

  return (
    <userContext.Provider value={contextStore}>{children}</userContext.Provider>
  );
};

export { AppProvider, userContext };
