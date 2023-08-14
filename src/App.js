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
      <div className="container-fluid">
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success " type="submit">
            Search
          </button>
        </form>
        <button
          className="btn btn-outline-danger ms-0"
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
  return (
    <div className="Favourite">
      <div className="container-fluid">
        {/* map */}
        <div className="favourite-circle">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export const Home = () => {
  const { Loading, MealArray, openMedalDescription, selectedMeal } =
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
                      console.log("clicked i");
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
  const { selectedMeal } = React.useContext(userContext);

  return (
    <div className="MealInfo d-flex">
      <div className="MealInfoContainer d-flex flex-column justify-center">
        <img src={selectedMeal.strMealThumb} alt="MealThumb" />
        <i className="bi bi-x-lg close"></i>
        <div className="header">{selectedMeal.strMeal}</div>
        <div className="description">{selectedMeal.strInstructions}</div>
        <div className="sources d-flex ">
          <button type="button" className="btn -btn-danger">
            {" "}
            Youtube
          </button>
          <button type="button" className="btn -btn-success">
            Add To Favourite
          </button>
          <button type="button" className="btn -btn-success">
            Source
          </button>
        </div>
      </div>
    </div>
  );
};
