import React from 'react';
import { nanoid } from 'nanoid';
import BottomPartSubTab from '../../../../component/subTabMenu/BottomPartSubTab';
import {TopTitle} from '../../../../component/subTabMenu/TopPartSubTab';
// import SubFruitspages from './subEdiblePage/FruitsPage';
function FruitsPage() {
  const clickMe =(e)=>{
    e.preventDefault();
    alert("hi masooma you are good developre")
  }
  const clickMe1 =(e)=>{
    e.preventDefault();
    alert("hi masooma i am click me1 11111")
  }

    const addTitle = ()=>{
      return(
      <>
        <span className="" style={{ color: "rgb(51 51 51)" }}>
        &nbsp;›
      </span>
      <span style={{ color: "rgb(87 161 195)" }}>
        &nbsp;Fruits
      </span>
    </>
    )
    }
    const fruitsP = {
        topInfo: [
          {
            title1: "Gardens",
            title2: "Edible",
          },
        ],
        subInfo: [
          {
            getStarted: [
              {
                title:
                  "What Is A Columnar Apple Tree – Columnar Apple Tree Varieties ",
                linkTo: "subEdiblePage/fruitsPage/appleTree",
                src: "https://www.gardeningknowhow.com/wp-content/uploads/2021/09/Columnar-Apple-400x533.jpg",
                alt: "Apple Tree ",
                author: " Teo Spengler",
                desc:"Although columnar apple trees look quite different, the fruit looks like regular apples. Read on for more about columnar apple trees.",
              },
            ],
            afterStart: [
              {
                id: nanoid(6),
                title:
                  "Gala Apple Tree Care – How To Grow A Gala Apple Fruit Tree",
                  // //////?????????
                linkTo: "subEdiblePage/fruitsPage/apple",
                src: "https://www.gardeningknowhow.com/wp-content/uploads/2021/07/gala-apple-400x300.jpg",
                alt: "Gala Apple",
                author:
                  "Teo Spengler",
                desc: "If you are thinking of growing a Gala apple tree, click here for tips to make Gala apple tree care as easy as possible.",
              },
              {
                id: nanoid(6),
                title:
                  "Banana Tree Problems: What Causes Bananas With Cracked Skin",
                linkTo: "subEdiblePage/fruitsPage/banana",
                // ////??????????????????
                funMe:"",
                src: "https://www.gardeningknowhow.com/wp-content/uploads/2017/02/cracked-banana-fruit-400x267.jpg",
                alt: "Bananas With Cracked Skin",
                author: "Mary H. Dyer, Credentialed Garden Writer",
                desc: "Dieffenbachia is an easy-to-grow plant with almost unlimited diversity. Click here for a short list of popular dieffenbachia varieties.",
              },
              {
                id: nanoid(6),
                title:
                  "The Right Time To Pick A Cantaloupe – How And When To Pick Cantaloupe",
                linkTo: "subEdiblePage/fruitsPage/cantaloupe",
                src: "https://www.gardeningknowhow.com/wp-content/uploads/2011/03/cantaloupe-400x267.jpg",
                alt: "",
                author:
                  " Amy Grant",
                desc:"Knowing the right time to pick a cantaloupe can mean the difference between a good crop and a bad one. Follow the tips in this article to harvest the best cantaloupe fruits possible.",
              },
            ],
          },
        ],
      };
    return (
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
            <TopTitle dataTop={fruitsP} addTitle={addTitle()}/>
          <BottomPartSubTab dataBottom={fruitsP}  />
        </div>

        {/* <div>
          <SubFruitspages dataFruit={fruitsP}/>
        </div> */}
        </>
      );
}

export default  FruitsPage ;