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
    caladium :[
        {
            mainTitle:"bulbs-Caladium ",
            topTitle:"Caladium Plant Problems – Caladium Plant Pests And Disease",
            auther:"By: Teo Spengler",
            describe:"Caladiums are foliage plants, grown for their showy leaves. The leaves have incredible color combinations including white, green pink and red. They are shaped like arrowheads and can get up to 18 inches long. Caladium plants are native to Central and South America. They are very popular houseplants but they are not without their share of caladium plant problems. Read on to learn about caladium plant pests and other problems with caladium.",
            srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2021/02/elephant-ears-400x300.jpg",
            questoin:"Problems with Caladium",
            answerQ:"Caladiums grow from tubers that look like bulbs, and if the tubers are injured in storage, the plants can be stunted. Carefully stock tubers in a garage or porch at temperatures between 60 and 90 degrees Fahrenheit (15 to 32 C.). Colder or hotter temperatures will create stunted growth in the plants. Caladiums like sunlight, but not suddenly. If your cultivars were grown during cloudy weather and suddenly are faced with bright light, they may get sunburned. You’ll see brown blotches on the leaves. If this happens, just increase the plant’s shade. Too much water or fertilizer near the plant tubers can also create caladium plant problems. Take care with irrigation and fertilization and you’ll be preventing caladium problems.",
            iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/kzisz7jChzk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            descIframe:"Caladium plants are not typically troubled by insects, but sometimes caladium plant pests nibble their leaves or cell sap. Caterpillars and aphids can be problems. Your best defense against caladium plant pests is vigilance. If you see ragged margins on foliage, look for the creatures and hand pick them off the plants. If the infestation is out of control, use Bacillus thuringiensis, known as “Bt,” that’s made for caterpillar control.",
            title1:"Diseases of Caladium Plants",
            infoTitle1:"Caladium grow from tubers and the diseases of caladium plants are those that attack the tubers. Usually these diseases are caused by fungal pathogens, such as Rhizoctonia and Pythium species. Sometimes, these are present in the dormant tubers.",        }
    ],

}

// ==========================================================================================
// +++++++++++++++++++++++++++++++++++++++++ Pollinator ++++++++++++++++++++++++++++++++
function Caladium   (props){

    const addTitle = ()=>{
        return(
        <>
        <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <span style={{ color: "rgb(87 161 195)" }}>
          &nbsp;{infoItems.caladium [0].mainTitle}
        </span>
      </>
      )
      }

    //  +++++++++++++++++++++++++++ information => top Title ++++++++++++++++++++++++++++
    const caladium = {
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
            document.getElementById("remove2").innerHTML = '<img src="https://www.gardeningknowhow.com/wp-content/uploads/2021/02/elephant-ears-400x300.jpg"/>',
            document.getElementById("remove3").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/kzisz7jChzk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            )
    }

// +++++++++++++++++++++++++++++++++++++ Main Return++++++++++++++++++++++++++=
    return(
        <>
            <div className="container" >
                <div className="mt-5">
                <TopTitle dataTop={caladium} addTitle={addTitle()}/>

                </div>
                <div className="subinfo mb-5 row">
                    {/* start main for apple tree */}
                    <MainContent infoItems={infoItems.caladium[0]} innerImgIframePrint={innerImgIframePrint} />
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



function BulbsOrnamental(params) {
    return(
        <>
            <Caladium />
        </>
    )
}

export default BulbsOrnamental;



