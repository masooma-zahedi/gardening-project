import React from 'react';
import {TabMenu} from "../component/TabMenu"

function LawnCare() {
  const housePlant = {
    topInfo: [
      {
        title: "Lawn Care",
        src: "https://www.gardeningknowhow.com/wp-content/uploads/2012/11/lawn-150x150.jpg",
        info: "While many of you know something about gardening, the subject of lawn care may be another thing altogether. Let us help with that. Our lawn care section can help answer questions about various types of grass and how to grow them, common lawn issues, alternative solutions and general lawn care. Don’t let questions become a burden to your piece of mind. Instead, get the answers and use the lawn care tips and information provided as a guide to growing a healthy, lush carpet of grass that will make others green with envy.",
      },
    ],
    // subinfo=====
    Links: [
      {
        title: "General Lawn Care",
        linkTo: "",
      },
      {
        title: "Lawn Substitutes",
        linkTo: "",
      },
      {
        title: "Specific Lawn Grasses",
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

export default LawnCare;