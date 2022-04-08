import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./sitePart/component/Header";
import Footer from "./sitePart/component/Footer";
import Home from "./sitePart/pages/Home"
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          {/* <Route exact path="/footer" element={<Footer/>} /> */}
          {/* <Route path="/news"> */}
            {/* <Footer />
          </Route> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
