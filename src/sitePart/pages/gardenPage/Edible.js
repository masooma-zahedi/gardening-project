import { nanoid } from "nanoid";
import React from "react";
import TabMenuLink from "../../component/subTabMenu/TabMenuLink";
import FruitsPage from "./subPageGarden/ediblePage/Fruits";

function Edible() {
  const edible = {
    topInfo: [
      {
        title1: "Gardens",
        linkTo1:"/gardens",
        title2: "Edible Gardens",
        src: "https://www.gardeningknowhow.com/wp-content/uploads/2012/11/edible-garden-150x150.jpg",
        info: "There is nothing better than growing edible gardens and enjoying the “fruits” of our labor. Here you will find a range of growing tips for edible plants, everything from classic herbs to your favorite fruits and vegetables. Whether you are just starting out or an experienced gardener, you are certain to find just what you’re looking for when it comes to edible gardening. Discover how to grow edible plants from beginning to end with gardening information that covers it all including design, preparation, planting, care, harvest and more.",
      },
    ],
    Links: [
      {
        id: nanoid(6),
        title: "Fruits",
        linkTo: "fruits",
      },
      {
        id: nanoid(6),
        title: "Grains",
        linkTo: "grains",
      },
      {
        id: nanoid(6),
        title: "Herbs",
        linkTo: "herbs",
      },
      {
        id: nanoid(6),
        title: "Nut Trees",
        linkTo: "nutTree",
      },
      {
        id: nanoid(6),
        title: "Vegetables",
        linkTo: "vegetables",
      },
    ],
  };
  return (
    <>
      <div className="container">
        <TabMenuLink data={edible} />
      </div>
    </>
  );
}

export default Edible;
