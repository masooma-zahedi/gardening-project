import React from 'react';
import { Link, Route, Routes} from "react-router-dom";
import { RightSidePart } from '../../../../component/RightSidePart';
import { TopTitle } from '../../../../component/subTabMenu/TopPartSubTab';
import {Section3, Section4} from '../../../../component/SectionsBottomPage';
import MainContent from '../../../../component/MainContent';

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
    shrubs:[
        {
            mainTitle:"Shrubs",
            topTitle:"Southeastern U.S. Shrubs – Choosing Shrubs For Southern Gardens",
            auther:"By: Becca Badgett, Co-author of How to Grow an EMERGENCY Garden",
            describe:"Growing shrubs in the Southeast is an easy and fun project to beautify your landscape and add that all important curb appeal to your yard. Shrubs are among the most beautiful southern plants for landscape design.Use flowering shrubs as single specimens for a focal point in the front landscape or as an attractive border that provides privacy. A shrub border may also block noise from street traffic or noisy neighbors. Take advantage of a mixed border to add all your coordinating favorites.",
            srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2020/09/se-shrubs-400x300.jpg",
            questoin:"Classic Southern Azalea Shurbs?",
            answerQ:"In the Southeast, these sometimes fragrant blooms are a staple in many beds and gardens. Azalea shrubs come in a variety of types and a range of colors. These early spring flowers may be red, pink, or white. Newly marketed varieties also come in shades of lilac and purple, such as the “Encore Autumn Amethyst” series. These provide blooms again in summer and even fall.",
            iframe:<img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrub-garden-1618748710.jpg?crop=1.00xw:0.758xh;0,0.225xh&resize=980:*' width='100%' padding='20px'/>,
            descIframe:"Flowers of these newer cultivars may be streaked, with picotee patterns or two-toned blossoms. Dappled sunlight from large trees provides the perfect growing spot for these bountiful blooms. They also appreciate the leaf litter that adds nutrients to the bed where they fall. Yellow flowering strains of the plant are now available.",
            title1:"Oakleaf Hydrangea",
            infoTitle1:"This is a favorite in the South because of the long lasting, cone-shaped clusters of white flowers. Blooms begin in summer and often last into autumn. Flowers later become tinged in pink or purple. Also, a shade-loving plant, include this in a mixed border to take up shady areas. The plant grows in morning sun but provide at least afternoon shade when growing this attractive shrub. Large, oak-leaf shaped foliage stays on the plant well into winter, providing red, purple, and bronze color as temperatures cool. Interest continues when leaves drop to expose the peeling bark on this specimen. It grows best in fertile, well-drained soil. Large and spreading, the oakleaf hydrangea needs plenty of space to grow. If your border area is somewhat limited, consider adding a dwarf cultivar, such as ‘Pee Wee.’",
        }
    ],

}

// ==========================================================================================
// +++++++++++++++++++++++++++++++++++++++++ Pollinator ++++++++++++++++++++++++++++++++
function Shrubs  (props){

    const addTitle = ()=>{
        return(
        <>
          {/* <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <Link to="/gardens/edible/grains" style={{textDecoration:"none"}}>
            <span style={{ color: "rgb(87 161 195)" }}>
            &nbsp;Pollinator
            </span>
        </Link> */}
        {/* //// */}
        <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <span style={{ color: "rgb(87 161 195)" }}>
          &nbsp;{infoItems.shrubs [0].mainTitle}
        </span>
      </>
      )
      }

    //  +++++++++++++++++++++++++++ information => top Title ++++++++++++++++++++++++++++
    const shrubs = {
        topInfo:[
            {
                title1: "Gardens",
                linkTo1:"/gardens",
                title2: "How To",
                linkTo2:"/gardens/howTo"
            },
        ]
    }
// +++++++++++++++++++++++++++++++++++++ Print Page ++++++++++++++++++++++++++++====
 
const innerImgIframePrint = () =>{
    return (
        document.getElementById("remove2").innerHTML = '<img  src="https://www.gardeningknowhow.com/wp-content/uploads/2020/09/se-shrubs-400x300.jpg" alt="shurbs" />',
        document.getElementById("remove3").innerHTML = "<img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrub-garden-1618748710.jpg?crop=1.00xw:0.758xh;0,0.225xh&resize=980:*' width='100%' padding='20px'/>"
        )
}

// +++++++++++++++++++++++++++++++++++++ Main Return++++++++++++++++++++++++++=
    return(
        <>
            <div className="container" >
                <div className="mt-5">
                <TopTitle dataTop={shrubs} addTitle={addTitle()}/>

                </div>
                <div className="subinfo mb-5 row">
                    {/* start main for apple tree */}
                    <MainContent infoItems={infoItems.shrubs[0]} innerImgIframePrint={innerImgIframePrint} />
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


// ==================================================================================

function RegionGardening(params) {
    return(
        <>
            <Shrubs/>
        </>
    )
}

export default RegionGardening;