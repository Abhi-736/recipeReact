import React from "react";
import "./App.css";
import { AppProvider} from "./context/AppProvider";
import Favourite from "./components/Favourite";
import Search from "./components/Search";
import Home from "./components/Home"

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








