import { nanoid } from 'nanoid';
import React from 'react';
import BottomPartSubTab from '../../component/subTabMenu/BottomPartSubTab';
import{ TopPartSubTab} from '../../component/subTabMenu/TopPartSubTab';

function Environmental() {
        const environmental = {
          topInfo: [
            {
              title1: "Problems" ,
              linkTo1:"/problems",
              title2: "Environmental Problems",
              src: "https://www.gardeningknowhow.com/wp-content/uploads/2012/11/environmental-150x150.jpg",
              info: "Cultural plant problems and various types of environmental issues are inevitable, regardless of how well you care for your garden. So what is a gardener to do? The first step to solving gardening issues caused by environmental problems in gardens is to do your research. The pages that follow will help with that. With information for dealing with types of environmental issues like contaminated soil, floods, heat waves or cold spells, you’re sure to find something that relates to the particular needs of your garden. So keep reading to learn more.",
            },
          ],
          subInfo: [
            {
              getStarted: [
                {
                  title:
                    "Cool Weather Crops: How Freezing Temperatures Affect Cold Hardy Plants",
                  linkTo: "",
                  src: "https://www.gardeningknowhow.com/wp-content/uploads/2022/03/freezing-cabbage-400x300.jpg",
                  alt: "Cool Weather Crops",
                  author: "Laura Miller",
                  desc: "Are there garden vegetables that can survive frost? The answer is yes. But how do freezing temperatures affect these cold-weather vegetables?",
                },
              ],
              afterStart: [
                {
                  id: nanoid(6),
                  title:
                    "Patches Of Brown Leaves On Trees – Fall Color, Cicada Damage Or Something Else?",
                  linkTo: "",
                  src: "https://www.gardeningknowhow.com/wp-content/uploads/2021/10/Brown-tips-on-branches-400x300.jpg",
                  alt: "Patches Of Brown Leaves",
                  author: "Teo Spengler",
                  desc: "Read on for more information about cicada branch damage and the many other potential causes of brown leaves on trees.",
                },
                {
                  id: nanoid(6),
                  title:
                    "Dark Side Of Nature – Sinister Plants To Avoid In The Garden",
                  linkTo: "",
                  src: "https://www.gardeningknowhow.com/wp-content/uploads/2020/09/sinister-plant-400x300.jpg",
                  alt: "Dark Side Of Nature",
                  author: "Bonnie L. Grant, Certified Urban Agriculturist",
                  desc: "Some of our most common plants can show a dark side if we don't approach them with caution. Click here to learn about these sinister plants.",
                },
                {
                  id: nanoid(6),
                  title:
                    "Plants Toxic To Turtles – Learn About Plants Turtles Should Not Eat",
                  linkTo: "",
                  src: "https://www.gardeningknowhow.com/wp-content/uploads/2020/06/turtle-400x300.jpg",
                  alt: "Plants Toxic To Turtles",
                  author: " Susan Albert, Freelance Garden Writer",
                  desc: "Whether wildlife rehabilitators, pet owners, or even gardeners, it's necessary to be aware of plants toxic to turtles and tortoises. This article will help.",
                },
                {
                  id: nanoid(6),
                  title:
                    "Flowers Toxic To Bees: What Plants Are Poisonous To Bees",
                  linkTo: "",
                  src: "https://www.gardeningknowhow.com/wp-content/uploads/2019/07/bees-400x267.jpg",
                  alt: "Flowers Toxic To Bees",
                  author: "Mary Ellen Ellis",
                  desc: "Bees are vital for plant pollination. Bee friendly gardens are a great way to support the population of these pollinators. However, did you know some plants are actually toxic to bees? To find out more about flowers harmful to bees click here.",
                },
              ],
            },
          ],
        };
        // console.log(environmental.subInfo[0].afterStart[1].id);
  return (
    <>
      <div className="container">
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
        <TopPartSubTab dataTop={environmental} />
        <BottomPartSubTab dataBottom={environmental}  />
      </div>
    </>
  );
}

export default Environmental;