import { nanoid } from "nanoid";
import React from "react";
import TabMenuLink from "../../component/subTabMenu/TabMenuLink";

function Pests() {
  const pests = {
    topInfo: [
      {
        title1: "lawn Care",
        title2: "Specific Lawn Grasses ",
        src: "https://www.gardeningknowhow.com/wp-content/uploads/2012/11/specific-grass-150x150.jpg",
        info: "When it comes to tips for growing grass, it helps to familiarize yourself with the various types of lawn grasses available. There are a number of grass types you can grow, each having its own requirements for healthy growth. That’s why learning about the care of specific lawn grasses is important in obtaining a healthy lawn. Use the following information to find out what types of lawn grass are best suited to your area and needs.",
      },
    ],
    Links: [
      {
        id: nanoid(6),
        title: "Bentgrass",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Bermuda Grass",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Blue Grama Grass",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Buffalo Grass",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Carpetgrass",
        linkTo: "",
      },
    ],
  };
  return (
    <>
      <div className="container">
        <TabMenuLink data={pests} />
      </div>
    </>
  );
}

export default Pests;
