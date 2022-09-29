import { nanoid } from "nanoid";
import React from "react";
import TabMenuLink from "../../component/subTabMenu/TabMenuLink";

function SpecificHousep() {
  const specificHousep = {
    topInfo: [
      {
        title1: "Houseplants",
        linkTo1:"/houseplant",
        title2: "Specific houseplants ",
        src: "https://www.gardeningknowhow.com/wp-content/uploads/2021/07/houseplants-for-interior-400x300.jpg",
        info: "eceive one as a gift. Whatever the case may be, you need to know how to care for houseplants in order to grow them successfully. That’s where we come in. This section contains growing information and general care tips for the houseplant enthusiast, including pruning needs and winter requirements. In addition, there is an ever-growing collection of individual houseplants covering all these basics and more.",
      },
    ],
    Links: [
      {
        id: nanoid(6),
        title: "African Gardenia",
        linkTo: "subPageHousePlant/specificPageHouse",
      },
      {
        id: nanoid(6),
        title: "African Violets",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Alocasia Plants",
        linkTo: "",
      },
    ],
  };
  return (
    <>
      <div className="container">
        <TabMenuLink data={specificHousep} />
      </div>
    </>
  );
}

export default SpecificHousep;
