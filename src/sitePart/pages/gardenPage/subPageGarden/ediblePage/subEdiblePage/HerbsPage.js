import React, {useState} from 'react';
import { Route, Routes} from "react-router-dom";


function Arnica (){
    return(
        <>
            <h1>Hi masooma Arnica jjjjj (get started)</h1>        
        </>
    )
}
function Anise (){
    return(
        <>
            <h1>Hi masooma Anise</h1>        
        </>
    )
}
function BayTree (){
    return(
        <>
            <h1>Hi masooma you can do it surly BayTree</h1>        
        </>
    )
}










function SubHerbspages(props) {
    

    return(
        <>
        <Routes>
            <Route exact path="arnica" element={<Arnica />} />
            <Route exact path="anise" element={<Anise />} />
            <Route exact path="bayTree" element={<BayTree />} />
        </Routes>
        </>
    )
    
}
export default SubHerbspages;