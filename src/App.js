import "./App.css";
import TopHeader from "./Header/Header";
import BodyMenu from "./BodyMenu/BodyMenu";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "./Footer/Footer";
import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Recipes from "./routes/recipes/Recipes";
function App() {
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
