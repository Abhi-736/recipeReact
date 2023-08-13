import React from 'react';
import './App.css';
import { createContext,useState, useEffect, useContext } from 'react';
import { AppProvider, userContext } from './context/AppProvider';





function App() {
  return (



<AppProvider>
    <div className="App">
      <Search/>
      <Favourite/>
      <Home/>
    </div>
    </AppProvider>
  );
}

export default App;

export const Search=()=>{

const [search, setSearch]= React.useState('');

const {fetchData,fetchRandom}= useContext(userContext)

const handleSubmit=(e)=>{
e.preventDefault();
search&&console.log(search)
}

return(

<nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <form className="d-flex" role="search" onSubmit={handleSubmit}>
      <input className="form-control me-2" type="search" onChange={(e)=>setSearch(e.target.value)} placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success " type="submit">Search</button>
      
    </form>
    <button className="btn btn-outline-danger ms-0" type="submit">Random</button>
  </div>
</nav>

)

}

export const Favourite=()=>{return(
<div className='Favourite'>
  <div className='container-fluid'>{/* map */}
    <div className='favourite-circle'>
      <img src='' alt=''/>
    </div>
  </div>
</div>)}

export const Home=()=>{
  return(
    <div className='container'>{/* map */}

    </div>
  )
}
