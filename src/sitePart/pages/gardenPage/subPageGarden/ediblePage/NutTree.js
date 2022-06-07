import React from 'react';
import { nanoid } from 'nanoid';
import BottomPartSubTab from '../../../../component/subTabMenu/BottomPartSubTab';
import {TopTitle} from '../../../../component/subTabMenu/TopPartSubTab';

function NutTreePage() {

    const addTitle = ()=>{
      return(
      <>
        <span className="" style={{ color: "rgb(51 51 51)" }}>
        &nbsp;›
      </span>
      <span style={{ color: "rgb(87 161 195)" }}>
        &nbsp;Nut Tree
      </span>
    </>
    )
    }

    // ******************************** Data********************
    const nutTreeP = {
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
                title:
                  "Almond Oil Information: Tips For Using Almond Oil ",
                linkTo: "subEdiblePage/nutTreePage/almondOil",
                src: "https://www.gardeningknowhow.com/wp-content/uploads/2018/04/almond-oil-400x277.jpg",
                alt: "Almond Oil ",
                author: " Amy Grant",
                desc:"With early blooms in mild climates, almond trees are making their way into the landscape, providing homeowners with early spring blooms, healthy nuts and an attractive landscape plant. Click this article for tips on what to do with almonds in the winter."
              },
            ],
            afterStart: [
              {
                id: nanoid(6),
                title:
                  "Harvesting Black Walnut Trees: When Do Black Walnuts Fall",
                linkTo: "subEdiblePage/nutTreePage/blackWalnut",
                src: "https://www.gardeningknowhow.com/wp-content/uploads/2015/12/black-walnut-harvest-400x266.jpg",
                alt: "Black Walnut",
                author:
                  "Bonnie L. Grant, Certified Urban Agriculturist",
                  desc:"Black walnuts that are ripe will almost literally fall in your lap. All you need is a tarp, some containers, and knowledge of when do black walnuts fall. This article has information that will help with harvesting black walnuts."
              },
              {
                id: nanoid(6),
                title:
                  "Where Do Pine Nuts Come From: Learn About Growing Pine Nut Trees",
                linkTo: "subEdiblePage/nutTreePage/pineNut",
                src: "https://www.gardeningknowhow.com/wp-content/uploads/2015/12/pine-nuts-400x267.jpg",
                alt: " Pine Nuts",
                author: " Bonnie L. Grant, Certified Urban Agriculturist",
                desc:"Pine nuts are a staple in many indigenous cuisines and have migrated to the United States as a part of our family table. Where do pine nuts come from? Learn more about these nuts and how to grow them in this article."
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
            <TopTitle dataTop={nutTreeP} addTitle={addTitle()}/>
          <BottomPartSubTab dataBottom={nutTreeP}  />
        </div>

        </>
      );
}

export default  NutTreePage ;