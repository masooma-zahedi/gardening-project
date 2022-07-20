import React from 'react';
import { nanoid } from 'nanoid';
import BottomPartSubTab from '../../../../component/subTabMenu/BottomPartSubTab';
import {TopTitle} from '../../../../component/subTabMenu/TopPartSubTab';
function GrainsP() {
    const addTitle = ()=>{
      return(
      <>
        <span className="" style={{ color: "rgb(51 51 51)" }}>
        &nbsp;›
      </span>
      <span style={{ color: "rgb(87 161 195)" }}>
        &nbsp;Grains
      </span>
    </>
    )
    }
    const fruitsP = {
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
                  "Rice Leaf Smut Info – How To Treat Leaf Smut Of Rice Crops",
                linkTo: "subEdiblePage/grainsPage/riceLeaf",
                src: "https://www.gardeningknowhow.com/wp-content/uploads/2019/07/rice-smut-400x263.jpg",
                alt: " Leaf Smut Of Rice",
                author: "  Mary Ellen Ellis",
                desc:"Rice may not be a typical backyard garden plant, but if you live somewhere soggy, it can be a great addition. Diseases can ransack your rice paddy, though, so be aware of signs of infections like leaf smut of rice and what to do to manage or treat it. Learn more here.",
              },
            ],
            afterStart: [
              {
                id: nanoid(6),
                title:
                  "What Is Khorasan Wheat: Where Does Khorasan Wheat Grow",
                linkTo: "subEdiblePage/grainsPage/KhorasanWheat",
                src: "https://www.gardeningknowhow.com/wp-content/uploads/2017/04/Khorasan-wheat-400x274.jpg",
                alt: "wheat grow",
                author:
                  "  Amy Grant",
                desc:"Ancient grains have become a modern trend and with good reason. These unprocessed whole grains have a slew of healthful benefits. One such grain is called khorasan wheat. What is khorasan wheat and where does khorasan wheat grow? Learn more here."
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

export default  GrainsP ;