import React from 'react';
import MealDescription from './MealDescription';
import { userContext } from '../context/AppProvider';
import Loader from "./Loader"

const Home = () => {
    const { Loading, MealArray, openMedalDescription, selectedMeal,addFavourite } =
      React.useContext(userContext);
  
    return (
      <>
        {Loading ? (
          <Loader />
        ) : (
          <div className="container Home d-flex">
            {MealArray.map((card) => {
              return (
                <div className="card">
                  <img
                    src={card.strMealThumb}
                    onClick={() => openMedalDescription(card)}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body d-flex">
                    <p
                      onClick={() => openMedalDescription(card)}
                      className="card-text"
                    >
                      {card.strMeal}
                    </p>
                    <i
                      onClick={() => {
                        addFavourite(card.idMeal);
                      }}
                      class="bi bi-hand-thumbs-up"
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {selectedMeal ? <MealDescription /> : null}
      </>
    );
  };
  export default Home