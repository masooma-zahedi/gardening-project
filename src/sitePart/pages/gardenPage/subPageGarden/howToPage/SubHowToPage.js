import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import GardenFriends from './GardenFriends';
import LifestyleGardening from './LifestyleGardening';
import ProjectsGardening from './ProjectsGardening';
import RegionGardening from './RegionGardening';
import ZoneGardening from './ZoneGardening';



function SubHowToPage(params) {
    return(
        <>
        <Routes>
            <Route path="gardenFriends" element={<GardenFriends/>} />
            <Route path="regionGardening" element={<RegionGardening/>} />
            <Route path="zoneGardening" element={<ZoneGardening/>} />
            <Route path="lifestyleGardening" element={<LifestyleGardening/>} />
            <Route path="projectsGardening" element={<ProjectsGardening/>} />
        </Routes>
        </>
    )
}

export default SubHowToPage;