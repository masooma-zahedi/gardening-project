import React from 'react';
import {TabMenu} from "../component/TabMenu"

function HousePlant() {
  const housePlant = {
    topInfo: [
      {
        title: "Houseplants",
        src: "https://www.gardeningknowhow.com/wp-content/uploads/2012/11/houseplants-150x150.jpg",
        info: "Even if you don’t fancy yourself as a gardener, chances are there’s at least one houseplant in your home. If not, chances are you might receive one as a gift. Whatever the case may be, you need to know how to care for houseplants in order to grow them successfully. That’s where we come in. This section contains growing information and general care tips for the houseplant enthusiast, including pruning needs and winter requirements. In addition, there is an ever-growing collection of individual houseplants covering all these basics and more.",
      },
    ],
    // subinfo=====
    Links: [
      {
        title: "Specific Houseplants",
        linkTo: "",
      },
      {
        title: "General Houseplant Care",
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

export default HousePlant;