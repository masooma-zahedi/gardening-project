import React, {useState} from 'react';
import { Route, Routes} from "react-router-dom";


function AlmondOil (){
    return(
        <>
            <h1>Hi masooma AlmondOil (get started)</h1>        
        </>
    )
}
function BlackWalnut (){
    return(
        <>
            <h1>Hi masooma BlackWalnut</h1>        
        </>
    )
}
function PineNut (){
    return(
        <>
            <h1>Hi masooma you can do it surly PineNut</h1>        
        </>
    )
}










function SubNutspages(props) {
    

    return(
        <>
        <Routes>
            <Route exact path="almondOil" element={<AlmondOil />} />
            <Route exact path="blackWalnut" element={<BlackWalnut />} />
            <Route exact path="pineNut" element={<PineNut />} />
        </Routes>
        </>
    )
    
}
export default SubNutspages;