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
    shrubs:[
        {
            mainTitle:"Gardening Project",
            topTitle:"Grow Your Own Homemade Root Beer",
            auther:"By: Bonnie L. Grant, Certified Urban Agriculturist",
            describe:"Root beer is one of those quaffs that tingles the taste buds and pairs magically with a scoop of ice cream. It is a combination of roots, herbs, and spices brewed to perfection. Homemade root beer is a possibility with a little preparation. The ingredients may be grown in certain climates or outsourced. The key is knowing how to make root beer in order to produce your own home brew.  What is root beer? It is a very old brew that became popular in the late 1800’s, and even more so as a substitute for real beer during the prohibition era. Originally a tea, by the time the temperance period came about, carbonation became part of its makeup. Root beer ingredients vary slightly, but usually include the roots of the sassafras tree, birch bark, juniper berry extract, ginger, and licorice. The result is a complex yet satisfying flavor that invigorates the palate.",
            srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2022/03/root-beer-400x300.jpg",
            questoin:"What is Root Beer?",
            answerQ:"Root teas enjoyed a prominent place in many societies for centuries. In America, root tea was a combination of several tree components with seasonings for flavor. Sassafras root beer was a brew called Sarsaparilla and an old time favorite. Originally valued as a healthy tonic, the intense flavor made it an everyday thirst quencher. Sassafras root beer was actually distilled from the roots of the sassafras tree, which later was removed from the concoction due to health concerns. A similar drink brewed from the Sarsaparilla vine was more common. Cut to the 1800’s and other seasonings were added, as well as a fermentation process to give the beverage its carbonation.  0 seconds of 1 minute, 53 secondsVolume 0%  ",
            iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/Xs-egNZ1kTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            descIframe:"Root beer ingredients today differ a great deal from the original recipes. You may still make homemade root beer which will be closer to the first concoctions. Originally the recipe called for birch bark, sassafras root, ginger, licorice, and possibly dandelion root for its slight bitter notes. Today our purchased root beer is extracts and chemical compounds designed to impart the distinctive flavor. Homemade brews can source many of the components online or in specialty shops. Better yet, you can grow your own herbs and spices and harvest your own roots. ",
            title1:"How to Make Root Beer",
            infoTitle1:"Sassafras root has compounds that may contribute to liver damage and is discouraged. The Sarsaparilla plant grows well in warm climates with little to no freezing, though. It is a vigorous vine whose roots impart the classic flavor necessary for a root beer. You can also substitute wintergreen. Additionally, the recipe calls for licorice and dandelion roots, as well as ginger. Smash and simmer the roots in water that just covers them for half an hour. Strain the mixture and sweeten it to your taste with sugar, agave syrup, or other sweeteners. Then add a starter culture to the mix and bottle it. This will begin fermentation and produce the carbonation. Ferment in a warm location until bubbles are observed and then it is ready to drink. ",
        }
    ],

}

// ==========================================================================================
// +++++++++++++++++++++++++++++++++++++++++ Pollinator ++++++++++++++++++++++++++++++++
function ProjectG  (props){

    const addTitle = ()=>{
        return(
        <>
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



function ProjectsGardening(params) {
    return(
        <>
            <ProjectG/>
        </>
    )
}

export default ProjectsGardening;