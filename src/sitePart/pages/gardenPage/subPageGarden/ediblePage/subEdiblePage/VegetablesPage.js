import React, {useState} from 'react';
import { Route, Routes} from "react-router-dom";


function Carrots (){
    return(
        <>
            <h1>Hi masooma Carrots(get started)</h1>        
        </>
    )
}
function Beans (){
    return(
        <>
            <h1>Hi masooma Beans</h1>        
        </>
    )
}










function SubVagetablePages(props) {
    

    return(
        <>
        <Routes>
            <Route exact path="carrots" element={<Carrots />} />
            <Route exact path="beans" element={<Beans />} />
        </Routes>
        </>
    )
    
}
export default SubVagetablePages;