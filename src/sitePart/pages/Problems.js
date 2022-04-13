import React from "react";
import { TabMenu } from "../component/TabMenu";

function Problems() {
  const problems = {
    topInfo: [
      {
        title: "Problems",
        src: "https://www.gardeningknowhow.com/wp-content/uploads/2016/06/iStock_000037471750_Large-150x150.jpg",
        info: "Problems in and out of the garden are pretty much inevitable. That said, it helps to know what to do once they crop up. Here you will find tips and information covering a range of gardening problems, from pests and diseases to environmental issues and weeds in the garden. Learn about different types of problems, how to combat them and even prevent them whenever possible. No one wants to suffer plant loss in the garden. So, stay one step ahead and find out how to deal with garden problems before they get out of hand.",
      },
    ],
    // subinfo=====
    Links: [
      {
        title: "Plant Diseases",
        linkTo: "",
      },
      {
        title: "Environmental Plants",
        linkTo: "",
      },
      {
        title: "Garden Pests",
        linkTo: "",
      },
      {
        title: "Weeds",
        linkTo: "",
      },
    ],
  };
  return (
    <>
      <TabMenu data={problems} />
    </>
  );
}

export default Problems;
