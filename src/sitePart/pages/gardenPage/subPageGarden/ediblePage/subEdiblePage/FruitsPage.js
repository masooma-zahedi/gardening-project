import React, {useRef} from 'react';
import { useReactToPrint } from 'react-to-print';
import { Link, Route, Routes} from "react-router-dom";
import { RightSidePart } from '../../../../../component/RightSidePart';
import { TopTitle } from '../../../../../component/subTabMenu/TopPartSubTab';
import {Section3, Section4} from '../../../../../component/SectionsBottomPage';
import MainContent from '../../../../../component/MainContent';

// *********************** Data for Page************************************
        // {
        //     mainTitle:"",
        //     topTitle:"",
        //     auther:"",
        //     describe:"",
        //     srcImg:"",
        //     questoin:"",
        //     answerQ:"",
        //     iframe:"",
        //     descIframe:"",
        //     title1:"",
        //     infoTitle1:"",

        // }
// *************************************************************************

const infoItems = {
    appleTree:[
        {   
            mainTitle:"Apple Tree",
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
    ],
    galaAppleTree:[
        {
            mainTitle:"Gala Apple",
            topTitle:"Gala Apple Tree Care – How To Grow A Gala Apple Fruit Tree",
            auther:"By: Teo Spengler",
            describe:"There aren’t many fruit trees that can keep you in food most of the year. The Gala apple fruit tree is one of them. Famed for their crispness, Gala apples can be harvested most of the autumn and can be stored for months while retaining an excellent texture. If you are thinking of growing a Gala apple tree, who can blame you? Read on for tips to make Gala apple tree care as easy as possible.",
            srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2021/07/gala-apple-400x300.jpg",
            questoin:"Gala Apple Fruit Tree",
            answerQ:"Most apple trees dress up like ballerinas in their spring blossoms, and planting a Gala apple tree brings this show into your own backyard. Its flowers are white-pink and fragrant, giving way to young fruit in summer.As the Gala apples mature, they become ornamental too, developing attractive streaks of yellow on their firm surfaces. The harvest period is long, lasting all through autumn, and that’s when you get to taste the sweet, firm, and juicy fruit.",
            iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/Fj430mbb_20" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            descIframe:"Like every other plant, the Gala apple grows best when its particular needs are met. The ideal Gala apple tree climate is not-too-warm and not-too cool. It thrives in the middle zones, USDA plant hardiness zones 5 through 8. When planting a Gala apple tree, find a site that gets full, direct sun. It needs at least six hours of unfiltered sun per day. Excellent drainage is equally important so provide it with moist, well-drained soil. Note that the tree is self-pollinating, so you don’t need more than one. Two apple trees are always better though.",
            title1:"Gala Apple Tree Care",
            infoTitle1:"Once you’ve got Gala apple tree climate figured out, you are ready to plant. Either fall or spring works well for this tree but avoid very cold or very hot periods. The amount of garden space you’ll need for the tree depends on which version you pick. The standard Gala grows to 25 feet (8.5 m.) tall with a similar spread, the semi-dwarf is about half that tall, while a dwarf stays about 10 feet (3 m.) tall and wide.  Gala apple fruit trees need ample water for the first year. Irrigate deeply at planting time, then twice weekly for a few months while the tree is establishing. One deep watering weekly during the growing season works well the first year, with one monthly in winter. After establishment, water only during dry spells. Mulching helps keep the soil moist.  What about fertilizer? Apply it when planting a Gala apple tree, and again each spring. Prune the tree in late winter to take out dead, diseased, or crowded branches.",
            
        }
    ]
}
// ========>> for Apple Tree <<=====================================
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
          &nbsp;{infoItems.appleTree[0].mainTitle}
        </span>
      </>
      )
      }

    //  +++++++++++++++++++++++++++ information => top Title ++++++++++++++++++++++++++++
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
// +++++++++++++++++++++++++++++++++++++ Print Page ++++++++++++++++++++++++++++====
 
const innerImgIframePrint = () =>{
    return (
        document.getElementById("remove2").innerHTML = '<img  src="https://www.gardeningknowhow.com/wp-content/uploads/2021/09/Columnar-Apple-400x533.jpg" alt="" />',
        document.getElementById("remove3").innerHTML = '<iframe className="d-block bg-warning mx-auto " width="760" height="415" src="https://www.youtube.com/embed/g3hTu-iqYuE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        )
}

// ++++++++++++++++++++++++++++++++++++++++++++  Apple Tree  +++++++++++++++++++++++++++++=
    return(
        <>
            <div className="container" >
                <div className="mt-5">
                <TopTitle dataTop={appleTree} addTitle={addTitle()}/>

                </div>
                <div className="subinfo mb-5 row">
                    {/* start main for apple tree */}
                    <MainContent infoItems={infoItems.appleTree[0]} innerImgIframePrint={innerImgIframePrint} />
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




















// ******************************************* Gala Apple Tree ******************

function Apple (){
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
          &nbsp;{infoItems.galaAppleTree[0].mainTitle}
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
    // ********************************** Print Part ************************
    const innerImgIframePrint = () =>{
        return (
            document.getElementById("remove2").innerHTML = '<img  src="https://www.gardeningknowhow.com/wp-content/uploads/2021/07/gala-apple-400x300.jpg" alt="" />',
            document.getElementById("remove3").innerHTML =' <iframe width="560" height="315" src="https://www.youtube.com/embed/Fj430mbb_20" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            )
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
                    <MainContent infoItems={infoItems.galaAppleTree[0]} innerImgIframePrint={innerImgIframePrint} />
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