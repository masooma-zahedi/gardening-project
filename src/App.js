import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./sitePart/component/Header";
import Footer from "./sitePart/component/Footer";
import Home from "./sitePart/pages/Home";
import Gardens from "./sitePart/pages/Gardens";
import HousePlant from "./sitePart/pages/HousePlant";
import Problems from "./sitePart/pages/Problems";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/gardens" element={<Gardens/>} />
          <Route path="/houseplant" element={<HousePlant/>} />
          <Route path="/problems" element={<Problems/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
