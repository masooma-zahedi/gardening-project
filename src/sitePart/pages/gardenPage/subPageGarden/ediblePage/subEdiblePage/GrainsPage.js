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
    riceLeaf:[
        {
            mainTitle:"Rice Leaf",
            topTitle:"Rice Leaf Smut Info – How To Treat Leaf Smut Of Rice Crops",
            auther:"By: Mary Ellen Ellis",
            describe:"Rice may not be a typical backyard garden plant, but if you live somewhere soggy, it can be a great addition. This tasty staple food thrives in wet, marshy conditions and warm climates. Diseases can ransack your rice paddy, though, so be aware of signs of infections like leaf smut of rice and what to do to manage or treat it.",
            srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2019/07/rice-smut-400x263.jpg",
            questoin:"Rice Leaf Smut Information",
            answerQ:"What causes rice leaf smut is a fungus called Entyloma oryzae. Fortunately for your garden, if you see its signs, this infection is usually minor. It is widespread where rice is grown, but leaf smut doesn’t often cause serious damage. However, leaf smut can make your rice vulnerable to other diseases, and ultimately this can cause a yield reduction.",
            iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/EJKvOw5mrTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            descIframe:"The characteristic sign of rice with leaf smut is the presence of small black spots on the leaves. They are slightly raised and angular and give the leaves the appearance of having been sprinkled with ground pepper. Coverage by these spots is most complete on the oldest leaves. The tips of some leaves with the most infection may die.",
            title1:"Management and Prevention for Leaf Smut of Rice",
            infoTitle1:"In most situations, there is no major loss caused by rice leaf smut, so treatment isn’t usually given. However, it can be a good idea to use good general management practices to prevent the infection or keep it in check, and to keep plants healthy overall. As with many other fungal infections, this one is spread by infected plant material in the soil. When healthy leaves contact the water or ground with old diseased leaves, they can become infected. Cleaning up debris at the end of each growing season can prevent spread of leaf smut. Keeping a good nutrient balance is also important, as high nitrogen levels increases the incidence of the disease. Finally, if leaf smut has been a problem in your growing area, consider using rice varieties with some resistance.",
        }
    ],
    khorasanWheat:[
        {
            mainTitle:"Khorasan Wheat",
            topTitle:"What Is Khorasan Wheat: Where Does Khorasan Wheat Grow",
            auther:"By: Amy Grant",
            describe:"Ancient grains have become a modern trend and with good reason. These unprocessed whole grains have a slew of healthful benefits, from reducing the risk for type II diabetes and stroke to helping to maintain healthy weight and blood pressure. One such grain is called khorasan wheat (Triticum turgidum). What is khorasan wheat and where does khorasan wheat grow?",
            srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2017/04/Khorasan-wheat-400x274.jpg",
            questoin:"Khorasan Wheat?",
            answerQ:"Sure you’ve probably heard of quinoa and maybe even farro, but how about Kamut? Kamut, the ancient Egyptian word for ‘wheat,’ is the registered trademark used in marketing products made with khorasan wheat. An ancient relative of durum wheat (Triticum durum), khorasan wheat nutrition contains 20-40% more protein than ordinary wheat grains. Khorasan wheat nutrition also is significantly higher in lipids, amino acids, vitamins, and minerals. It has a rich, buttery flavor and a natural sweetness.",
            iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/fkO3EhG7v3c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            descIframe:"No one knows the exact origin of khorasan wheat. It most likely originates from the Fertile Crescent, the crescent-shaped area from the Persian Gulf through modern southern Iraq, Syria, Lebanon, Jordan, Israel, and northern Egypt. It is also said to date back to the ancient Egyptians or to have originated in Anatolia. Legend has it that Noah brought the grain on his ark, so to some folks it is known as “prophet’s wheat.”",
            title1:"Khorasan Wheat Information",
            infoTitle1:"Still, other khorasan wheat information, whether fact or fiction I can’t say, says that the ancient grain was brought to the United States by a WWII airman. He claims to have found and taken a handful of the grain from a tomb near Dashare, Egypt. He gave 36 kernels of the wheat to a friend who subsequently mailed them to his father, a Montana wheat farmer. The father planted the grains, harvested them, and displayed them as a novelty at the local fair where they were christened “King Tut’s Wheat.”Apparently, the novelty wore off until 1977 when the last jar was obtained by T. Mack Quinn. He and his agricultural scientist and biochemist son researched the grain. They found that this type of grain had indeed originated in the Fertile Crescent area. They decided to begin growing khorasan wheat and coined the trade name “Kamut,” and now we are the beneficiaries of this delightful, crunchy, highly nutrient-rich, ancient grain.",
        }
    ]

}

// ==========================================================================================
// +++++++++++++++++++++++++++++++++++++++++ RiceLeaf ++++++++++++++++++++++++++++++++
function RiceLeaf (props){

    const addTitle = ()=>{
        return(
        <>
          <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <Link to="/gardens/edible/grains" style={{textDecoration:"none"}}>
            <span style={{ color: "rgb(87 161 195)" }}>
            &nbsp;Grains
            </span>
        </Link>
        {/* //// */}
        <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <span style={{ color: "rgb(87 161 195)" }}>
          &nbsp;{infoItems.riceLeaf[0].mainTitle}
        </span>
      </>
      )
      }

    //  +++++++++++++++++++++++++++ information => top Title ++++++++++++++++++++++++++++
    const riceLeaf = {
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
        document.getElementById("remove2").innerHTML = '<img  src="https://www.gardeningknowhow.com/wp-content/uploads/2019/07/rice-smut-400x263.jpg" alt="RiseLeaf" />',
        document.getElementById("remove3").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/EJKvOw5mrTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        )
}

// +++++++++++++++++++++++++++++++++++++ Main Return++++++++++++++++++++++++++=
    return(
        <>
            <div className="container" >
                <div className="mt-5">
                <TopTitle dataTop={riceLeaf} addTitle={addTitle()}/>

                </div>
                <div className="subinfo mb-5 row">
                    {/* start main for apple tree */}
                    <MainContent infoItems={infoItems.riceLeaf[0]} innerImgIframePrint={innerImgIframePrint} />
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


// =========================================================================================
// ++++++++++++++++++++++++++++++++++++++ Khorasan Wheat++++++++++++++++++++++++++++++++
function KhorasanWheat (props){

    const addTitle = ()=>{
        return(
        <>
          <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <Link to="/gardens/edible/grains" style={{textDecoration:"none"}}>
            <span style={{ color: "rgb(87 161 195)" }}>
            &nbsp;Grains
            </span>
        </Link>
        {/* //// */}
        <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <span style={{ color: "rgb(87 161 195)" }}>
          &nbsp;{infoItems.khorasanWheat[0].mainTitle}
        </span>
      </>
      )
      }

    //  +++++++++++++++++++++++++++ information => top Title ++++++++++++++++++++++++++++
    const khorasanWheat = {
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
        document.getElementById("remove2").innerHTML = '<img  src="https://www.gardeningknowhow.com/wp-content/uploads/2017/04/Khorasan-wheat-400x274.jpg" alt="" />',
        document.getElementById("remove3").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/fkO3EhG7v3c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        )
}

// +++++++++++++++++++++++++++++++++++++ Main Return++++++++++++++++++++++++++=
    return(
        <>
            <div className="container" >
                <div className="mt-5">
                <TopTitle dataTop={khorasanWheat} addTitle={addTitle()}/>

                </div>
                <div className="subinfo mb-5 row">
                    {/* start main for apple tree */}
                    <MainContent infoItems={infoItems.khorasanWheat[0]} innerImgIframePrint={innerImgIframePrint} />
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








// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
function GrainsPage(props) {
    

    return(
        <>
        <Routes>
            <Route exact path="riceLeaf" element={<RiceLeaf />} />
            <Route exact path="khorasanWheat" element={<KhorasanWheat />} />
        </Routes>
        </>
    )
    
}
export default GrainsPage;



