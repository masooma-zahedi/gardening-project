import React from 'react';
import { Link, Route, Routes} from "react-router-dom";
import { RightSidePart } from '../../../../../component/RightSidePart';
import { TopTitle } from '../../../../../component/subTabMenu/TopPartSubTab';
import {Section3, Section4} from '../../../../../component/SectionsBottomPage';
import MainContent from '../../../../../component/MainContent';

// *********************** Data for Page************************************

const infoItems = {
    appleTree:[
        {
            topTitle:"What Is A Columnar Apple Tree – Columnar Apple Tree Varieties",
            auther:"By: Teo Spengler",
            describe:"What is a columnar apple tree? These are unusually narrow and upright-growing apple trees, tall and thin and perfect for small spaces. You can grow them in a garden corner or in a container on the patio. Although columnar apple tree varieties (Malus domesticus cvs.) look quite different from regular apple trees, columnar apple fruit looks like regular apples. Read on if you are interested in growing columnar apple trees.",
            srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2021/09/Columnar-Apple-400x533.jpg",
            questoin:"a Columnar Apple Tree?",
            answerQ:"If you ever come across an apple tree that is twice as tall as you are, but only 2 feet (61 cm.) wide, you have encountered a columnar apple tree. They are sometimes called Ballerina apple trees, given their slender shape. What is a columnar apple tree? These alien-looking shrubs are genetically programmed to their tall, thin structure. They just don’t grow the broad, sweeping branches of an ordinary apple tree (some 20 feet or 6 meters tall and wide). But they still produce ample fruit. These alien-looking shrubs are genetically programmed to their tall, thin structure. They just don’t grow the broad, sweeping branches of an ordinary apple tree (some 20 feet or 6 meters tall and wide). But they still produce ample fruit.",
            iframe:<iframe className="d-block bg-warning mx-auto " width="760" height="415" src="https://www.youtube.com/embed/g3hTu-iqYuE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ,        
            descIframe:"What is a columnar apple tree? These alien-looking shrubs are genetically programmed to their tall, thin structure. They just don’t grow the broad, sweeping branches of an ordinary apple tree (some 20 feet or 6 meters tall and wide). But they still produce ample fruit.",
            title1:"How to Grow Columnar Trees",
            infoTitle1:"If you are thinking of growing columnar apple trees, you will want to know the ins and outs of planting. We have lots of tips about how to grow columnar trees, but only try this if you live in U.S. Department of Agriculture plant hardiness zones 4 through 9. First, columnar trees are fruit trees, despite their unusual shape. Like regular apple trees, they require a full sun location to thrive. You’ll need at least two different columnar apple tree varieties for pollination. If you plant them in the soil of your backyard, space them about 2 feet (61 cm.). Planting them in large containers or whiskey barrels works just fine. Whether they are in containers or in the ground, you’ll need to water them regularly if you want columnar apple fruit.",
        
        }
    ]
}
// ========>> formula for Apple Tree <<=====================================
function AppleTree (props){

    const addTitle = ()=>{
        return(
        <>
          <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <Link to="/gardens/edible/fruits" style={{textDecoration:"none"}}>
            <span style={{ color: "rgb(87 161 195)" }}>
            &nbsp;Fruits
            </span>
        </Link>
        {/* //// */}
        <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <span style={{ color: "rgb(87 161 195)" }}>
          &nbsp;Apple Tree
        </span>
        {/* //// */}
      </>
      )
      }

    //   information => top Title ///////////
    const appleTree = {
        topInfo:[
            {
                title1: "Gardens",
                linkTo1:"/gardens",
                title2: "Edible",
                linkTo2:"/gardens/edible"
            },
        ]
    }



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
    return(
        <>
            <div className="container" >
                <div className="mt-5">
                <TopTitle dataTop={appleTree} addTitle={addTitle()}/>

                </div>
                <div className="subinfo mb-5 row">
                    {/* start main for apple tree */}
                    <MainContent infoItems={infoItems}/>
                    {/* end of main for apple tree */}
                    <div className="col-3 border"><RightSidePart /></div>
                </div>
                <div className='pt-5'>
                    <Section3 />
                </div>
            </div>
            <Section4/>
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