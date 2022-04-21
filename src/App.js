import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./sitePart/component/Header";
import Footer from "./sitePart/component/Footer";
import Home from "./sitePart/pages/Home";
import HousePlant from "./sitePart/pages/HousePlant";
import Problems from "./sitePart/pages/Problems";
import "./App.css";
import LawnCare from "./sitePart/pages/LawnCare";
import Composting from "./sitePart/pages/Composting";
import Diseases from "./sitePart/pages/problemsPage/Diseases";
import Environmental from "./sitePart/pages/problemsPage/Environmental";
import Pests from "./sitePart/pages/problemsPage/Pests";
import Weeds from "./sitePart/pages/problemsPage/Weeds";
import Gardens from "./sitePart/pages/Gardens";
import Edible from "./sitePart/pages/gardenPage/Edible";
import Howto from "./sitePart/pages/gardenPage/Howto";
import Ornamental from "./sitePart/pages/gardenPage/Ornamental";
import Special from "./sitePart/pages/gardenPage/Special";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/gardens" element={<Gardens />} />
          <Route path="/gardens/edible" element={<Edible />} />
          <Route path="/gardens/howto" element={<Howto />} />
          <Route path="/gardens/ornamental" element={<Ornamental />} />
          <Route path="/gardens/special" element={<Special />} />

          <Route path="/houseplant" element={<HousePlant />} />
          <Route path="/problems" exact element={<Problems />} />
          <Route path="/problems/diseases" element={<Diseases />} />
          <Route path="/problems/environmental" element={<Environmental />} />
          <Route path="/problems/pests" element={<Pests />} />
          <Route path="/problems/weeds" element={<Weeds />} />

          <Route path="/lawnCare" element={<LawnCare />} />
          <Route path="/composting" element={<Composting />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
