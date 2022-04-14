import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./sitePart/component/Header";
import Footer from "./sitePart/component/Footer";
import Home from "./sitePart/pages/Home";
import Gardens from "./sitePart/pages/Gardens";
import HousePlant from "./sitePart/pages/HousePlant";
import Problems from "./sitePart/pages/Problems";
import "./App.css";
import LawnCare from "./sitePart/pages/LawnCare";
import Composting from "./sitePart/pages/Composting";
import Diseases from "./sitePart/pages/problemsPage/Diseases";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/gardens" element={<Gardens/>} />
          <Route path="/houseplant" element={<HousePlant/>} />
          <Route path="/problems" exact element={<Problems/>} />
          <Route path="/problems/diseases" element={<Diseases/>} />

          <Route path="/lawnCare" element={<LawnCare/>} />
          <Route path="/composting" element={<Composting/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
