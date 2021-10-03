import React from "react";
import "../js/materialize";

import Search from "../components/Search/Search";
import DishList from "./DishList/DishList";

const App = () => {
  return (
    <div className="container">
      <Search />
      <DishList />
    </div>
  );
};

export default App;
