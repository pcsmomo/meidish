import React from "react";
import "../js/materialize";

import Header from "../components/Header";
import DishList from "./DishList/DishList";

const App = () => {
  return (
    <div className="container">
      <Header />
      <DishList />
    </div>
  );
};

export default App;
