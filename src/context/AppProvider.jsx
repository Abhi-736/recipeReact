import React from 'react'
import { createContext,useState, useEffect, useContext } from 'react';

const userContext= createContext()
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({children}) => {

    const [MealArray,setMealArray]= React.useState([])

    const fetchData=(url)=>{

        const finalURL=`${allMealsUrl}${url}`;
        setMealArray=fetch(finalURL).then((res)=>{console.log(res)})
    }

const fetchRandom=()=>{


}

  return (
    <userContext.Provider value={{fetchData,fetchRandom}}>
        {children}
    </userContext.Provider>
  )
}

export { AppProvider, userContext}