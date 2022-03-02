import React from "react";
import {Routes, Route } from "react-router-dom";
import Header from "./sitePart/Header";
import Main from "./sitePart/Main";
import Footer from "./sitePart/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
