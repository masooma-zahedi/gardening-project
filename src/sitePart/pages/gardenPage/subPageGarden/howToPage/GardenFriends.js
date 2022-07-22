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
    pollinator:[
        {
            mainTitle:"Pollinator",
            topTitle:"Fall Pollinator Garden: Help Pollinators With Late-Blooming Pollinator Plants",
            auther:"By: Tonya Barnett, (Author of FRESHCUTKY)",
            describe:"Late summer and early fall blooming pollinator plants are an essential source of nectar for many insects as they prepare for the arrival of winter. Though some species of flower have completed their growth cycle by the time cooler weather arrives, other plants have just begun to burst into bloom. Learning more about which ornamental flowers are best for fall pollinators can help gardeners create a thriving late season ecosystem within flower beds. ",
            srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2021/10/Fall-pollinator-plants-400x300.jpg",
            questoin:"popular Fall Flowers to Plant?",
            answerQ:"Both annual and perennial asters are prized for their ability to attract fall pollinators. While annual aster varieties are known to produce larger, showy flowers; perennial species of aster often make stunning mass plantings. A profusion of small flowers, which open on long branches, most commonly range in color from white to deep purple. Like many native plants, perennial aster plants are exceptionally robust and resistant to disease and insect damage.",
            iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/epgpuipFP30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            descIframe:"What is a pollinator garden? In simple terms, a pollinator garden is one that attracts bees, butterflies, moths, hummingbirds or other beneficial creatures that transfer pollen from flower to flower, or in some cases, within flowers. Planting a pollinator garden is more important than you may realize, and even a small garden can make a huge difference as pollinators have suffered greatly from loss of habitat, misuse of chemicals and spread of invasive plant and animal species. Many pollinators have disappeared and others are endangered. Read on to learn about a few of the many pollinator friendly plants.",
            title1:"Popular Fall Flowers to Plant",
            infoTitle1:"Annual and late season coreopsis are yet another wildflower which has proven to be among many growers’ favorite fall blooming pollinator plants. Each fall, bright yellow daisy-like flowers open atop wiry stems. Varieties of coreopsis, such as ‘Autumn Blush,’ continue to bloom from mid-summer until the first frost. Coreopsis is an excellent choice for flower beds with less than ideal growing conditions, such as poor soil fertility.Many pollinator garden ideas also include the planting of cut flowers. Available to gardeners in a wide selection of colors and flower forms, dahlias are quite attractive to bees. Though the plants begin blooming in the summer, flower production often reaches its peak as the temperatures begin to cool. These pollinator attracting plants are certain to offer growers an intense burst of color until the first frost.",
        }
    ],

}

// ==========================================================================================
// +++++++++++++++++++++++++++++++++++++++++ Pollinator ++++++++++++++++++++++++++++++++
function Pollinator (props){

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
          &nbsp;{infoItems.pollinator[0].mainTitle}
        </span>
      </>
      )
      }

    //  +++++++++++++++++++++++++++ information => top Title ++++++++++++++++++++++++++++
    const pollinator = {
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
        document.getElementById("remove2").innerHTML = '<img  src="https://www.gardeningknowhow.com/wp-content/uploads/2021/10/Fall-pollinator-plants-400x300.jpg" alt="Pollinator" />',
        document.getElementById("remove3").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/epgpuipFP30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        )
}

// +++++++++++++++++++++++++++++++++++++ Main Return++++++++++++++++++++++++++=
    return(
        <>
            <div className="container" >
                <div className="mt-5">
                <TopTitle dataTop={pollinator} addTitle={addTitle()}/>

                </div>
                <div className="subinfo mb-5 row">
                    {/* start main for apple tree */}
                    <MainContent infoItems={infoItems.pollinator[0]} innerImgIframePrint={innerImgIframePrint} />
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

function GardenFriends(params) {
    return(
        <>
            <Pollinator/>
        </>
    )
}

export default GardenFriends;