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
    crassula   :[
        {
            mainTitle:"CactiOrnamental",
            topTitle:"Crassula Pagoda Plants: How To Grow Red Pagoda Crassula Plant",
            auther:"By: Bonnie L. Grant, Certified Urban Agriculturist",
            describe:"Collectors of succulents will be excited about Crassula pagoda plants. For sheer architectural interest, this unique plant evokes images of a trip to Shanghai where religious temples reflect the unimaginable forms of stacked architecture and astounding building prowess. Red Pagoda Crassula is an easy-to-grow plant that will add punch to any succulent display or as a stand-alone specimen. Here are a few tips on how to grow Red Pagoda and harness the impact of its structure and colorful foliage.",
            srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2021/01/crassula-exotic-succulent-400x300.jpg",
            questoin:"Red Pagoda Crassula ? ",
            answerQ:"Succulents offer a wide range of form to suit any discernible gardener. The Crassula genus has over 150 different species, each more surprising than the last. The fairly common jade plant is in the genus. Crassula pagoda plants have an even more diverse “wow” factor. The stacked triangular foliage edged with red and fine prickly spines is eye candy for the succulent enthusiast. Growing Crassula Red Pagoda is a must for the gardener crazy about succulents and collecting.",
            iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/qxJ4DrcDZV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            descIframe:"Red Pagoda (Crassula corymbulosa) grows spirally arranged, with thick, fleshy leaves bordered with bright pink, red, or sometimes orange. Once you get over the color, the geometric arrangement of the leaves will astound and amaze you. The effect of the layered leaves is hard to describe without invoking artistic expression. ",
            title1:"How to Grow Red Pagoda",
            infoTitle1:"Soil, light, and air circulation are key needs for growing Crassula Red Pagoda. The stems are initially erect but over time, as new rosettes form, they will begin to trail. This means you can grow the plant in a hanging basket. It is equally at home in a rockery, clay pot, or amongst a display of other succulents in the garden. Red Pagoda is only hardy in United States Department of Agriculture zones 11 to 12 but it performs well as a houseplant, too. Plants prefer well-drained soil with plenty of grit but can survive in amended clay soil. Like most succulents, Red Pagoda is easy to grow from cuttings. Allow the cutting to callus for a few days and insert into a soilless medium. In a month or so, the plant will root and can be transplanted to a display container or the garden.",
        }
    ],

}

// ==========================================================================================
// +++++++++++++++++++++++++++++++++++++++++ Pollinator ++++++++++++++++++++++++++++++++
function Crassula (props){

    const addTitle = ()=>{
        return(
        <>
        <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <span style={{ color: "rgb(87 161 195)" }}>
          &nbsp;{infoItems.crassula [0].mainTitle}
        </span>
      </>
      )
      }

    //  +++++++++++++++++++++++++++ information => top Title ++++++++++++++++++++++++++++
    const crassula  = {
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
            document.getElementById("remove2").innerHTML = '<img src="https://www.gardeningknowhow.com/wp-content/uploads/2021/01/crassula-exotic-succulent-400x300.jpg"/>',
            document.getElementById("remove3").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/qxJ4DrcDZV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            )
    }

// +++++++++++++++++++++++++++++++++++++ Main Return++++++++++++++++++++++++++=
    return(
        <>
            <div className="container" >
                <div className="mt-5">
                <TopTitle dataTop={crassula } addTitle={addTitle()}/>

                </div>
                <div className="subinfo mb-5 row">
                    {/* start main for apple tree */}
                    <MainContent infoItems={infoItems.crassula [0]} innerImgIframePrint={innerImgIframePrint} />
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



function CactiOrnamental(params) {
    return(
        <>
            <Crassula />
        </>
    )
}

export default CactiOrnamental;



















