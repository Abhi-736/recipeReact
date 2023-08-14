import React from "react";
import { createContext, useState, useEffect, useContext } from "react";

const userContext = createContext();
const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
  const [MealArray, setMealArray] = React.useState([]);
  const [Loading, setLoading] = React.useState(false);
  const [selectedMeal, setselectedMeal]= React.useState('')

  const fetchMeals = (url) => {
    setLoading(true);
    let finalURL = `${allMealsUrl}${url}`;
    fetch(finalURL)
      .then((res) => res.json())
      .then((data) => {
        setMealArray(data.meals);
        setLoading(false);
      })
      .catch((err) => {console.log(err);
        setLoading(false);});
    
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

  const openMedalDescription=(card)=>{
    setselectedMeal(card)
console.log(card)
  }
  const contextStore = { 
fetchMeals,
  fetchRandom,
  Loading,
 MealArray,
  selectedMeal,
openMedalDescription };

  return (
    <userContext.Provider value={contextStore}>{children}</userContext.Provider>
  );
};

export { AppProvider, userContext };
