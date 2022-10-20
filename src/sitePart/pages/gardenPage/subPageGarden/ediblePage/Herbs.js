import React from 'react';
import { nanoid } from 'nanoid';
import BottomPartSubTab from '../../../../component/subTabMenu/BottomPartSubTab';
import {TopTitle} from '../../../../component/subTabMenu/TopPartSubTab';
function MainHerbs() {
    const addTitle = ()=>{
      return(
      <>
        <span className="" style={{ color: "rgb(51 51 51)" }}>
        &nbsp;›
      </span>
      <span style={{ color: "rgb(87 161 195)" }}>
        &nbsp;Herbs
      </span>
    </>
    )
    }
    const HerbsP = {
        topInfo: [
          {
            title1: "Gardens",
            linkTo1:"/gardens",
            title2: "Edible",
            linkTo2:"/gardens/edible"
          },
        ],
        subInfo: [
          {
            getStarted: [
              {
                title:"Arnica Plant Care: Learn How To Grow Arnica Herbs ",
                linkTo: "subEdiblePage/herbsPage/arnica",
                src: "https://www.gardeningknowhow.com/wp-content/uploads/2015/10/arnica-400x266.jpg",
                alt: "Arnica Plant ",
                author: "Mary H. Dyer, Credentialed Garden Writer",
                desc:"Arnica is a perennial herb that produces yellow-orange, daisy-like blooms in late spring and early summer. Before you decide to grow arnica or use the herb medicinally, there are a number of things you should know. This article will help."
              },
            ],
            afterStart: [
              {
                id: nanoid(6),
                title:
                  "Harvesting Anise Seed – When And How To Pick Anise Seeds",
                  // //////?????????
                linkTo: "subEdiblePage/herbsPage/anise",
                src: "https://www.gardeningknowhow.com/wp-content/uploads/2018/12/Green-anise-400x267.jpg",
                alt: "Anise Seed",
                author:
                  "Liz Baessler",
                  desc:"If you’re someone who loves anise, there’s nothing easier or more rewarding than growing and saving your own anise seeds to use year round. Click this article to learn more about how to pick anise seeds and preserve them so you can use and enjoy the spice year after year."
              },
              {
                id: nanoid(6),
                title:
                  "Bay Tree Propagation – Tips For Rooting Bay Tree Cuttings",
                linkTo: "subEdiblePage/herbsPage/bayTree",
                src: "https://www.gardeningknowhow.com/wp-content/uploads/2017/09/bay-pest-400x276.jpg",
                alt: "Bay Tree",
                author: " Bonnie L. Grant, Certified Urban Agriculturist",
                desc:"One mature bay tree will keep even the most dedicated cook in pungent bay leaves for a lifetime. But if you need more, it is not difficult to start growing a bay tree from cuttings. For more information on propagating cuttings from a bay tree, click here."
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
            <TopTitle dataTop={HerbsP} addTitle={addTitle()}/>
          <BottomPartSubTab dataBottom={HerbsP}  />
        </div>

        </>
      );
}

export default  MainHerbs ;