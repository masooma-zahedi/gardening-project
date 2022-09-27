import { nanoid } from "nanoid";
import React from "react";
import TabMenuLink from "../../component/subTabMenu/TabMenuLink";
import { Route, Routes} from "react-router-dom";
import { RightSidePart } from '../../component/RightSidePart';
// import { TopTitle } from '../../component/subTabMenu/TopPartSubTab';
// import {Section3, Section4} from '../../component/SectionsBottomPage';
import MainContent from '../../component/MainContent';
import Carousel from 'react-bootstrap/Carousel';




function  Special() {

  const Specialdata = {
    topInfo: [
      {
        title1: "Gardens",
        linkTo1:"/gardens",
        title2: "Special Gardens",
        src: "https://www.gardeningknowhow.com/wp-content/uploads/2012/11/special-gardens-150x150.jpg",
        info: "What are special gardens? These are gardens with something specific in mind. Here you will find tips for the special needs gardener, gardening with children and those just starting out. In addition, you will learn more about growing specific types of gardens like xeriscape designs, color themes, seaside gardens, organic gardening, urban gardening and using containers in the garden. From how to design them to their overall care, these special gardens have something for everyone. So, if you’re looking for something specific, it’s likely here.",
      },
    ],
    Links: [
      {
        id: nanoid(6),
        title: "Accessible Gardens",
        linkTo: "subSpecialPage/accessible",
      },
      {
        id: nanoid(6),
        title: "Children's Gardens",
        linkTo: "subSpecialPage/childrenG",
      },
      {
        id: nanoid(6),
        title: "Container Gardens",
        linkTo: "subSpecialPage/container",
      },
      {
        id: nanoid(6),
        title: "Garden Spaces",
        linkTo: "subSpecialPage/spaces",
      },
    ],
  };

  // ********************************************** data for parts (links)***************************

  const carouselChild = ()=>{    
    return(
      <>
        <Carousel style={{width:"100%"}}>
          <Carousel.Item style={{width:"100%", height:"300px"}}>
            <img
              className="d-block w-100"
              src="https://www.gardeningknowhow.com/wp-content/uploads/2020/10/paper-garden-400x300.jpg"
              alt="First slide"
              style={{width:"100%"}}
            />
            <Carousel.Caption>
              <h3>Making A Paper Garden With Kids</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{width:"100%", height:"300px"}}>
            <img
              className="d-block w-100"
              src="https://www.gardeningknowhow.com/wp-content/uploads/2020/09/kids-garden-hacks-400x300.jpg"
              alt="Second slide"
              style={{width:"100%"}}
            />
    
            <Carousel.Caption>
              <h3>Getting Kids Outdoors</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{width:"100%", height:"300px"}}>
            <img
              className="d-block w-100"
              src="https://www.gardeningknowhow.com/wp-content/uploads/2020/10/soil-art-400x300.jpg"
              alt="Third slide"
              style={{width:"100%"}}
            />
    
            <Carousel.Caption>
              <h3> Learning Activities Using Soil In Art</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{width:"100%", height:"300px"}}>
            <img
              className="d-block w-100"
              src="https://www.gardeningknowhow.com/wp-content/uploads/2020/06/pollinator-400x300.jpg"
              alt="fourth slide"
              style={{width:"100%"}}
            />
    
            <Carousel.Caption>
              <h3> Planting A Pollinator Garden With Kids</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    )
  }

  // //////////////////////////////////////////////////
  const infoItems = {
    accessible :[
      {
        mainTitle:"Accessible",
        topTitle:"Psychiatric Health Garden – Designing Gardens For Mental Health Patients",
        auther:"By: Darcy Larum, Landscape Designer",
        describe:"Close your eyes and imagine yourself sitting in your dream garden. Picture a gentle breeze, causing the trees and other plants to lightly sway, cascading the sweet scent of blossoms all around you. Now imagine the soothing trickling of a water fall and the melodic songs of your favorite birds. Picture butterflies of different colors flitting from one bloom to another in a graceful little air dance. Does this visualization make you feel calm and relaxed – suddenly less stressed? This is the concept behind planting gardens for mental health. Continue reading to learn more about garden therapy and psychiatric health gardens.",        srcImg:"",
        srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2018/08/mental-health-1-400x267.jpg",
        questoin:"Psychiatric Hospital Garden ?",
        answerQ:"As a society, we seem completely dependent on technology these days. However, in the past we relied solely on nature to feed us, hydrate us, shelter us, entertain us, and soothe us. Though we seem to have moved so far away from this reliance on nature, it is still hard-wired in our brains. In the last few decades, many studies have been made about the effects of nature on the human psyche. Most of these studies found that even just a short glimpse of a nature scene significantly improves the human state of mind. For this reason, mental or psychiatric hospital gardens are now popping up in thousands of medical care facilities.",
        iframe:<img src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2019-06/joelampl-main_1.jpg?itok=iW7osRDQ"/>,
        descIframe:"In the last few decades, many studies have been made about the effects of nature on the human psyche. Most of these studies found that even just a short glimpse of a nature scene significantly improves the human state of mind. For this reason, mental or psychiatric hospital gardens are now popping up in thousands of medical care facilities.",
        title1:"Some Mental Health Benefits of Gardening",
        infoTitle1:<div> 
                      <p>Along with numerous studies about the positive effects of time outside, made me curious to explore the many benefits of gardening. Recently I discussed this topic on the Think Act Be podcast with professional gardener Joe Lamp'l, creator of joe gardener®. Here are some benefits of gardening that emerged from our conversation:</p> 
                      <ul>
                        <li>Practicing Acceptance</li>
                        <li>Moving Beyond Perfectionism</li>
                        <li>Developing a Growth Mindset</li>
                        <li>Connecting with Others</li>
                        <li>Connecting to Your World</li>
                        <li>Bathing in Green</li>
                      </ul>
                    </div>,
      }
    ],
    children:[
      {
        mainTitle:"Children",
        topTitle:"Kid’s Winter Crafts: Staying Busy With Winter Garden Crafts",
        auther:"By: Bonnie L. Grant, Certified Urban Agriculturist",
        describe:"We’ve all felt it. The winter stir crazies, and it seems harder for energetic, active children to be stuck indoors when the weather is foul. Stock up on some supplies and develop some creative winter garden crafts. With a little planning, your little ones will have plenty to do and you will have their artwork to treasure.",
        srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2020/10/winter-crafts-400x300.jpg",
        questoin:"Fun Garden Crafts for Children?",
        answerQ:"Winter gardening crafts for kids help them pass the time until the sunshine is back, and the plants are blooming. It is also an important teaching opportunity. Kids can learn about different plants, foods, and bugs. Kid’s winter crafts are also a great family activity in which all ages can participate.",
        iframe:carouselChild(),
        descIframe:"Start small! The best way to kill any interest in gardening is to make it seem like an overwhelming chore. A sandbox-sized plot is perfect for the younger set. Give them their own sturdy, child-sized tools, and expect them to get wet and dirty.Set them up for success by making small raised beds that are easy for them to reach into but which keep them from climbing in and walking on the plants. Let them outline the borders with rocks and define the paths with stepping stones or mulch so they know what is garden and what is not. Have them create plant tags, using pictures for non-readers.I learned a long time ago not to let a little one loose with a hose, so give them a pint sized watering can to use. Teach them about mulch by letting them spread grass clippings around their plants. Remember to keep it organic; kids and chemicals don’t mix!",
        title1:"Reading Garden Activities",
        infoTitle1: <div>
                      <h3>Reading Garden Activities</h3>
                      <p>A youth reading garden can be just that: a place to sit and read quietly. But there are also ways to make the experience more interactive so include reading lessons and activities:</p>
                      <dl>
                        <dt>Take turns reading out loud:</dt>
                        <dd> - Pick a book the whole family will enjoy and read aloud together.</dd>
                        <dt>Learn garden vocabulary:</dt>
                        <dd>The garden is a great place to learn new words. Collect words for things you see and look up any the kids don’t know yet. </dd>
                        <dt>Act out a play: </dt>
                        <dd> - Include art by creating signs for the garden with quotes from your kids’ favorite books. Decorate pots and plant tags with the correct names for plants or with literary quotes. </dd>
                        <dt>Create art projects:</dt>
                        <dd> - Include art by creating signs for the garden with quotes from your kids’ favorite books. Decorate pots and plant tags with the correct names for plants or with literary quotes.</dd>
                        <dt>Build a Little Free library : </dt>
                        <dd>This is a great way to promote reading in the garden and to share books with neighbors.</dd>
                        <dt>Study nature :</dt>
                        <dd> - Read books about nature and gardening, and do it outdoors. Then have a scavenger hunt with items found in nature or the garden. </dd>
                      </dl>
                    </div> ,
      }
    ],
    // container:[
    //   {
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
    //   }
    // ],
    // spaces:[
    //   {
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
    //   }
    // ]
  }

    const SubSpecialPage = () => {

      function Accessible (props){

      // +++++++++++++++++++++++++++++++++++++ Print Page ++++++++++++++++++++++++++++====
      
          const innerImgIframePrint = () =>{
              return (
                  document.getElementById("remove2").innerHTML = '<img src="https://www.gardeningknowhow.com/wp-content/uploads/2018/08/mental-health-1-400x267.jpg"/>',
                  document.getElementById("remove3").innerHTML = '<img src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2019-06/joelampl-main_1.jpg?itok=iW7osRDQ"/>'
                  )
          }
      
      // +++++++++++++++++++++++++++++++++++++ Main Return++++++++++++++++++++++++++=
          return(
              <>
                      <div className=" subinfo mb-5 mt-5">
                        <MainContent  infoItems={infoItems.accessible [0]} innerImgIframePrint={innerImgIframePrint} />
                      </div>
              </>
          )
      }
    
      const Children = () =>{
    // +++++++++++++++++++++++++++++++++++++ Print Page ++++++++++++++++++++++++++++====
     
        const innerImgIframePrint = () =>{
          return (
              document.getElementById("remove2").innerHTML = '<img src="https://www.gardeningknowhow.com/wp-content/uploads/2020/10/winter-crafts-400x300.jpg"/>',
              document.getElementById("remove3").innerHTML = '<img src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2019-06/joelampl-main_1.jpg?itok=iW7osRDQ"/>'
              )
        }

    // +++++++++++++++++++++++++++++++++++++ Main Return++++++++++++++++++++++++++=
        return(
            <>
                    <div className=" subinfo mb-5 mt-5">
                      <MainContent  infoItems={infoItems.children [0]} innerImgIframePrint={innerImgIframePrint} />
                    </div>
            </>
        )
      }
    
      const Container = () => {
        const container = [
          
            {
              h3:"Don't Skimp on Drainage",
              srcImg:"https://www.thespruce.com/thmb/bKSswjFrmvBjDx3weF-lAfrhE-0=/434x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ten-container-garden-tips-for-beginners-84785410-ac11e0349bb847f58e92eab7a1af7870.JPG",
              altImg:"pots",
              p1:"While this may sound like an odd first tip, it can be a matter of life and death for your plants. When there isn't a big enough hole or holes for water to get out of your pot, your soil becomes too wet and the roots of your plants can rot which causes the plant to die.",
              p2:"The bad news is that many garden pots that are sold simply don't have enough drainage. You can often increase drainage, by drilling, punching or carving bigger holes. However, sometimes it's just easier to buy a pot that does have enough drainage. The minimum size for a drainage hole is 1/2 inch in diameter for small or ​medium-sized pots. For larger sized containers, look for at least an inch in diameter.",
              p3:"It is a total myth that by adding gravel, pot shards, or stones to the bottom of your container garden, you will increase drainage. Some people even say you don't need drainage holes if you put these things in the bottom of your pots. Unless you are a really attentive container gardener, who can water perfectly, or you have a plant that likes wet soil (and there are some that do), you need holes in your pots -- preferably lots of them.",
            },
            {
              h3:"Evaluate Your Light",
              srcImg:"https://www.thespruce.com/thmb/4jF_6pk1Mb63BjkST9tBr8ozUDM=/434x0/filters:no_upscale():max_bytes(150000):strip_icc()/ten-container-garden-tips-for-beginner-84785401-b4922cd7717c4d459f84f21486de4e4c.jpg",
              p1:"People often wildly overestimate how much sun their containers get. While you can find a great plant for almost any amount of light, you have to know how much light your container will get before you choose your plants.",
              p2:"To figure out how much direct light your container will get, place it where you want it and then time how long the sun hits it. You can also use a sun calculator to determine your sunlight. ",
              p3:"",
            },
            {
              h3:"Feed Your Plants",
              srcImg:"https://www.thespruce.com/thmb/rcKwsCM1WTJ9Ei4VtG-RCyRd6zM=/434x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-does-npk-mean-for-a-fertilizer-2131094-hero-02-01091c30834842b39714adf6dab45941.jpg",
              p1:"Most potting soil has no accessible nutrients for your plants, you need to add those. The vast majority of plants will need fertilizer added to your soil, in order to thrive. You can mix in a slow release fertilizer into a potting mix. To do this, either mix up a big batch of potting soil mixed with fertilizer in a bucket or fill your pot with potting soil and then mix in the fertilizer. ",
              p2:"Then fertilize every week or two with a liquid fertilizer, usually a fish emulsion, seaweed blend. It smells awful but really helps to give plants the nutrition they need. ",
              p3:"Many people use a commercial fertilizer, and while it will feed your plants and help them to grow if you start using it, you will have to continue because this type of synthetic fertilizer will kill the beneficial organisms that exist in the soil. Organic gardening depends on these organisms so once you've used a synthetic fertilizer, you will have to stick to it. ",
            },
            {
              h3:"Make a List Before You Go to Buy Plants",
              srcImg:"https://www.thespruce.com/thmb/SUguObrl2z3WGAA5R6lyer6AaCU=/434x0/filters:no_upscale():max_bytes(150000):strip_icc()/ten-container-garden-tips-for-beginners-84785406-61e018771cf8483d811eda3071450525.JPG",
              p1:"One of the best ways to avoid plant panic, or at least minimize it, is to decide what you want before you go to the nursery and make a list. This list doesn't even have to have the exact plants, though if you are ambitious, you can go online or look through plant catalogs and decide exactly what you want. Try to create a list at least with the number of pots, the sizes, and where they are going - so you can get plants that fit the pots and know if you need plants for sun or shade or anything in between. ",
              p2:"If possible, it is a great idea to bring either your pot or a picture of your pot with you. Smartphones are great for this. Most nurseries will have someone there who can help you out with your choices. Also, in most nurseries, the plants are organized and labeled for how much sun they require. ",
              p3:"",
            },
            {
              h3:"Plant Good Neighbors",
              srcImg:"https://www.thespruce.com/thmb/cbEoOWdsFmlRhmldKd_G7fuOKZM=/434x0/filters:no_upscale():max_bytes(150000):strip_icc()/ten-container-garden-tips-for-beginner-84785403-424c1857507e4514bbd2a6bba17a5f88.JPG",
              p1:"When you are choosing plants for your container make sure that they will play well together. This means that all the plants in one pot should all require the same amount of light and moisture. If you combine plants with different needs, some of them will not thrive. So, for example, if you have a plant that requires full sun, you want all the plants you choose for that pot to also require full sun. If you have a plant that likes to dry out between waterings, you don't want to put it in a pot with plants that like it wet. ",
              p2:"To find out what a plant requires, either check the plant tag or if there isn't one, ask a salesperson. If all else fails, try to look it up on the internet. ",
              p3:"",
            }

        ]
        
          return(
              <>
                  <h1>5 Container Garden Tips for Beginners</h1>
                  <div ><img src="https://www.thespruce.com/thmb/8bkrcDtL-nU9Ysk6wI7dWhj0oaQ=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ten-container-garden-tips-for-beginners-84785408-5f37a7f9535344d894f6991416e14d68.JPG" alt="container flower" /></div>
                  <div className="h5 m-5" >
                    <p className="inline-block">Even if you don't have a yard available to you, it's still possible to enjoy container gardening. Once you get the hang of container gardening you might find yourself growing more and more pots each year. But keeping plants in containers alive and thriving doesn't require the same care processes as raising plants that are growing in the ground. Here are some of our best tips for successful container gardens.</p>
                    <ol>
                        {container.map((item,index)=>{
                          return(
                            <>
                      <li key={index}>
                              <h3 style={{color:"#882378"}} >
                          {item.h3}
                        </h3>
                        <div className="clearfix py-4" >
                          <div className="px-4" style={{float:"left"}} >
                            <img src={item.srcImg} alt={item.altImg} />
                          </div>
                          <p >
                            {item.p1}
                          </p>
                        </div>
                        <p>
                          {item.p2}
                        </p>
                        <p>
                          {item.p3}
                        </p>
                      </li>
                            </>
                          )
                        })}

                    </ol>
                  </div>
              </>
          )
      }
    
      const Spaces = () => {
          return(
              <>
                  <h1>Spaces page</h1>
              </>
          )
      }
      return ( 
        <>
            <h1></h1>
            <Routes>
                <Route path="subSpecialPage/accessible" element={<Accessible/>} />
                <Route path="subSpecialPage/childrenG" element={<Children/>} />
                <Route path="subSpecialPage/container" element={<Container/>} />
                <Route path="subSpecialPage/spaces" element={<Spaces/>} />
                
            </Routes>
            
        </>
    );
    }
    
  
  return (
    <>
      <div className="container">
        <TabMenuLink data={Specialdata} subdescribePage = {<SubSpecialPage/>} />
      </div>
    </>
  );
}

export default Special;
