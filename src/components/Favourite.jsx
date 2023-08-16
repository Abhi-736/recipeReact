import React from 'react';
import { userContext } from "../context/AppProvider";


const Favourite = () => {
  const { favourite, removeFavourite,openMedalDescription } = React.useContext(userContext);
  console.log(favourite);
  return (favourite.length>0 &&
    (<div className="Favourite pt-2 mb-2">
      <div className="Favourite-container">
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
export default Favourite