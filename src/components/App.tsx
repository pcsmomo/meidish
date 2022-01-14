import "../js/materialize";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import DishList from "./DishList";
import Signin from "./Signin";

const App = () => {
  const isDev = process.env.NODE_ENV === "development";

  // when deploying to github pages,
  // this project gets arranged as a sub folder from my main domain
  const pathname = window.location.pathname;
  const prjPath = isDev ? "" : `/${pathname.split("/")[1]}`;

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path={`${prjPath}/`} element={<DishList />} />
          <Route path={`${prjPath}/signin`} element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
