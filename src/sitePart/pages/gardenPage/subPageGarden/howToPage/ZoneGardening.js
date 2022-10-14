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
    zone1:[
        {
            mainTitle:"Zone 1",
            topTitle:"Zone 1 Plants: Cold Hardy Plants For Zone 1 Gardening",
            auther:"By: Bonnie L. Grant, Certified Urban Agriculturist",
            describe:"Zone 1 plants are tough, vigorous, and adaptable to cold extremes. Surprisingly, many of these are also xeriscape plants with high drought tolerance. The Yukon, Siberia, and parts of Alaska are representatives of this harsh planting zone. Gardening in zone 1 isn’t for the faint of heart. Planting choices must be acclimated to the tundra and harsh conditions. Read on for a list of cold hardy plants that can withstand temperatures of – 50 degrees Fahrenheit (-45 C.) in winter. Even extreme northern gardens should have some perennials and annuals. Plants for extreme cold are rare, but the first choices to look at are the native specimens. If it can survive in your region in the wild, it should do pretty well in your garden. However, you aren’t limited to native choices, especially if you don’t mind annual plants. Many of these are hardy enough to survive the warmer season in the region and then simply die back when the really cold temperatures arrive.",
            srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2016/05/zone-1-garden-394x600.jpg",
            questoin:"Zone 1 Perennial Plants? ",
            answerQ:"If you are like me, you hate to waste money on annuals since they are here today, gone tomorrow. Perennials provide the permanency and value that is essential in the household budget. Flowering perennials really perk up the landscape and have an easy growth habit in most cases. Some good zone 1 perennial plants might be: ",
            iframe:<table className='text-primary'><tr className='border d-block p-1'><td>Yarrow</td></tr><tr className='border d-block p-1'><td>False Spirea</td></tr><tr className='border d-block p-1'><td>Cranesbill</td></tr><tr className='border d-block p-1'><td>Delphinium</td></tr></table> ,
            descIframe:"If you take a walk in the woods and look around, you will see plenty of plant diversity. While the extreme winter cold and short season mean plants grow slower, you can still have year-round dimension and greenery. Try the native trees and bushes like:",
            title1:"",
            infoTitle1:<> <div className='d-flex justify-content-center row '> <div className='col-4' ><img src="https://www.gardeningknowhow.com/wp-content/uploads/2020/11/flowering-achillea-400x300.jpg" alt="" className='w-100' /></div><div className='col-4' ><img src="https://www.gardeningknowhow.com/wp-content/uploads/2021/03/background-of-beautiful-white-flowers-sorbaria-sorbifolia-400x300.jpg" alt="" className='w-100' /></div><div className='col-4' ><img src="https://www.gardeningknowhow.com/wp-content/uploads/2020/11/geranium-sanguineum-400x300.jpg" alt="" className='w-100' /></div> </div><p className='mt-4'> Even extreme northern gardens should have some perennials and annuals. Plants for extreme cold are rare, but the first choices to look at are the native specimens. If it can survive in your region in the wild, it should do pretty well in your garden. However, you aren’t limited to native choices, especially if you don’t mind annual plants. Many of these are hardy enough to survive the warmer season in the region and then simply die back when the really cold temperatures arrive.</p> </>,
        }
    ],

}

// ==========================================================================================
// +++++++++++++++++++++++++++++++++++++++++ Pollinator ++++++++++++++++++++++++++++++++
function Zone1 (props){

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
          &nbsp;{infoItems.zone1[0].mainTitle}
        </span>
      </>
      )
      }

    //  +++++++++++++++++++++++++++ information => top Title ++++++++++++++++++++++++++++
    const zone1 = {
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
        document.getElementById("remove2").innerHTML = '<img  src="https://www.gardeningknowhow.com/wp-content/uploads/2016/05/zone-1-garden-394x600.jpg" alt="zone1" />',
        document.getElementById("remove3").innerHTML = "<table className='text-primary'><tr className='border d-block p-1'><td>Yarrow</td></tr><tr className='border d-block p-1'><td>False Spirea</td></tr><tr className='border d-block p-1'><td>Cranesbill</td></tr><tr className='border d-block p-1'><td>Delphinium</td></tr></table> "
        )
}

// +++++++++++++++++++++++++++++++++++++ Main Return++++++++++++++++++++++++++=
    return(
        <>
            <div className="container" >
                <div className="mt-5">
                <TopTitle dataTop={zone1} addTitle={addTitle()}/>

                </div>
                <div className="subinfo mb-5 row">
                    {/* start main for apple tree */}
                    <MainContent infoItems={infoItems.zone1[0]} innerImgIframePrint={innerImgIframePrint} />
                    {/* end of main for apple tree */}
                    <div className="col-12 col-md-3"><RightSidePart /></div>
                </div>
                <div className='pt-5'>
                    <Section3 />
                </div>
            </div>
            <Section4/>
        </>
    )
}



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

function ZoneGardening(params) {
    return(
        <>
            <Zone1/>
        </>
    )
}

export default ZoneGardening;