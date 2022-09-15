import React from 'react';
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
    bloodleaf   :[
        {
            mainTitle:"Bloodleaf",
            topTitle:"Bloodleaf Plant Care: How To Grow An Iresine Bloodleaf Plant",
            auther:"By: Jackie Carroll",
            describe:"For glossy, bright red foliage, you can’t beat the Iresine bloodleaf plant. Unless you live in a frost-free climate, you’ll have to grow this tender perennial as an annual or bring it indoors at the end of the season. It also makes a lovely houseplant.Set out the plants in spring after all danger of frost has passed and the soil stays warm both day and night. Keep the soil evenly moist all summer by watering deeply every week in the absence of rain. Use a 2 to 3 inch (5-8 cm.) layer of organic mulch to help prevent the moisture from evaporating. Reduce the moisture in fall and winter if you are growing bloodleaf plants as perennials.",
            srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2014/03/bloodleaf-400x300.jpg",
            questoin:"Iresine Plant?",
            answerQ:"Bloodleaf (Iresine herbstii) is also called chicken-gizzard, beefsteak plant, or Formosa bloodleaf. Iresine bloodleaf plants are native to Brazil where they thrive in warm temperatures and bright sunlight. In their native environment, the plants reach heights of up to 5 feet (1.5 m.) with a spread of 3 feet (91 cm.), but when grown as annuals or potted plants they only grow 12 to 18 inches (31-46 cm.) tall.",
            iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/2QDcghZR-zo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            descIframe:"Plant in a location with full sun or partial shade and organically rich soil that drains freely. Growing bloodleaf in full sun results in better color. Amend the bed with compost or aged manure before planting, unless your soil is exceptionally high in organic matter. Set out the plants in spring after all danger of frost has passed and the soil stays warm both day and night. Keep the soil evenly moist all summer by watering deeply every week in the absence of rain. Use a 2 to 3 inch (5-8 cm.) layer of organic mulch to help prevent the moisture from evaporating. Reduce the moisture in fall and winter if you are growing bloodleaf plants as perennials. Pinch out the growth tips while the plants are young to promote a dense growth habit and attractive shape. You might also consider pinching off flower buds. The flowers aren’t particularly attractive, and supporting flowers depletes energy that would otherwise go toward growing dense foliage. Plants grown in less than ideal conditions rarely flower.",
            title1:"Indoor Care of Bloodleaf Plants",
            infoTitle1:"Whether you are growing bloodleaf as a houseplant or bringing it indoors for winter, pot it up in a loamy, soil-based potting mixture. Place the plant near a bright, preferably south-facing window. If it becomes leggy, then it probably isn’t getting enough light.Keep the potting mix moist in spring and summer by watering when the soil feels dry at a depth of about an inch (2.5 cm.). Add water until it runs from the drainage holes in the bottom of the pot. About 20 minutes after watering, empty the saucer under the pot so the roots aren’t left sitting in water. Bloodleaf plants need less water in fall and winter, but you should never allow the soil to dry out.",
        }
    ],

}

// ==========================================================================================
// +++++++++++++++++++++++++++++++++++++++++ Pollinator ++++++++++++++++++++++++++++++++
function Bloodleaf  (props){

    const addTitle = ()=>{
        return(
        <>
        <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <span style={{ color: "rgb(87 161 195)" }}>
          &nbsp;{infoItems.bloodleaf [0].mainTitle}
        </span>
      </>
      )
      }

    //  +++++++++++++++++++++++++++ information => top Title ++++++++++++++++++++++++++++
    const bloodleaf  = {
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
            document.getElementById("remove2").innerHTML = '<img src="https://www.gardeningknowhow.com/wp-content/uploads/2014/03/bloodleaf-400x300.jpg"/>',
            document.getElementById("remove3").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/2QDcghZR-zo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            )
    }

// +++++++++++++++++++++++++++++++++++++ Main Return++++++++++++++++++++++++++=
    return(
        <>
            <div className="container" >
                <div className="mt-5">
                <TopTitle dataTop={bloodleaf } addTitle={addTitle()}/>

                </div>
                <div className="subinfo mb-5 row">
                    {/* start main for apple tree */}
                    <MainContent infoItems={infoItems.bloodleaf [0]} innerImgIframePrint={innerImgIframePrint} />
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



function FoliageOrnamental(params) {
    return(
        <>
            <Bloodleaf  />
        </>
    )
}

export default FoliageOrnamental;

















