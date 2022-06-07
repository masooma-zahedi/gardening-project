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
                  "Gala Apple Tree Care – How To Grow A Gala Apple Fruit Tree",
                linkTo: "subEdiblePage/grainsPage/galaApple",
                src: "https://www.gardeningknowhow.com/wp-content/uploads/2019/07/sheath-rot-387x600.jpg",
                alt: "Rice Sheath Rot",
                author:
                  " Bonnie L. Grant, Certified Urban Agriculturist",
                desc:"Rice is one of the most important crops in the world. So when rice has a disease, it is serious business. Such is the problem with sheath rot of rice. What is rice sheath rot? Click here for diagnostic information and advice on treating rice sheath rot in the garden."
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