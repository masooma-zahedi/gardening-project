import React from 'react';
import { nanoid } from 'nanoid';
import BottomPartSubTab from '../../../../component/subTabMenu/BottomPartSubTab';
import {TopTitle} from '../../../../component/subTabMenu/TopPartSubTab';
// =============
import { Link, Route, Routes} from "react-router-dom";
import { RightSidePart } from '../../../../component/RightSidePart';
import {Section3, Section4} from '../../../../component/SectionsBottomPage';
import MainContent from '../../../../component/MainContent';




    // ******************************** Data********************

    const MainLinfeStyle = ()=>{
        const addTitle = ()=>{
            return(
            <>
              <span className="" style={{ color: "rgb(51 51 51)" }}>
              &nbsp;›
            </span>
            <span style={{ color: "rgb(87 161 195)" }}>
              &nbsp;Life Style
            </span>
          </>
          )
          }
      

        const lifestyle = {
            topInfo: [
            {
              title1: "Gardens",
              linkTo1:"/gardens",
              title2: "How To",
              linkTo2:"/gardens/howTo"
            },
          ],
          subInfo: [
            {
              getStarted: [
                {
                  title:
                    "10 Psychological Benefits Of Plants And Gardening ",
                  linkTo: "benefitPlant",
                  src: "https://www.gardeningknowhow.com/wp-content/uploads/2022/04/Psychological-benefits-400x300.jpg",
                  alt: "Apple Tree  ",
                  author: "Laura Miller",
                  desc:"Take two houseplants and call me in the morning! Although studies correlating the mental health benefits of gardening have been around for decades, it’s still something of a new concept. Read on for more.",
                },
              ],
              afterStart: [
                {
                  id: nanoid(6),
                  title:
                    "What Is A Gazebo – Gazebo Landscaping Ideas",
                  linkTo: "gazebo",
                  src: "https://www.gardeningknowhow.com/wp-content/uploads/2021/09/Gazebo-400x300.jpg",
                  alt: "Gazebo",
                  author:
                    "Teo Spengler",
                  desc: "A gazebo can be a focal point for the garden, offering shade, a seating area and shelter from the elements. Fore more info on gazebo landscaping, read on.",
                },
              ],
            },
          ],
        };
          return(
            <>  
                <div className='container'>
                    <div
                        className="adsTop d-flex justify-content-center flex-column"
                        style={{ height: 250 }}
                    >
                        <div className="p-4 bg-warning">
                            <h2 className="text-white">this is a ads</h2> Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Quaerat eius, dolor velit
                            deleniti voluptas quibusdam vitae perspiciatis temporibus illum in.
                        </div>
                    </div>
                    <TopTitle dataTop={lifestyle} addTitle={addTitle()}/>
                    <BottomPartSubTab dataBottom={lifestyle}  />
                    <h1 id='benefitPlant'>hi benefit page</h1>
                </div> 
            </>
        )
    }


//  +++++++++++++++++++++++++++++++++++++++++++++++++ BenefitPlant Page && Gazebo page +++++++++++++++++++++++++

const infoItems = {
  benefitPlant:[
      {
          mainTitle:"Psychological Benefits",
          topTitle:"10 Psychological Benefits Of Plants And Gardening",
          auther:"By: Laura Miller",
          describe:"Take two houseplants and call me in the morning! Although studies correlating the mental health benefits of gardening have been around for decades, it’s still something of a new concept. Read on for more. There is no doubt the industrial revolution led to widespread urbanization. Workers moving from farms to cities were met with buildings and paved roads in place of nature. In modern times, large urban areas contain more concrete than trees and grass. In fact, other than water, we use more concrete than any other substance. ",
          srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2022/04/Psychological-benefits-400x300.jpg",
          questoin:"Health Benefits of Indoor Plants ?",
          answerQ:"There is no doubt the industrial revolution led to widespread urbanization. Workers moving from farms to cities were met with buildings and paved roads in place of nature. In modern times, large urban areas contain more concrete than trees and grass. In fact, other than water, we use more concrete than any other substance. ",
          iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/8at9udGspPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
          descIframe:"Currently, more than 80% of Americans live in an urbanized setting. As other countries become more industrialized, the worldwide number of urbanites is expected to rise by the year 2050. Never has it been more important to understand and utilize the psychological benefits of plants.",
          title1:"Psychological Benefits of Plants",
          infoTitle1:"Study after study has demonstrated the benefits of plants in the work, school, hospital and the home environments. Simply adding green space to these environments can improve both mental and physical health. Working in a garden can improve muscle tone and being around nature and plants can lower the heart rate and blood pressure.",
      }
  ],
  gazebo:[
    {
      mainTitle:"Gazebo",
      topTitle:"What Is A Gazebo – Gazebo Landscaping Ideas",
      auther:"By: Teo Spengler",
      describe:"What are gazebos for? A gazebo can be a focal point for the garden, offering shade, a seating area and shelter from the elements. If you are interested in learning more about gazebo landscaping, read on. So what is a gazebo? A gazebo is a roofed open structure in the garden, often octagonal in shape, with ?posts in each of the eight corners. The typical classic gazebo is topped by a shingled roof with a small cupola on top and features built-in seating inside the sheltered area.",
      srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2021/09/Gazebo-400x300.jpg",
      questoin:"Gazebo For?",
      answerQ:"Gazebos are usually constructed of wood or metal and offer an enclosure where those relaxing in the garden can protect themselves from the elements. Today’s more casual gazebos might have hammocks strung up inside, while more formal ones may shelter a dining table and chairs. They tend to look romantic and are popular spots for proposing marriage or even staging a small wedding. In yesteryear, mall towns built gazebos in the city park that served as bandstands on weekends.  The term is said to be a “joke” word combining the verb “gaze” and the Latin suffix “ebo” meaning “I shall.” In short, a gazebo is a quiet spot to sit in the garden and gaze at the surrounding beauty.",
      iframe:<iframe width="560" height="315" src="https://www.youtube.com/embed/ZBARV7w12fc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      descIframe:"If you are considering installing a gazebo in the garden, take your time deciding on the size, placement, and style. Figure out what activities you intend to do in the gazebo, then size it accordingly. A well-designed gazebo will go well with the style of the home and garden. It will provide a focal point without taking over the backyard.",
      title1:"Gazebo Landscaping",
      infoTitle1:"Experts suggest that you should place the gazebo in an accessible spot with an attractive view of the house. The gazebo area should itself make a delightful vista point from the house.  Gazebos can be relatively inexpensive, but it’s equally possible to spend big bucks to make your dream gazebo a reality. Those with small backyards or small budgets should consider a portable gazebo with a fabric roof held up by metal poles, with open sides and a no floor. Permanent gazebos are fixed on a cement foundation and built with posts, beams, rafters and a roof. They are intended to be a long-term garden feature.",
  }
],

}


    function BenefitPlant (props){

      const addTitle = ()=>{
          return(
          <>
            <span className="" style={{ color: "rgb(51 51 51)" }}>
            &nbsp;›
          </span>
          <Link to="/gardens/howTo/subHowToPage/mainLifeStyle" style={{textDecoration:"none"}}>
              <span style={{ color: "rgb(87 161 195)" }}>
              &nbsp;LifeStyle
              </span>
          </Link>
          {/* //// */}
          <span className="" style={{ color: "rgb(51 51 51)" }}>
            &nbsp;›
          </span>
          <span style={{ color: "rgb(87 161 195)" }}>
            &nbsp;{infoItems.benefitPlant[0].mainTitle}
          </span>
        </>
        )
        }
  
      //  +++++++++++++++++++++++++++ information => top Title ++++++++++++++++++++++++++++
      const benefitPlant = {
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
              document.getElementById("remove2").innerHTML = '<img  src="https://www.gardeningknowhow.com/wp-content/uploads/2022/04/Psychological-benefits-400x300.jpg" alt="" />',
              document.getElementById("remove3").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/fkO3EhG7v3c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
              )
      }
  
  // +++++++++++++++++++++++++++++++++++++ Main Return++++++++++++++++++++++++++=
      return(
          <>
              <div className="container" >
                  <div className="mt-5">
                  <TopTitle dataTop={benefitPlant} addTitle={addTitle()}/>
  
                  </div>
                  <div className="subinfo mb-5 row">
                      {/* start main for apple tree */}
                      <MainContent infoItems={infoItems.benefitPlant[0]} innerImgIframePrint={innerImgIframePrint} />
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






  // +++++++++++++++++++++++++++++++= Gazebo Page +++++++++++++++++++++=======
  
    const Gazebo = ()=>{
      const addTitle = ()=>{
        return(
        <>
          <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <Link to="/gardens/howTo/subHowToPage/mainLifeStyle" style={{textDecoration:"none"}}>
            <span style={{ color: "rgb(87 161 195)" }}>
            &nbsp;LifeStyle
            </span>
        </Link>
        {/* //// */}
        <span className="" style={{ color: "rgb(51 51 51)" }}>
          &nbsp;›
        </span>
        <span style={{ color: "rgb(87 161 195)" }}>
          &nbsp;{infoItems.gazebo[0].mainTitle}
        </span>
      </>
      )
      }

    //  +++++++++++++++++++++++++++ information => top Title ++++++++++++++++++++++++++++
    const gazebo = {
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
            document.getElementById("remove2").innerHTML = '<img  src="https://www.gardeningknowhow.com/wp-content/uploads/2022/04/Psychological-benefits-400x300.jpg" alt="" />',
            document.getElementById("remove3").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/fkO3EhG7v3c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            )
    }

// +++++++++++++++++++++++++++++++++++++ Main Return++++++++++++++++++++++++++=
    return(
        <>
            <div className="container" >
                <div className="mt-5">
                <TopTitle dataTop={gazebo} addTitle={addTitle()}/>

                </div>
                <div className="subinfo mb-5 row">
                    {/* start main for apple tree */}
                    <MainContent infoItems={infoItems.gazebo[0]} innerImgIframePrint={innerImgIframePrint} />
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

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function LifestyleGardening(params) {
    return (
        <>
        <Routes>
          <Route path='/' element={<MainLinfeStyle/>}/>
          <Route path='/benefitPlant' element={<BenefitPlant/>}/>
          <Route path='/gazebo' element={<Gazebo/>}/>
        </Routes>
        </>
    );
}


// ========================================================================


export default LifestyleGardening;