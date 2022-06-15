import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import BulbsOrnamental from "./BulbsOrnamental";
import CactiOrnamental from "./CactiOrnamental";
import FlowersOrnamental from './FlowersOrnamental';
import FoliageOrnamental from './FoliageOnamental';
import FungusOrnamental from './FungusOrnamental';





function SubOrnamentalPage(params) {
    return(
        <>  
            <Routes>
                <Route path="bulbs" element={<BulbsOrnamental/>} />
                <Route path="cacti" element={<CactiOrnamental/>} />
                <Route path="flowers" element={<FlowersOrnamental/>} />
                <Route path="foliage" element={<FoliageOrnamental/>} />
                <Route path="fungus" element={<FungusOrnamental/>} />
            </Routes>
        </>
    )
}


export default SubOrnamentalPage;