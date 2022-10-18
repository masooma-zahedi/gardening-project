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
    arnica:[
        {
            mainTitle:"Arnica",
            topTitle:"Arnica Plant Care: Learn How To Grow Arnica Herbs",
            auther:"By: Mary H. Dyer, Credentialed Garden Writer",
            describe:"A member of the sunflower family, arnica (Arnica spp.) is a perennial herb that produces yellow-orange, daisy-like blooms in late spring and early summer. Also known as mountain tobacco, leopard’s bane and wolfbane, arnica is highly valued for its herbal qualities. However, before you decide to grow arnica or use the herb medicinally, there are a number of things you should know.",
            srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2015/10/arnica-400x266.jpg",
            questoin:"Arnica Growing Conditions?",
            answerQ:"Arnica is a hardy plant suitable for growing in USDA plant hardiness zones 4 through 9. The plant tolerates nearly any well-drained soil, but generally prefers sandy, slightly alkaline soil. Full sunlight is best, although the arnica benefits from a bit of afternoon shade in hot climates.",
            iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/pe_2-aUxvE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            descIframe:"Planting arnica isn’t difficult. Just sprinkle the seeds lightly on prepared soil in late summer, then cover them lightly with sand or fine soil. Keep the soil slightly moist until the seeds germinate. Be patient; seeds usually sprout in about a month, but germination can take much longer. Thin the seedlings to allow about 12 inches (30 cm.) between each plant.",
            title1:"Arnica Plant Care",
            infoTitle1:"Established arnica plants require very little attention. The primary consideration is regular irrigation, as arnica is not a drought-tolerant plant. Water often enough to keep the soil lightly moist; don’t allow the soil to become bone dry or soggy. As a general rule, water when the top of the soil feels slightly dry. Remove wilted flowers to encourage continued blooming throughout the season. Disclaimer: The contents of this article is for educational and gardening purposes only. Before using ANY herb or plant for medicinal purposes, please consult a physician or a medical herbalist for adviceYou can also start arnica seeds indoors. Plant the seeds in pots and keep them in bright, indirect sunlight where temperatures are maintained at approximately 55 F. (13 C.) For best results, grow the plants indoors for several months before moving them to a permanent outdoor location after all danger of frost has passed in spring.",
        }
    ],
    anise:[
        {
            mainTitle:"Anise",
            topTitle:"Harvesting Anise Seed – When And How To Pick Anise Seeds",
            auther:"By: Liz Baessler",
            describe:"Anise is a polarizing spice. With its strong licorice flavor, some people love it and some people can’t stand it. If you’re someone in the former camp, however, there’s nothing easier or more rewarding than growing and saving your own anise seeds to use year round. Keep reading to learn more about how to pick anise seeds and preserve them.",
            srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2018/12/Green-anise-400x267.jpg",
            questoin:"Be Harvesting Anise Seed?",
            answerQ:"Anise flowers are white and wispy and very similar in appearance to Queen Anne’s lace. It takes them quite a while to develop seeds, and about 100 frost-free days of growth are required before anise seed harvest can take place. In late summer or early autumn, you should notice the flowers developing small, green seeds. Some gardeners insist that you should leave the plants alone until the seeds dry out and turn a muddy brown color. Others hold that you should harvest them when they’re still green and let them ripen and dry indoors",
            iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/JJtv1POw02Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            descIframe:"If the seeds are still green, tie the flowers together into a bundle and hang them upside down in a cool, airy place. Make sure to put a container or a cloth beneath them to catch the seeds, which should ripen and dry out naturally. If you’ve waited until the seeds are already dry, gently shake the flowers upside down over a container, or inside a paper bag. If they’re ripe, the seeds ought to fall right off.",
            title1:"Storing Anise Seeds",
            infoTitle1:"After picking anise seeds, it’s important to store them correctly. Make sure the seeds are completely dry, then place them in an airtight container or jar. Avoid adding any cloth or paper towels, as this will just consolidate moisture and lead to problems. Store your container in a cool, dark place, and enjoy your homegrown anise seeds all year long.",
        }
    ],
    bayTree:[
        {
            mainTitle:"Bay Tree",
            topTitle:"How To Treat Bay Pests : Dealing With Pests On A Bay Tree",
            auther:"By: Bonnie L. Grant, Certified Urban Agriculturist",
            describe:"Bay leaves add their essence and aroma to our soups and stews, but did you ever wonder how to grow a bay leaf tree? The seasoning is so commonplace it is easy to forget that the leaves are from a growing tree. The sweet bay leaf tree (Laurus nobilis) is a 40- to 50-foot (12 to 15 m.) tall tree native to the Mediterranean region. It was once made into a wreath to crown the winners of ancient Greek games. The tree is considered to be one of the oldest cultivated tree species.",
            srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2011/06/sweet-bay-400x300.jpg",
            questoin:"Sweet Bay Leaf Trees",
            answerQ:"Sweet bay leaf tree is frost tender and is only hardy to USDA plant hardiness zone 7. It prefers a full sun exposure and blooms in spring to summer. The leaves are leathery and stiff with a strong mid-rib. Crushing the leaf releases aromatic oil that is the source of the flavoring for foods. Bay tree care is very simple and straightforward but protection must be given to these trees in cold climates.",
            iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/OCq4Jj5ZDKE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            descIframe:"You can grow a bay tree simply as an ornamental plant or as part of your culinary arsenal. Growing a bay tree from cuttings or air layering is the common form of propagation. Cuttings should be taken in late summer and set into a soil-less medium. Air layering requires the gardener to wound the tree and pack it with sphagnum moss until roots form in the wound. The stem or branch can then be cut off and planted. Protect sweet bay trees from heavy winds, which are damaging to the weak wood. Bay trees do not need feeding or supplemental watering in winter. Bay trees can be trained into a topiary or another form with careful management when the plant is young. Place a potted plant in an area where temperatures range from 45 to 64 F. (7 to 17 C.) and where sunlight is from a southern or eastern direction.",
            title1:"Harvest and Use of Sweet Bay Leaf Tree",
            infoTitle1:"Leaves may be harvested at any time but the best flavor can be had from larger, mature leaves. Lay the leaves out to dry and crush them or use them whole but remove before eating. The leaves are a common ingredient in the French seasoning packet, bouquet garni, which is wrapped in cheesecloth and steeped in soups and sauces. It is worth learning how to grow a bay leaf tree for ornamentation and fresh, wholesome seasoning.",
        }
    ]

}

// ==========================================================================================
// +++++++++++++++++++++++++++++++++++++++++ Arnica ++++++++++++++++++++++++++++++++
function Arnica (props){

    const addTitle = ()=>{
        return(
        <>
          <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <Link to="/gardens/edible/herbs" style={{textDecoration:"none"}}>
            <span style={{ color: "rgb(87 161 195)" }}>
            &nbsp;Herbs
            </span>
        </Link>
        {/* //// */}
        <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <span style={{ color: "rgb(87 161 195)" }}>
          &nbsp;{infoItems.arnica[0].mainTitle}
        </span>
      </>
      )
      }

    //  +++++++++++++++++++++++++++ information => top Title ++++++++++++++++++++++++++++
    const arnica = {
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
        document.getElementById("remove2").innerHTML = '<img  src="https://www.gardeningknowhow.com/wp-content/uploads/2011/06/sweet-bay-400x300.jpg" alt="" />',
        document.getElementById("remove3").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/pe_2-aUxvE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        )
}

// +++++++++++++++++++++++++++++++++++++ Main Return++++++++++++++++++++++++++=
    return(
        <>
            <div className="container" >
                <div className="mt-5">
                <TopTitle dataTop={arnica} addTitle={addTitle()}/>

                </div>
                <div className="subinfo mb-5 row">
                    {/* start main for apple tree */}
                    <MainContent infoItems={infoItems.arnica[0]} innerImgIframePrint={innerImgIframePrint} />
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

// ===========================================================================================
// ++++++++++++++++++++++++++++++++++++++++ Anise +++++++++++++++++++++++++++++++++++++++
function Anise (props){

    const addTitle = ()=>{
        return(
        <>
          <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <Link to="/gardens/edible/herbs" style={{textDecoration:"none"}}>
            <span style={{ color: "rgb(87 161 195)" }}>
            &nbsp;Herbs
            </span>
        </Link>
        {/* //// */}
        <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <span style={{ color: "rgb(87 161 195)" }}>
          &nbsp;{infoItems.anise[0].mainTitle}
        </span>
      </>
      )
      }

    //  +++++++++++++++++++++++++++ information => top Title ++++++++++++++++++++++++++++
    const anise = {
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
        document.getElementById("remove2").innerHTML = '<img  src="https://www.gardeningknowhow.com/wp-content/uploads/2018/12/Green-anise-400x267.jpg" alt="" />',
        document.getElementById("remove3").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/JJtv1POw02Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        )
}

// +++++++++++++++++++++++++++++++++++++ Main Return++++++++++++++++++++++++++=
    return(
        <>
            <div className="container" >
                <div className="mt-5">
                <TopTitle dataTop={anise} addTitle={addTitle()}/>

                </div>
                <div className="subinfo mb-5 row">
                    {/* start main for apple tree */}
                    <MainContent infoItems={infoItems.anise[0]} innerImgIframePrint={innerImgIframePrint} />
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

// ===============================================================================================
// ++++++++++++++++++++++++++++++++++++++ Bey Tree +++++++++++++++++++++++++++++++++++=+++++++++
function BayTree (props){

    const addTitle = ()=>{
        return(
        <>
          <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <Link to="/gardens/edible/herbs" style={{textDecoration:"none"}}>
            <span style={{ color: "rgb(87 161 195)" }}>
            &nbsp;Herbs
            </span>
        </Link>
        {/* //// */}
        <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <span style={{ color: "rgb(87 161 195)" }}>
          &nbsp;{infoItems.bayTree[0].mainTitle}
        </span>
      </>
      )
      }

    //  +++++++++++++++++++++++++++ information => top Title ++++++++++++++++++++++++++++
    const bayTree = {
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
        document.getElementById("remove3").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/OCq4Jj5ZDKE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        )
}

// +++++++++++++++++++++++++++++++++++++ Main Return++++++++++++++++++++++++++=
    return(
        <>
            <div className="container" >
                <div className="mt-5">
                <TopTitle dataTop={bayTree} addTitle={addTitle()}/>

                </div>
                <div className="subinfo mb-5 row">
                    {/* start main for apple tree */}
                    <MainContent infoItems={infoItems.bayTree[0]} innerImgIframePrint={innerImgIframePrint} />
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




// ===========================================================================
// ===========================================================================

function SubHerbspages(props) {
    

    return(
        <>
        <Routes>
            <Route exact path="arnica" element={<Arnica />} />
            <Route exact path="anise" element={<Anise />} />
            <Route exact path="bayTree" element={<BayTree />} />
        </Routes>
        </>
    )
    
}
export default SubHerbspages;