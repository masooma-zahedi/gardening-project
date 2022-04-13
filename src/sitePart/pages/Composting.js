import React from 'react';
import {TabMenu} from "../component/TabMenu"

function Composing() {
  const housePlant = {
    topInfo: [
      {
        title: "Composting",
        src: "https://www.gardeningknowhow.com/wp-content/uploads/2012/11/iStock_000010433567Small-150x150.jpg",
        info: "Composting in the garden is popular, though it carries with it numerous questions. So, for those of you looking to answer those questions, we can help. In our composting section there is much to learn. You will find the basics of composting in the garden, including how to start, what to use and more. There is information on various types of manure and tips for vermicomposting with earthworms. Regardless of where you live, our tips will help you reap the benefits composting provides.",
      },
    ],
    // subinfo=====
    Links: [
      {
        title: "Composting Basics",
        linkTo: "",
      },
      {
        title: "Compost Ingredients",
        linkTo: "",
      },
      {
        title: "Composting Manures",
        linkTo: "",
      },
      {
        title: "Vermicomposting",
        linkTo: "",
      },
    ],
  };
  console.log(housePlant.topInfo[0].title);
  return (
    <>
      <TabMenu data={housePlant} />
    </>
  );
}

export default Composing