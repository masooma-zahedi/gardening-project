import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./sitePart/component/Header";
import Footer from "./sitePart/component/Footer";
import Home from "./sitePart/pages/Home";
import HousePlant from "./sitePart/pages/HousePlant";
import Problems from "./sitePart/pages/Problems";
import "./App.css";
import LawnCare from "./sitePart/pages/LawnCare";
// import Composting from "./sitePart/pages/Composting";
import Diseases from "./sitePart/pages/problemsPage/Diseases";
import Environmental from "./sitePart/pages/problemsPage/Environmental";
import Pests from "./sitePart/pages/problemsPage/Pests";
import Weeds from "./sitePart/pages/problemsPage/Weeds";
import Gardens from "./sitePart/pages/Gardens";
import Edible from "./sitePart/pages/gardenPage/Edible";
import Howto from "./sitePart/pages/gardenPage/Howto";
import Ornamental from "./sitePart/pages/gardenPage/Ornamental";
import Special from "./sitePart/pages/gardenPage/Special";
import SpecificHousep from "./sitePart/pages/houseplantPage/SpecificHousep";
import GeneralHousep from "./sitePart/pages/houseplantPage/GeneralHousep";
import GeneralLawn from "./sitePart/pages/lawnCarePage/GeneralLawn";
import GrassesLawn from "./sitePart/pages/lawnCarePage/GrassesLawn";
import SubstituteLawn from "./sitePart/pages/lawnCarePage/SubstituteLawn";
import FruitsPage from "./sitePart/pages/gardenPage/subPageGarden/ediblePage/Fruits";
import SubFruitspages from "./sitePart/pages/gardenPage/subPageGarden/ediblePage/subEdiblePage/FruitsPage";
import GrainsP from "./sitePart/pages/gardenPage/subPageGarden/ediblePage/Grains";
import GrainsPage from "./sitePart/pages/gardenPage/subPageGarden/ediblePage/subEdiblePage/GrainsPage";
import MainHerbs from "./sitePart/pages/gardenPage/subPageGarden/ediblePage/Herbs";
import SubHerbspages from "./sitePart/pages/gardenPage/subPageGarden/ediblePage/subEdiblePage/HerbsPage";
import NutTreePage from "./sitePart/pages/gardenPage/subPageGarden/ediblePage/NutTree";
import SubNutspages from "./sitePart/pages/gardenPage/subPageGarden/ediblePage/subEdiblePage/NutTreePage";
import VegetableP from "./sitePart/pages/gardenPage/subPageGarden/ediblePage/Vegetables";
import SubVagetablePages from "./sitePart/pages/gardenPage/subPageGarden/ediblePage/subEdiblePage/VegetablesPage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* Gardens Tab */}
          <Route exact  path="/gardens" element={<Gardens />} />
          <Route  path="/gardens/edible" element={<Edible />} />




          {/* ????????????????????? */}
          <Route path="/gardens/edible/fruits" element={<FruitsPage />} />
          <Route path="/gardens/edible/fruits/subEdiblePage/fruitsPage/*" element={<SubFruitspages />} />

          <Route path="/gardens/edible/grains" element={<GrainsP />} />
          <Route path="/gardens/edible/grains/subEdiblePage/grainsPage/*" element={<GrainsPage />} />

          <Route path="/gardens/edible/herbs" element={<MainHerbs />} />
          <Route path="/gardens/edible/herbs/subEdiblePage/herbsPage/*" element={<SubHerbspages />} />

          <Route path="/gardens/edible/nutTree" element={<NutTreePage />} />
          <Route path="/gardens/edible/nutTree/subEdiblePage/nutTreePage/*" element={<SubNutspages />} />

          <Route path="/gardens/edible/vegetables" element={<VegetableP />} />
          <Route path="/gardens/edible/vegetables/subEdiblePage/vagetablesPage/*" element={<SubVagetablePages />} />






          {/* ??????????????????????????????????????????? */}




          <Route path="/gardens/howto" element={<Howto />} />
          <Route path="/gardens/ornamental" element={<Ornamental />} />
          <Route path="/gardens/special" element={<Special />} />


          {/* Houseplant Tab */}
          <Route path="/houseplant" element={<HousePlant />} />
          <Route path="/houseplant/specific" element={<SpecificHousep />} />
          <Route path="/houseplant/general" element={<GeneralHousep />} />
 
          {/* Problems Tab */}
          {/* ///////////////////////////// I am working/////////////////////////// */}
          <Route path="/problems" exact element={<Problems />} />
          <Route path="/problems/diseases" element={<Diseases />} />

          <Route path="/problems/environmental" element={<Environmental />} />
          <Route path="/problems/pests" element={<Pests />} />
          <Route path="/problems/weeds" element={<Weeds />} />
          {/* LawnCare Tab */}
          <Route path="/lawnCare" element={<LawnCare />} />
          <Route path="/lawnCare/generlLawn" element={<GeneralLawn />} />
          <Route path="/lawnCare/substitute" element={<SubstituteLawn />} />
          <Route path="/lawnCare/grassesLawn" element={<GrassesLawn />} />

          {/* <Route path="/composting" element={<Composting />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
