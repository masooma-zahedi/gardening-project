import React, {useState} from 'react';
import { Route, Routes} from "react-router-dom";


function RiceLeaf (){
    return(
        <>
            <h1>Hi masooma RiceLeaf(get started)</h1>        
        </>
    )
}
function GalaApple (){
    return(
        <>
            <h1>Hi masooma GalaApple jjjjj</h1>        
        </>
    )
}










function GrainsPage(props) {
    

    return(
        <>
        <Routes>
            <Route exact path="riceLeaf" element={<RiceLeaf />} />
            <Route exact path="galaApple" element={<GalaApple />} />
        </Routes>
        </>
    )
    
}
export default GrainsPage;