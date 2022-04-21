import { nanoid } from "nanoid";
import React from "react";
import TabMenuLink from "../../component/subTabMenu/TabMenuLink";

function Ornamental() {
  const ornamental = {
    topInfo: [
      {
        title1: "Gardens",
        title2: "Ornamental",
        src: "https://www.gardeningknowhow.com/wp-content/uploads/2012/11/special-gardens-150x150.jpg",
        info: "What are special gardens? These are gardens with something specific in mind. Here you will find tips for the special needs gardener, gardening with children and those just starting out. In addition, you will learn more about growing specific types of gardens like xeriscape designs, color themes, seaside gardens, organic gardening, urban gardening and using containers in the garden. From how to design them to their overall care, these special gardens have something for everyone. So, if you’re looking for something specific, it’s likely here.",
      },
    ],
    Links: [
      {
        id: nanoid(6),
        title: "Accessible Gardens",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Children's Gardens",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Container Gardens",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Garden Spaces",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Greenhouses",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Organic Gardens",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Ground Cover",
        linkTo: "",
      },
    ],
  };
  return (
    <>
      <div className="container">
        <TabMenuLink data={ornamental} />
      </div>
    </>
  );
}

export default Ornamental;
