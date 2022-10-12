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
    almondOil:[
        {
            mainTitle:"Almondoil",
            topTitle:"Almond Oil Information: Tips For Using Almond Oil",
            auther:"By: Amy Grant",
            describe:"Of late you may have noticed the wide variety of oils available not only for cooking but for cosmetic use as well. Almond oil is one such oil, and no it’s nothing new. Almonds were the hottest commodity on the “Silk Road” between Asia and the Mediterranean, and of choice for practitioners of Ayurveda for more than 5,000 years. What is almond oil and how do you use it? The following article contains almond oil information about the uses of almond oil.",
            srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2018/04/almond-oil-400x277.jpg",
            questoin:"Almond Oil?",
            answerQ:"Most of us are aware of the health benefits of eating sweet almonds. Almond oil has even more health benefits than crunching on the tasty nut. Almond oil is simply the essential oil pressed out from the nut. This pure oil has been found to be rich in Vitamin E, monounsaturated fatty acids, proteins, potassium, and zinc, making it not only heart healthy but good for our skin and hair.",
            iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/ls_RH4Gg6Uc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            descIframe:"Almonds are not actually nuts, they are drupes. There are both sweet and bitter almonds. Bitter almonds are usually not eaten since they contain hydrogen cyanide, a toxin. They are, however, pressed into bitter almond oil. Usually, though, almond oil is derived from sweet almonds, the kind that are good to snack on.Native to the Mediterranean and Middle East, the largest producer of almonds in the United States is California. Today, 75% of the world’s almond supply is produced in California’s Central Valley. There will be a subtle difference in almond oil depending on the variety and location where the almond tree is grown. People with nut allergies should avoid using almond oil, but the rest of us are wondering how to use almond.",
            title1:"How to Use Almond Oil",
            infoTitle1:"There are many almond oil uses. Almond oil can be used to cook with. It is chock full of healthy fats that actually help to reduce cholesterol. Cooking with almond oil is certainly not the only way to use it. For centuries, almond oil has been used medicinally. As mentioned, Ayurvedic practitioners have been using the oil for thousands of years as massage oil. The oil has been used to treat vascular problems such as spider and varicose veins as well as to treat liver ailments.Almond oil can be used as a laxative and, in fact, is milder than most laxatives, including castor oil. It is said to generally boost the immune system. The oil is also an anti-inflammatory and analgesic. Almond oil has been found to possess mild antioxidant properties and can be used topically to improve the skin. It is an excellent emollient as well and can be used to treat dry skin. The oil improves the texture and moisture absorption of hair as well as treating dandruff. It also treats chapped lips and purportedly can heal scars and stretch marks. One caveat regarding the use of this oil on skin or hair is that it’s oily and can cause clogged pores or skin breakouts, so a little goes a long way.",
        }
    ],
    blackWalnut:[
        {
            mainTitle:"Black Walnut",
            topTitle:"Harvesting Black Walnut Trees: When Do Black Walnuts Fall",
            auther:"By: Bonnie L. Grant, Certified Urban Agriculturist",
            describe:"Black walnuts are one of the most flavorful nuts for snacking, baking, and cooking. These hard-shelled fruits have a sweet, delicate walnut flavor and are one of the most expensive nuts on the market. If you have a chance at harvesting black walnut trees, take it! You’ll enjoy the experience and gather a batch of delicious nuts that will store for up to two years. Picking black walnuts straight from the source is easier than you might think. Black walnuts that are ripe will almost literally fall in your lap. All you need is a tarp, some containers, and knowledge of when black walnuts fall.",
            srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2015/12/black-walnut-harvest-400x266.jpg",
            questoin:"Black Walnuts Fall?",
            answerQ:"uglans nigra, or black walnut, is a very hardy species of nut tree. The plant sets fruit in summer but the nutmeat isn’t ready until fall. This is the time of year you might want a hard hat if you are walking under a black walnut tree. Some of the hulled nuts can be nearly as big as a fist and pack quite a wallop when dropped from upper branches.Autumn is the time for black walnut harvesting. In the tree’s native region of eastern North America, fruits drop from September until October. Dropped hulls usually mean ripe fruits, but you should check the appearance to ensure ripeness. The unripe fruit is green while the fully ripe fruit is yellow-ish verging on tan. The hulls have a potent stain, so it is advised to wear gloves when harvesting the fruit. The stain will leave a permanent dark brown on fingers that aren’t protected. Don’t bother picking up fruits that are completely black. These are probably too far gone and the nutmeat may be rotten.",
            iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/6t1EoTlvd7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            descIframe:"Wear clothing that you don’t care about and gloves when harvesting black walnut trees. The stain will get on anything and won’t come out. The messiest time when black walnut harvesting is during hulling. Nuts need to be hulled before being washed, dried, and stored. Removing the hulls can be difficult. Some people swear by driving over the hulls to crack them off, but this can send pieces of shell and nut flying everywhere. Commercial growers have a machine that separates the hull from the shell, but home operations usually jury rig a slurry with water and some pebbles to soften the hulls and then remove them with a hammer. Use heavy gloves and hit the ends of the nut to crack the hull off. Safety glasses are a good idea when hulling black walnuts.",
            title1:"Storing Black Walnuts",
            infoTitle1:"Black walnuts can be stored for up to two years. After hulling, wash the shells of the nuts. This is best done outdoors, as even the shells have staining properties. Sort through the nuts and discard any with signs of insect damage or rot.Lay the nuts out in a single layer and allow them to dry for 2 to 3 weeks. This ensures that the nuts are cured and dried nuts will keep longer. Store unshelled nuts in cloth bags or mesh in a cool, dry location. For longer preservation, shell the nuts and freeze the nutmeats in freezer bags or containers. The shells are harder than even the hulls, so a good step is to soak the shells in hot water for 24 hours before attempting shelling. This will soften the shells and make them easy to crack. Shelled, frozen nuts will keep for up to 2 years.",
        }
    ],
    pineNut:[
        {
            mainTitle:"Pine Nutt",
            topTitle:"Where Do Pine Nuts Come From: Learn About Growing Pine Nut Trees",
            auther:"By: Bonnie L. Grant, Certified Urban Agriculturist",
            describe:"Pine nuts are a staple in many indigenous cuisines and have migrated to the United States as a part of our family table. Where do pine nuts come from? The traditional pine nut is the seed of stone pines, native to the Old Country and not widely grown in North America. These tasty seeds are harvested from the tree’s cones and are just one of 20 species of edible pine nuts. There are several pine trees that will produce reasonably sized seeds for harvesting that will thrive in North American regions. Once you know how to grow pine nuts, you can store seeds for up to a year for your family’s use.",
            srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2015/12/pine-nuts-400x267.jpg",
            questoin:"Pine Nuts?",
            answerQ:"Toasted pine nuts in salads, pastas, pesto, and other dishes add a nutty crunch and earthy flavor to any recipe. Pine nut harvesting is an arduous process and adds to the hefty price tag fetched by most producers of the seeds. As a backyard specimen, pine nut trees are strong, attractive, long-lived plants that add architectural appeal. There are several American pine trees that are useful as nut trees, any of which can be purchased as 2- or 3-year plants or bigger, or may be sown from fresh seed. Butterfly Garden Course",
            iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/uEvZPtxHlzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            descIframe:"Pinus pinea is the specimen of pine from which most commercial nuts are harvested. When growing pine nuts, choose a variety of pine with large enough seeds to easily harvest and a tree that is adaptable to your region. Fortunately, most pine trees are very tolerant of a wide range of soils and climates. Most are hardy to United States Department of Agriculture zones 1 to 10, although the exact zone will depend upon the variety. Pine nut trees may range from 200-foot-tall (61 m.) monsters to more manageable 10-foot-tall (3 m.) bushes.",
            title1:"Pine Nut Harvesting",
            infoTitle1:"When trees are producing large cones, it’s time to harvest. Depending upon the height of your tree, this may pose the biggest problem in pine nut production. Use a hook or rent a commercial tree shaker to dislodge cones. You can also pick up mature cones from the ground, but be quick about it! Numerous animal and bird species also find the seeds delicious and there will be fierce competition for the nuts. Once you have cones, you need to cure and extract them. The easiest way to do this is to place the cones in a burlap bag in a warm, dry area. When cones are completely dry, give the bag a good whack to break open the cones and release the seed. Now you need to pick them out of the chaff and allow the seeds to dry. If you think you are done once the seed is dry, think again. Pine nuts have a hull, or shell, surrounding the tender meat. Use a small nutcracker to remove the hull.",
        }
    ]

}

// ==========================================================================================
// +++++++++++++++++++++++++++++++++++++++++ Almond Oil ++++++++++++++++++++++++++++++++
function AlmondOil (props){

    const addTitle = ()=>{
        return(
        <>
          <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <Link to="/gardens/edible/nutTree" style={{textDecoration:"none"}}>
            <span style={{ color: "rgb(87 161 195)" }}>
            &nbsp;Nut Tree
            </span>
        </Link>
        {/* //// */}
        <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <span style={{ color: "rgb(87 161 195)" }}>
          &nbsp;{infoItems.almondOil[0].mainTitle}
        </span>
      </>
      )
      }

    //  +++++++++++++++++++++++++++ information => top Title ++++++++++++++++++++++++++++
    const almondOil = {
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
        document.getElementById("remove2").innerHTML = '<img  src="https://www.gardeningknowhow.com/wp-content/uploads/2018/04/almond-oil-400x277.jpg" alt="almondOil" />',
        document.getElementById("remove3").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/ls_RH4Gg6Uc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        )
}

// +++++++++++++++++++++++++++++++++++++ Main Return++++++++++++++++++++++++++=
    return(
        <>
            <div className="container" >
                <div className="mt-5">
                <TopTitle dataTop={almondOil} addTitle={addTitle()}/>

                </div>
                <div className="subinfo mb-5 row">
                    {/* start main for apple tree */}
                    <MainContent infoItems={infoItems.almondOil[0]} innerImgIframePrint={innerImgIframePrint} />
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
// ++++++++++++++++++++++++++++++++++++++ black Walnut      ++++++++++++++++++++++++++++++++
function BlackWalnut (props){

    const addTitle = ()=>{
        return(
        <>
          <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <Link to="/gardens/edible/nutTree" style={{textDecoration:"none"}}>
            <span style={{ color: "rgb(87 161 195)" }}>
            &nbsp;Nut Tree
            </span>
        </Link>
        {/* //// */}
        <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <span style={{ color: "rgb(87 161 195)" }}>
          &nbsp;{infoItems.blackWalnut[0].mainTitle}
        </span>
      </>
      )
      }

    //  +++++++++++++++++++++++++++ information => top Title ++++++++++++++++++++++++++++
    const blackWalnut = {
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
        document.getElementById("remove2").innerHTML = '<img  src="https://www.gardeningknowhow.com/wp-content/uploads/2015/12/black-walnut-harvest-400x266.jpg" alt="almondOil" />',
        document.getElementById("remove3").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/6t1EoTlvd7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        )
}

// +++++++++++++++++++++++++++++++++++++ Main Return++++++++++++++++++++++++++=
    return(
        <>
            <div className="container" >
                <div className="mt-5">
                <TopTitle dataTop={blackWalnut} addTitle={addTitle()}/>

                </div>
                <div className="subinfo mb-5 row">
                    {/* start main for apple tree */}
                    <MainContent infoItems={infoItems.blackWalnut[0]} innerImgIframePrint={innerImgIframePrint} />
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

// ============================================================================================
// +++++++++++++++++++++++++++++++++++++++ Pine Nuts+++++++++++++++++++++++++++++++++++++++
function PineNut (props){

    const addTitle = ()=>{
        return(
        <>
          <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <Link to="/gardens/edible/nutTree" style={{textDecoration:"none"}}>
            <span style={{ color: "rgb(87 161 195)" }}>
            &nbsp;Nut Tree
            </span>
        </Link>
        {/* //// */}
        <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <span style={{ color: "rgb(87 161 195)" }}>
          &nbsp;{infoItems.pineNut[0].mainTitle}
        </span>
      </>
      )
      }

    //  +++++++++++++++++++++++++++ information => top Title ++++++++++++++++++++++++++++
    const pineNut = {
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
        document.getElementById("remove2").innerHTML = '<img  src="https://www.gardeningknowhow.com/wp-content/uploads/2015/12/pine-nuts-400x267.jpg" alt="pineNut" />',
        document.getElementById("remove3").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/uEvZPtxHlzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        )
}

// +++++++++++++++++++++++++++++++++++++ Main Return++++++++++++++++++++++++++=
    return(
        <>
            <div className="container" >
                <div className="mt-5">
                <TopTitle dataTop={pineNut} addTitle={addTitle()}/>

                </div>
                <div className="subinfo mb-5 row">
                    {/* start main for apple tree */}
                    <MainContent infoItems={infoItems.pineNut[0]} innerImgIframePrint={innerImgIframePrint} />
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

// =============================================================================================

function SubNutspages(props) {
    

    return(
        <>
        <Routes>
            <Route exact path="almondOil" element={<AlmondOil />} />
            <Route exact path="blackWalnut" element={<BlackWalnut />} />
            <Route exact path="pineNut" element={<PineNut />} />
        </Routes>
        </>
    )
    
}
export default SubNutspages;