import { nanoid } from "nanoid";
import React from "react";
import TabMenuLink from "../../component/subTabMenu/TabMenuLink";

function Ornamental() {
  const ornamental = {
    topInfo: [
      {
        title1: "Gardens",
        linkTo1:"/gardens",
        title2: "Ornamental",
        src: "https://www.gardeningknowhow.com/wp-content/uploads/2022/04/spring-flowering-trees-150x150.jpg",
        info: "Ornamental gardens use plants that are designed more for their aesthetic pleasure and appearance than for the production of crops or cooking. An ornamental garden design includes flowering plants and bulbs in addition to foliage plants, ornamental grasses, shrubs and trees. Growing ornamental plants in the landscape is easy. Here you will find everything you need to know about growing ornamental gardens, including various types of ornamental plantings, design elements, growing needs, basic care, pruning and more.",
      },
    ],
    Links: [
      {
        id: nanoid(6),
        title: "Bulbs",
        linkTo: "subOrnamentalPage/bulbs",
      },
      {
        id: nanoid(6),
        title: "Cacti & Succulents",
        linkTo: "subOrnamentalPage/cacti",
      },
      {
        id: nanoid(6),
        title: "Flowers",
        linkTo: "subOrnamentalPage/flowers",
      },
      {
        id: nanoid(6),
        title: "Foliage",
        linkTo: "subOrnamentalPage/foliage",
      },
      {
        id: nanoid(6),
        title: "Fungus & Lichen",
        linkTo: "subOrnamentalPage/fungus",
      },
      // {
      //   id: nanoid(6),
      //   title: "Ground Cover",
      //   linkTo: "",
      // },
      // {
      //   id: nanoid(6),
      //   title: "Shrubs",
      //   linkTo: "",
      // },
      // {
      //   id: nanoid(6),
      //   title: "Trees",
      //   linkTo: "",
      // },
      // {
      //   id: nanoid(6),
      //   title: "Vines",
      //   linkTo: "",
      // },
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
