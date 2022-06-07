import { nanoid } from "nanoid";
import React from "react";
import TabMenuLink from "../../component/subTabMenu/TabMenuLink";

function Howto() {
  const howto = {
    topInfo: [
      {
        title1: "Gardens",
        linkTo1:"/gardens",
        title2: "How To",
        src: "https://www.gardeningknowhow.com/wp-content/uploads/2012/11/Gardening-How-To-150x150.jpg",
        info: "Are you new to gardening or simply an experienced gardener yearning to learn more? Well, you’re in the right place. Our gardening how to section is filled with tips and information to fit the needs of any gardener. Here you will find information ranging from beneficial gardening friends to projects for the garden. There is also helpful information for those looking to improve their soil as well as tips on fertilizing garden plants. Nearly anything you may want to know can be found within the following gardening how to pages.",
      },
    ],
    Links: [
      {
        id: nanoid(6),
        title: "Beneficial Garden Friends",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Gardening By Region",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Gardening By Zone",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Gardening Lifestyle",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Gardening Lifestyle",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Gardening Tips & Information",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Gardening Tools",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Landscape Design",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Mulch",
        linkTo: "",
      },
    ],
  };
  return (
    <>
      <div className="container">
        <TabMenuLink data={howto} />
      </div>
    </>
  );
}

export default Howto;
