import "./App.css";
import TopHeader from "./Header/Header";

import Footer from "./Footer/Footer";
import React, { useEffect } from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Recipes from "./routes/recipes/Recipes";
import { useQuery, gql } from "@apollo/client";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

export const GET_COCKTAILS = gql`
  query {
    cocktailList {
      drink_id
      name
      img
      recipeBody
      category
    }
  }
`;

function App() {
  const dispatch = useDispatch();
  const { setCocktailList } = bindActionCreators(actionCreators, dispatch);

  const { data, loading, error } = useQuery(GET_COCKTAILS);

  useEffect(() => {
    if (data) {
      console.log("before call", data.cocktailList);
      setCocktailList(data.cocktailList);
    }
  }, [loading, data]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :</p>;

  return (
    <div className="App">
      <TopHeader />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/recipes" element={<Recipes />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
