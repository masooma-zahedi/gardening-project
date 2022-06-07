import React from 'react';
import { nanoid } from 'nanoid';
import BottomPartSubTab from '../../component/subTabMenu/BottomPartSubTab';
import {TopPartSubTab }from '../../component/subTabMenu/TopPartSubTab';


function Diseases() {
    const diseases = {
      topInfo: [
        {
          title1: "Problems",
          linkTo1:"/problems",
          title2: "Plant Diseases",
          src: "https://www.gardeningknowhow.com/wp-content/uploads/2012/11/plant-diseases-150x150.jpg",
          info: "Identifying plant diseases is the first step in treating the problem. There are many types of diseases that affect garden plants, leaving many gardeners scratching their heads. By using the following information, you can learn how to go about identifying plant diseases for effective disease control. Many garden disease problems can be alleviated simply by practicing good growing conditions. Yet, even in the best of circumstances, garden diseases happen. But with a little know how, you stand a better chance of treating these garden disease problems early on.",
        },
      ],
      subInfo: [
        {
          getStarted: [
            {
              title:
                "Tuber Rot Diseases: Different Types Of Tuber Rot Problems",
              linkTo: "",
              src: "https://www.gardeningknowhow.com/wp-content/uploads/2020/08/tuber-rot-400x300.jpg",
              alt: "tuber rot",
              author: "Mary H. Dyer, Credentialed Garden Writer",
              desc: "Tuber rot diseases are a major cause of crop loss, and other tuberous plants are affected too. Click here for common types of tuber rot and what you can do.",
            },
          ],
          afterStart: [
            {
              id: nanoid(6),
              title:
                "Hypoxylon Canker Fungus – Learn About Hypoxylon Canker Control",
              linkTo: "",
              src: "https://www.gardeningknowhow.com/wp-content/uploads/2020/07/1504087-SMPT-400x600.jpg",
              alt: "Hyposylon",
              author: "Mary Ellen Ellis",
              desc: "Hypoxylon canker on trees can be an extremely destructive disease. Knowing the signs could help save a tree if it hasn’t spread. Learn more here.",
            },
            {
              id: nanoid(6),
              title:
                "Cherry Leaf Roll Control – Tips For Treating Cherry Leaf Roll Virus",
              linkTo: "",
              src: "https://www.gardeningknowhow.com/wp-content/uploads/2020/03/5362095-SMPT-400x263.jpg",
              alt: "Cherry Leaf roll",
              author: "Bonnie L. Grant, Certified Urban Agriculturist",
              desc: "Although ‘cherry’ is included in the name, cherry leaf roll disease affects many plants. The virus can affect more than 36 plant families, and cherry leaf roll symptoms and damages are different per group. For tips on recognizing and treating cherry leaf roll, click here.",
            },
            {
              id: nanoid(6),
              title:
                "Problems With Plant Roots: Why Do My Plants Keep Dying In The Same Spot",
              linkTo: "",
              src: "https://www.gardeningknowhow.com/wp-content/uploads/2019/12/root-mold-400x267.jpg",
              alt: "Plant Root",
              author: "Amy Grant",
              desc: "One of the most common issues for growers is when all plants suddenly start dying. The reason likely has to do with problems with the plant roots. Plant root problems run the range from the most simplistic to more dire explanations. Find additional info here.",
            },
            {
              id: nanoid(6),
              title:
                "Barley Covered Smut Control: How To Treat Barley Covered Smut Disease",
              linkTo: "",
              src: "https://www.gardeningknowhow.com/wp-content/uploads/2019/06/barley-smut-400x400.jpg",
              alt: "Barley Covered",
              author: " Teo Spengler",
              desc: "Smut is one of the fungal diseases that cause damage to crops like barley, oats and rye. One type of smut is called “covered smut” and it is a real problem. What is barley covered smut? How to treat barley covered smut? Learn more in this article.",
            },
            {
              id: nanoid(6),
              title:
                "Treating Barley With Rhizoctonia – How To Stop Rhizoctonia Root Rot In Barley",
              linkTo: "",
              src: "https://www.gardeningknowhow.com/wp-content/uploads/2019/05/barley-damping-off-400x300.jpg",
              alt: "",
              author: "Teo Spengler",
              desc: "If you grow barley, you may need to learn something about rhizoctonia root rot of barley, a type of fungal disease that attacks cereals. For information about barley treating with rhizoctonia, and tips on how to stop rhizoctonia root rot, this article will help.",
            },
          ],
        },
      ],
    };

    // console.log(diseases.subInfo[0].getStarted[0].title);
    // console.log(diseases.subInfo[0].afterStart);
    const Ads =()=>{
        return (
          <>
            <div
              className="adsTop d-flex justify-content-center flex-column"
              style={{ height: 250 }}
            >
              <div className="p-4 bg-warning">
                <h2 className="text-white">this is a ads</h2> Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quaerat eius, dolor velit
                deleniti voluptas quibusdam vitae perspiciatis temporibus illum
                in.
              </div>
            </div>
          </>
        );
    }
  return (
    <>
      <div className="container">
        <Ads/>
        <TopPartSubTab dataTop={diseases} />
        <BottomPartSubTab dataBottom={diseases} />
      </div>
    </>
  );
}

export default Diseases;