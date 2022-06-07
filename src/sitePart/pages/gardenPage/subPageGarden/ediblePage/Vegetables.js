import React from 'react';
import { nanoid } from 'nanoid';
import BottomPartSubTab from '../../../../component/subTabMenu/BottomPartSubTab';
import {TopTitle} from '../../../../component/subTabMenu/TopPartSubTab';

function VegetableP() {

    const addTitle = ()=>{
      return(
      <>
        <span className="" style={{ color: "rgb(51 51 51)" }}>
        &nbsp;›
      </span>
      <span style={{ color: "rgb(87 161 195)" }}>
        &nbsp;Vegetables
      </span>
    </>
    )
    }

    // ******************************** Data********************
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
                  "Companion Planting For Carrots",
                linkTo: "subEdiblePage/vagetablesPage/carrots",
                src: "https://www.gardeningknowhow.com/wp-content/uploads/2022/04/carrot-companions-400x300.jpg",
                alt: "carrots",
                author: " Amy Grant",
                desc:"There are beneficial carrot companion plants and others that react badly in close proximity. Read on for more about carrot companions."
              },
            ],
            afterStart: [
              {
                id: nanoid(6),
                title:
                  "Half-Runner Bean Info – Learn About Planting Half-Runner Beans",
                  // //////?????????
                linkTo: "subEdiblePage/vagetablesPage/beans",
                src: "https://www.gardeningknowhow.com/wp-content/uploads/2021/06/beans-400x300.jpg",
                alt: "Beans",
                author:
                  "Teo Spengler",
                  desc:"Do you like the productivity of pole beans but don't have room for a large trellis? Consider planting half-runner beans. Read on for more."
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

        </>
      );
}

export default  VegetableP ;