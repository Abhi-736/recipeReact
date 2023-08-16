import React from 'react'
import {userContext} from "../context/AppProvider";


const MealDescription = () => {
    const { selectedMeal, addFavourite, setselectedMeal } = React.useContext(userContext);
  
    return (
      <div className="MealInfo d-flex">
        <div className="MealInfoContainer d-flex flex-column ">
          <img src={selectedMeal.strMealThumb} alt="MealThumb" />
          <i className="bi bi-x-lg close" onClick={()=>setselectedMeal('')}></i>
          <div className="header text-center mt-1">
            <h3>{selectedMeal.strMeal}</h3>
          </div>
          <div className="description">{selectedMeal.strInstructions}</div>
          <div className="sources d-flex my-3 justify-content-around ">
            <button
              type="button"
              onClick={() => addFavourite(selectedMeal.idMeal)}
              className="btn btn-sm btn-success"
            >
              Add To<br/> Favourite
            </button>
  
            <button type="button" className="btn btn-sm btn-danger">
              <a href={selectedMeal.strYoutube} target="_blank" rel="noreferrer">
                {" "}
                Youtube
              </a>
            </button>
  
            <button type="button" className="btn btn-sm btn-success">
              <a href={selectedMeal.strSource} target="_blank" rel="noreferrer">
                {" "}
                Source
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  };
  export default MealDescription