import { nanoid } from "nanoid";
import React from "react";
import TabMenuLink from "../../component/subTabMenu/TabMenuLink";

function Pests() {
  const pests = {
    topInfo: [
      {
        title1: "lawn Care",
        title2: "Lawn Substitutes",
        src: "https://www.gardeningknowhow.com/wp-content/uploads/2012/11/white-clover-150x150.jpg",
        info: "Got too much lawn to contend with? Maybe you’re just wanting something different. Alternatives to grass may be just what you’re looking for. There are many alternatives to a grass lawn. Some of these grass lawn alternatives include the use of attractive ground covers like white clover or even monkey grass. Other lawn substitutes may include hardscape elements like gravel mulch. Whichever alternatives to grass appeal to you, we can help. Keep reading to find exactly what you are looking for in the pages that follow.",
      },
    ],
    Links: [
      {
        id: nanoid(6),
        title: "Bellis Daisy",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Blue Star Creeper Lawn",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Chamomile lawn",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Creeping Thyme Lawn",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Deadnettle Lawn",
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
