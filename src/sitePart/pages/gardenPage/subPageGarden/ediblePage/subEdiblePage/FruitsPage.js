import React from 'react';
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
    ],
    bananasTree:[
        {
            mainTitle:"Bananas",
            topTitle:"Banana Tree Problems: What Causes Bananas With Cracked Skin",
            auther:"By: Amy Grant",
            describe:"Banana trees are often used in landscapes due to their large, attractive foliage but more often, they are cultivated for their delicious fruit. If you have bananas in your garden, you’re likely growing them for both their ornamental and edible purposes. It takes some work to grow bananas and, even so, they are susceptible to their share of diseases and other banana tree problems. One such issue is bananas with cracked skin. Why do bananas split on the bunch? Read on to find out about banana fruit cracking.",
            srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2017/02/cracked-banana-fruit-400x267.jpg",
            questoin:"Help, My Bananas are Cracking Open!",
            answerQ:"No need to panic about banana fruit cracking. Among all the possible banana tree problems, this one is minimal. Why do bananas split on the bunch? The reason the fruit is cracking is likely due to high relative humidity of over 90% combined with temperatures over 70 F. (21 C.). This is especially true if bananas are left on the plant until ripe.<p>Bananas need to be cut off the plant when still green to promote ripening. If they are left on the plant, you’ll end up with bananas with cracked skin. Not only that, but the fruit changes consistency, dries and becomes cottony. Harvest bananas when they are very firm and very dark green.</p>",
            iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/a6DKcf3pdAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            descIframe:"As the bananas ripen, the skin becomes a lighter green to yellow. During this time, the starch in the fruit is converted to sugar. They are ready to eat when they are partially green, although most people wait until they are yellow or even mottled with brown spots. Actually, bananas that are quite brown on the outside are at the peak of sweetness, but most people either toss them or use them to cook with at this point. So if your bananas are on the tree and cracking open, they have likely been left on too long and are overripe. If you have gotten your bananas at the supermarket, the reason for splitting is probably due to how they were processed as they were being held and ripened. Bananas are usually kept at about 68 F. (20 C.) when ripening, but if they were exposed to higher temperatures, the fruit would ripen faster, weakening the skin and causing splitting of the peel.",
            title1:"Thai Banana Care",
            infoTitle1:"Bananas are heavy feeders and should be fed a high nitrogen organic fertilizer. Fertilize sparingly at least 6 inches away (15 cm.) from the base of the plant, three times per year with a slow release 15-5-10 fertilizer. Don’t over water a banana plant. Root rot from cold, wet soil will easily kill off your plant. Once the plant has fruited, cut the parent plant off at or near ground level. Once it has produced, it will no longer flower or fruit and the psuedostem will rot into the soil or can be removed, cut up and added to the compost pile.",

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














// ******************************************** Banana Page ********************
// ******************************************** Banana Page ********************

function Banana (){
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
          &nbsp;{infoItems.bananasTree[0].mainTitle}
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
        document.getElementById("remove2").innerHTML = '<img  src="https://www.gardeningknowhow.com/wp-content/uploads/2017/02/cracked-banana-fruit-400x267.jpg"  alt="" />',
        document.getElementById("remove3").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/a6DKcf3pdAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        )
}

// ++++++++++++++++++++++++++++++++++++++++++++  Apple Tree  +++++++++++++++++++++++++++++=
// ++++++++++++++++++++++++++++++++++++++++++++  Apple Tree  +++++++++++++++++++++++++++++=
    return(
        <>
            <div className="container" >
                <div className="mt-5">
                <TopTitle dataTop={appleTree} addTitle={addTitle()}/>

                </div>
                <div className="subinfo mb-5 row">
                    {/* start main for apple tree */}
                    <MainContent infoItems={infoItems.bananasTree[0]} innerImgIframePrint={innerImgIframePrint} />
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







// **************************************** Cantaloupe **********************
// **************************************** Cantaloupe **********************
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