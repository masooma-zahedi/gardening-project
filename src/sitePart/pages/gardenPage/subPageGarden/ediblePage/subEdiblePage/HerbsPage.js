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
    arnica:[
        {
            mainTitle:"Arnica",
            topTitle:"Arnica Plant Care: Learn How To Grow Arnica Herbs",
            auther:"By: Mary H. Dyer, Credentialed Garden Writer",
            describe:"A member of the sunflower family, arnica (Arnica spp.) is a perennial herb that produces yellow-orange, daisy-like blooms in late spring and early summer. Also known as mountain tobacco, leopard’s bane and wolfbane, arnica is highly valued for its herbal qualities. However, before you decide to grow arnica or use the herb medicinally, there are a number of things you should know.",
            srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2015/10/arnica-400x266.jpg",
            questoin:"Arnica Growing Conditions?",
            answerQ:"Arnica is a hardy plant suitable for growing in USDA plant hardiness zones 4 through 9. The plant tolerates nearly any well-drained soil, but generally prefers sandy, slightly alkaline soil. Full sunlight is best, although the arnica benefits from a bit of afternoon shade in hot climates.",
            iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/pe_2-aUxvE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            descIframe:"Planting arnica isn’t difficult. Just sprinkle the seeds lightly on prepared soil in late summer, then cover them lightly with sand or fine soil. Keep the soil slightly moist until the seeds germinate. Be patient; seeds usually sprout in about a month, but germination can take much longer. Thin the seedlings to allow about 12 inches (30 cm.) between each plant.",
            title1:"Arnica Plant Care",
            infoTitle1:"Established arnica plants require very little attention. The primary consideration is regular irrigation, as arnica is not a drought-tolerant plant. Water often enough to keep the soil lightly moist; don’t allow the soil to become bone dry or soggy. As a general rule, water when the top of the soil feels slightly dry. Remove wilted flowers to encourage continued blooming throughout the season. Disclaimer: The contents of this article is for educational and gardening purposes only. Before using ANY herb or plant for medicinal purposes, please consult a physician or a medical herbalist for adviceYou can also start arnica seeds indoors. Plant the seeds in pots and keep them in bright, indirect sunlight where temperatures are maintained at approximately 55 F. (13 C.) For best results, grow the plants indoors for several months before moving them to a permanent outdoor location after all danger of frost has passed in spring.",
        }
    ],

}

// ==========================================================================================
// +++++++++++++++++++++++++++++++++++++++++ RiceLeaf ++++++++++++++++++++++++++++++++
function Arnica (props){

    const addTitle = ()=>{
        return(
        <>
          <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <Link to="/gardens/edible/herbs" style={{textDecoration:"none"}}>
            <span style={{ color: "rgb(87 161 195)" }}>
            &nbsp;Herbs
            </span>
        </Link>
        {/* //// */}
        <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <span style={{ color: "rgb(87 161 195)" }}>
          &nbsp;{infoItems.arnica[0].mainTitle}
        </span>
      </>
      )
      }

    //  +++++++++++++++++++++++++++ information => top Title ++++++++++++++++++++++++++++
    const arnica = {
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

// +++++++++++++++++++++++++++++++++++++ Main Return++++++++++++++++++++++++++=
    return(
        <>
            <div className="container" >
                <div className="mt-5">
                <TopTitle dataTop={arnica} addTitle={addTitle()}/>

                </div>
                <div className="subinfo mb-5 row">
                    {/* start main for apple tree */}
                    <MainContent infoItems={infoItems.arnica[0]} innerImgIframePrint={innerImgIframePrint} />
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




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function Arnica (){
//     return(
//         <>
//             <h1>Hi masooma Arnica jjjjj (get started)</h1>        
//         </>
//     )
// }
// function Anise (){
//     return(
//         <>
//             <h1>Hi masooma Anise</h1>        
//         </>
//     )
// }
// function BayTree (){
//     return(
//         <>
//             <h1>Hi masooma you can do it surly BayTree</h1>        
//         </>
//     )
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=









function SubHerbspages(props) {
    

    return(
        <>
        <Routes>
            <Route exact path="arnica" element={<Arnica />} />
            {/* <Route exact path="anise" element={<Anise />} />
            <Route exact path="bayTree" element={<BayTree />} /> */}
        </Routes>
        </>
    )
    
}
export default SubHerbspages;