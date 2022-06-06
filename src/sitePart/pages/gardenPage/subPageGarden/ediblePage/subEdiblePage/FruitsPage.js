import React, {useState} from 'react';
import { Route, Routes} from "react-router-dom";


function AppleTree (){
    return(
        <>
            <h1>Hi masooma Apple Tree (get started)</h1>        
        </>
    )
}
function Apple (){
    return(
        <>
            <h1>Hi masooma Apple</h1>        
        </>
    )
}
function Banana (){
    return(
        <>
            <h1>Hi masooma you can do it surly Banana</h1>        
        </>
    )
}
function Cantaloupe (){
    return(
        <>
            <h1>Hi masooma you can do it surly Cantaloupe</h1>        
        </>
    )
}










function SubFruitspages(props) {
    

    return(
        <>
        <Routes>
            <Route exact path="appleTree" element={<AppleTree />} />
            <Route exact path="apple" element={<Apple />} />
            <Route exact path="banana" element={<Banana />} />
            <Route exact path="cantaloupe" element={<Cantaloupe />} />
        </Routes>
        </>
    )
    
}
export default SubFruitspages;