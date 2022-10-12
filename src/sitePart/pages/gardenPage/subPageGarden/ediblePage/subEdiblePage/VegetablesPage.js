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
    carrots:[
        {
            mainTitle:"Carrots",
            topTitle:"Companion Planting For Carrots",
            auther:"By: Amy Grant",
            describe:"Companion planting is a method used to obtain a well-balanced garden wherein symbiotic plants are grouped close together. Just as there are good combinations when companion planting, so too there are detrimental plantings. Take carrot companion planting for instance. There are beneficial carrot companion plants and others that react badly in close proximity.",
            srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2022/04/carrot-companions-400x300.jpg",
            questoin:"Carrot Companion Planting?",
            answerQ:"Companion planting creates a more diverse garden with the benefits of sharing nutrients efficiently, repelling pests and attracting beneficial pollinators.A companion planting of carrots and onions for instance is a long standing tradition, wherein the aroma of the onions deters the carrot root fly and the smell of the carrots repels onion fly from the onions. Another option to plant to repel carrot fly is mint. It is thought that the strong scent from this herb and alliums repel the fly, although there is no scientific data and this method may be best combined with creating a barrier to deter the fly.",
            iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/mcW9bQd8YuY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            descIframe:"On the other hand, dill, celery and root parsnips and potato are not considered good companion plants for carrots. Root crops all require high levels of phosphorous, thus planting root crops close together leads to competition for nutrients and a less vigorous yield.  Dill can cross pollinate with carrots leading to less than savory hybrids. Carrots can increase the likelihood that parasitic wasps and lacewings are attracted to dill and parsley.",
            title1:"Carrot Companion Plants",
            infoTitle1:"A carrot and tomato companion planting is especially beneficial. Carrots like things a bit cooler, so growing them beneath the protective leaves of a tomato plant keeps the roots cool. Intermix with lettuce and onion to maximize space. The varying root depths allow a smaller area to utilize water and nutrients efficiently.",
        }
    ],
    beans:[
        {
            mainTitle:"Beans",
            topTitle:"Half-Runner Bean Info – Learn About Planting Half-Runner Beans",
            auther:"By: Laura Miller",
            describe:"Do you like the productivity of pole beans but don’t have room for a large trellis? Consider planting half-runner beans. This type of green bean has a growth habit somewhere between that of a bush bean and a pole bean. ",
            srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2021/06/beans-400x300.jpg",
            questoin:"Half-Runner Bean?",
            answerQ:"Like pole beans, half-runner beans will continue to produce blossoms when young beans are removed from the vines. Typically, bush beans produce green beans for about a two week period and need to be successively planted in order to extend the harvest period.Like bush beans, half-runner beans have a much more compact growth habit. While they do produce runners, the vines only reach lengths of three to five feet (1-1.5 m.) depending upon the variety. Pole beans can send runners as far as 20 feet (6 m.) across the garden. Truly, half-runner beans present the best attributes of both bean types and are the perfect solution for some gardens.",
            iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/l3NS09izxYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            descIframe:"While half-runner bean plants don’t require trellising, they produce better and are certainly easier to pick when given something to climb. Due to their compact size, half-runner beans can be planted alongside a short garden fence or around a garden stake. Half-runners are ideally suited for companion planting among corn stalks or in the traditional three sister planting of corn, beans, and squash. Some gardeners prefer planting half-runner beans in rows like bush beans. Space the rows wider apart than when planting bush beans, leaving a minimum of three feet (1 m.) between rows to allow room for harvesting.",
            title1:"How to Grow Half-Runner Beans",
            infoTitle1:"Sow half-runner beans in the spring after danger of frost has passed and the soil has warmed. Planting beans one inch (2.5 cm.) deep is recommended. When sowing in rows without support, sow seeds two to four inches (5-10 cm.) apart and thin to six inches (15 cm.) to allow for horizontal growth. Sowing a new row every two to three weeks can extend the harvest and provide beans throughout the growing season. Gardeners can expect germination within two weeks. Soaking seeds prior to sowing can reduce germination times. When trellising, put supports in place prior to planting. Place the bean seeds close to the trellis. If you find you’ve planted the seeds too far from the support, simply direct the young seedlings toward the trellis. Hook a leaf onto the support or gently wrap the runner around the pole. Water beans when planting and when the soil begins to dry. Green beans prefer a moist but not soggy growing medium. Mulch to control weeds and periodically use a low nitrogen fertilizer, particularly if the beans are slow to flower and produce. Popular heirloom varieties include Mountaineer White and State half-runner.",
        }
    ]

}

// ==========================================================================================
// +++++++++++++++++++++++++++++++++++++++++ Carrots ++++++++++++++++++++++++++++++++
function Carrots (props){

    const addTitle = ()=>{
        return(
        <>
          <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <Link to="/gardens/edible/vegetables" style={{textDecoration:"none"}}>
            <span style={{ color: "rgb(87 161 195)" }}>
            &nbsp;Vegetable
            </span>
        </Link>
        {/* //// */}
        <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <span style={{ color: "rgb(87 161 195)" }}>
          &nbsp;{infoItems.carrots[0].mainTitle}
        </span>
      </>
      )
      }

    //  +++++++++++++++++++++++++++ information => top Title ++++++++++++++++++++++++++++
    const carrots = {
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
            document.getElementById("remove2").innerHTML = '<img  src="https://www.gardeningknowhow.com/wp-content/uploads/2022/04/carrot-companions-400x300.jpg" alt="Carrots" />',
            document.getElementById("remove3").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/mcW9bQd8YuY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            )
    }

// +++++++++++++++++++++++++++++++++++++ Main Return++++++++++++++++++++++++++=
    return(
        <>
            <div className="container" >
                <div className="mt-5">
                <TopTitle dataTop={carrots} addTitle={addTitle()}/>

                </div>
                <div className="subinfo mb-5 row">
                    {/* start main for apple tree */}
                    <MainContent infoItems={infoItems.carrots[0]} innerImgIframePrint={innerImgIframePrint} />
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


// ==========================================================================================
// +++++++++++++++++++++++++++++++++++++++++ Beans ++++++++++++++++++++++++++++++++
function Beans (props){

    const addTitle = ()=>{
        return(
        <>
          <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <Link to="/gardens/edible/vegetables" style={{textDecoration:"none"}}>
            <span style={{ color: "rgb(87 161 195)" }}>
            &nbsp;Vegetable
            </span>
        </Link>
        {/* //// */}
        <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <span style={{ color: "rgb(87 161 195)" }}>
          &nbsp;{infoItems.beans[0].mainTitle}
        </span>
      </>
      )
      }

    //  +++++++++++++++++++++++++++ information => top Title ++++++++++++++++++++++++++++
    const beans = {
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
            document.getElementById("remove2").innerHTML = '<img  src="https://www.gardeningknowhow.com/wp-content/uploads/2021/06/beans-400x300.jpg" alt="beans" />',
            document.getElementById("remove3").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/l3NS09izxYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            )
    }

// +++++++++++++++++++++++++++++++++++++ Main Return++++++++++++++++++++++++++=
    return(
        <>
            <div className="container" >
                <div className="mt-5">
                <TopTitle dataTop={beans} addTitle={addTitle()}/>

                </div>
                <div className="subinfo mb-5 row">
                    {/* start main for apple tree */}
                    <MainContent infoItems={infoItems.beans[0]} innerImgIframePrint={innerImgIframePrint} />
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




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=





// =============================================================================================


// function Carrots (){
//     return(
//         <>
//             <h1>Hi masooma Carrots(get started)</h1>        
//         </>
//     )
// }
// function Beans (){
//     return(
//         <>
//             <h1>Hi masooma Beans</h1>        
//         </>
//     )
// }










function SubVagetablePages(props) {
    

    return(
        <>
        <Routes>
            <Route exact path="carrots" element={<Carrots />} />
            <Route exact path="beans" element={<Beans />} />
        </Routes>
        </>
    )
    
}
export default SubVagetablePages;