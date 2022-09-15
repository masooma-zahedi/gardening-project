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
    fungi :[
        {
            mainTitle:"FungusOrnamental",
            topTitle:"Environmental Benefits Of Fungi: Are Mushrooms Good For The Environment ",
            auther:"By: Mary Ellen Ellis",
            describe:"Are mushrooms good for the environment? Fungi are often associated with unwanted growth or even health problems. Molds, fungal infections, and poisonous mushrooms are certainly sinister. However, mushrooms and fungi have a place in the ecosystem and many types have important environmental benefits.",
            srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2020/07/mushrooms-400x300.jpg",
            questoin:"Environmental Benefits of Fungi ?",
            answerQ:"Fungi and mushroom benefits in the environment are huge. Without them, dead plant and animal matter would pile up and decay much more slowly. Fungi are essential for processing dead material, healthy plant growth, nutrition, medicine, and for the entire rise of animal life on earth as well as human civilizations.",
            iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/8kxoEQy57Bw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            descIframe:"Saprophytes: These are the fungi that recycle nutrients. They break organic matter down to create rich soil in which plants thrive. Bacteria and insects help the process, but the saprophyte fungi are responsible for most of the nutrient cycling that supports life on earth. Mycorrhizae: This type of fungi is also important for plant growth. They produce long, thin filaments in the soil that connect roots to create a symbiotic network. They take nutrients from plants, like trees, but also provide water and nutrients to the roots. Plants with mycorrhizae fungi thrive compared to those without them. Edible and Medicinal fungi: Many species of fungi are edible and provide essential nutrients for many animals. Caribou, for instance, eat lichen in the winter when plant life is not available. Without that fungi, they couldn’t survive. For humans, many edible mushrooms provide nutrients and health benefits. Some even have medicinal properties and can boost immunity, guard against inflammation, and treat infections. Penicillin came from mold after all.",
            title1:"Environmentally Friendly Fungi ",
            infoTitle1:"Fungal growth offers a cheap, simple and environmentally friendly way to bind agricultural byproducts (such as rice hulls, wheat straw, sugarcane bagasse and molasses) into biodegradable and carbon-neutral foams.Fungal foams are becoming increasingly popular as sustainable packaging materials; IKEA is one company that has indicated a commitment to using them.Fungal foams can also be used in the construction industry for insulation, flooring and panelling. Research has revealed them to be strong competitors against commercial materials in terms of having effective sound and heat insulation properties.",
        }
    ],

}

// ==========================================================================================
// +++++++++++++++++++++++++++++++++++++++++ Pollinator ++++++++++++++++++++++++++++++++
function Fungi (props){

    const addTitle = ()=>{
        return(
        <>
        <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <span style={{ color: "rgb(87 161 195)" }}>
          &nbsp;{infoItems.fungi [0].mainTitle}
        </span>
      </>
      )
      }

    //  +++++++++++++++++++++++++++ information => top Title ++++++++++++++++++++++++++++
    const fungi  = {
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
            document.getElementById("remove2").innerHTML = '<img src="https://www.gardeningknowhow.com/wp-content/uploads/2020/07/mushrooms-400x300.jpg"/>',
            document.getElementById("remove3").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/8kxoEQy57Bw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            )
    }

// +++++++++++++++++++++++++++++++++++++ Main Return++++++++++++++++++++++++++=
    return(
        <>
            <div className="container" >
                <div className="mt-5">
                <TopTitle dataTop={fungi } addTitle={addTitle()}/>

                </div>
                <div className="subinfo mb-5 row">
                    {/* start main for apple tree */}
                    <MainContent infoItems={infoItems.fungi [0]} innerImgIframePrint={innerImgIframePrint} />
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



function FungusOrnamental(params) {
    return(
        <>
            <Fungi />
        </>
    )
}

export default FungusOrnamental;






















