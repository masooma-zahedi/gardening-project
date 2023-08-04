import React from 'react';
import { RightSidePart } from '../../../../component/RightSidePart';
import { TopTitle } from '../../../../component/subTabMenu/TopPartSubTab';
import {Section3, Section4} from '../../../../component/SectionsBottomPage';
import MainContent from '../../../../component/MainContent';


const infoItems = {
    astrantia  :[
        {
            mainTitle:"Amsonia  ",
            topTitle:"Amsonia Transplant Guide: Tips For Moving Amsonia Plants",
            auther:"By: Darcy Larum, Landscape Designer",
            describe:"Amsonia is a favorite in perennial gardens because of its sky blue, star-shaped flowers and the interesting foliage of certain varieties. The plant grows best in a site with full sun and well-draining soil. As gardeners, we usually try to follow the proper site recommendations of plants to ensure they grow to their full potential. However, sometimes a plant may struggle in a certain spot and simply moving it to a new site can revive it. If you’ve found yourself asking “can you move an amsonia,” then this article is for you. Read on for tips on transplanting amsonia.",
            srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2018/07/amsonia-transplant-400x267.jpg",
            questoin:"Moving Amsonia Plants ",
            answerQ:"In all my years working in garden centers and landscaping, I noticed a curious thing. When moving to a new home, many gardeners will dig up their favorite perennials, herbs or other landscape plants and take them, rather than purchasing or propagating new plants for the new landscape.",
            iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/3wZs6XgTo7M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            descIframe:"Transplanting any plant can put it through stress. In some cases, this transplant shock can kill a plant. There are a couple steps you can take to reduce the stress amsonia may experience during transplant. First, water the plant deeply 24 hours before digging it up. At this point, you can also cut the stems and foliage of amsonia back to about 6 inches (15 cm.) tall. This pruning will help redirect the plant’s energy into the root structure. Also, planning an amsonia transplant day around the weather will help reduce stress. It is always preferred to transplant on cooler cloudy days, when intense heat and sun will not add more stress to the plant.",
            title1:"Transplanting an Amsonia Flower Clump",
            infoTitle1:"Once the root ball is dug up, you can determine whether to divide it or not based on its general health and the new site or sites it will be transplanted to. To divide an amsonia root ball, simply cut sections of the root ball containing the plant’s crown and stems with a clean, sharp knife or saw. Dividing plants like this may seem brutal but the cuts to the root ball actually stimulate plant growth both above and below the soil level. Transplanting amsonia plants will also go more smoothly if you have the new planting holes or pots already prepared before moving the plant. Amsonia plants should be planted at the same depth they were previously planted, but the holes should be dug twice as wide as the root section which you are planting. This extra width of the planting hole ensures that the roots will have soft loose dirt to spread out in. Place the amsonia transplant in the new planting holes, then back fill with loose soil, only lightly tamping down the soil as you go to prevent air pockets. After transplanting plants, thoroughly water. I also recommend using a product such as Root & Grow to provide a low dose of rooting fertilizer and help reduce transplant shock.",
        }
    ],

}

// ==========================================================================================
// +++++++++++++++++++++++++++++++++++++++++ Pollinator ++++++++++++++++++++++++++++++++
function Astrantia (props){

    const addTitle = ()=>{
        return(
        <>
        <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <span style={{ color: "rgb(87 161 195)" }}>
          &nbsp;{infoItems.astrantia  [0].mainTitle}
        </span>
      </>
      )
      }

    //  +++++++++++++++++++++++++++ information => top Title ++++++++++++++++++++++++++++
    const astrantia  = {
        topInfo:[
            {
                title1: "Gardens",
                linkTo1:"/gardens",
                title2: "Ornamental",
                linkTo2:"/gardens/ornamental"
            },
        ]
    }
// +++++++++++++++++++++++++++++++++++++ Print Page ++++++++++++++++++++++++++++====
 
    const innerImgIframePrint = () =>{
        return (
            document.getElementById("remove2").innerHTML = '<img src="https://www.gardeningknowhow.com/wp-content/uploads/2018/07/amsonia-transplant-400x267.jpg"/>',
            document.getElementById("remove3").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/3wZs6XgTo7M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            )
    }

// +++++++++++++++++++++++++++++++++++++ Main Return++++++++++++++++++++++++++=
    return(
        <>
            <div className="container" >
                <div className="mt-5">
                <TopTitle dataTop={astrantia } addTitle={addTitle()}/>

                </div>
                <div className="subinfo mb-5 row">
                    {/* start main for apple tree */}
                    <MainContent infoItems={infoItems.astrantia [0]} innerImgIframePrint={innerImgIframePrint} />
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


// ==================================================================================



function FlowersOrnamental(params) {
    return(
        <>
            <Astrantia />
        </>
    )
}

export default FlowersOrnamental;












