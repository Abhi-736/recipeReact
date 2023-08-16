import React from 'react'
import {userContext} from "../context/AppProvider";

 const Search = () => {
  const [search, setSearch] = React.useState("");
  const { fetchMeals, fetchRandom } = React.useContext(userContext);

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

export default Search