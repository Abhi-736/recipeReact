import React from "react";
import "./App.css";
import { createContext, useState, useEffect, useContext } from "react";
import { AppProvider, userContext } from "./context/AppProvider";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Search />
        <Favourite />
        <Home />
      </div>
    </AppProvider>
  );
}

export default App;

export const Search = () => {
  const [search, setSearch] = React.useState("");
  const { fetchMeals, fetchRandom } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    search && fetchMeals(search);
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-center gap-2 ">
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type a Dish"
            aria-label="Search"
          />
          <button className="btn btn-sm btn-outline-success " type="submit">
            Search
          </button>
        </form>
        <button
          className="btn btn-sm btn-outline-danger ms-0"
          onClick={fetchRandom}
          type="submit"
        >
          Random
        </button>
      </div>
    </nav>
  );
};
export const Favourite = () => {
  const { favourite, removeFavourite,openMedalDescription } = useContext(userContext);
  console.log(favourite);
  return (favourite.length>0 &&
    (<div className="Favourite pt-2 mb-2">
      <div className="container-fluid">
        {favourite.map((value) => (
          <div className="favourite-circle">
             <i className="bi bi-x-lg close" onClick={()=>removeFavourite(value.idMeal)}></i>
            <img src={value.strMealThumb} onClick={()=>openMedalDescription(value)} alt="" />
            <p className="favTitle" onClick={()=>openMedalDescription(value)}>{value.strMeal}</p>
          </div>
        ))}
      </div>
    </div>)
  );
};

export const Home = () => {
  const { Loading, MealArray, openMedalDescription, selectedMeal,addFavourite } =
    useContext(userContext);

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
export const Loader = () => {
  return <div>Loading</div>;
};

export const MealDescription = () => {
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
