import { nanoid } from "nanoid";
import React from "react";
import BottomPartSubTab from "../../component/subTabMenu/BottomPartSubTab";
import {TopPartSubTab} from "../../component/subTabMenu/TopPartSubTab";

function GeneralHousep() {
  const generalHousep = {
    topInfo: [
      {
        title1: "Houseplant",
        linkTo1:"/houseplant",
        title2: "General Houseplant Care ",
        src: "https://www.gardeningknowhow.com/wp-content/uploads/2012/12/houseplant-care-150x150.jpg",
        info: "Growing houseplants successfully means providing the best possible care. That’s where we come in. The following information provides tips on the basic care of houseplants as well as suggestions for dealing with houseplant pests and disease that affect houseplants. Armed with the right knowledge, you’ll be able to provide suitable growing conditions and be better equipped to handle any houseplant problems that do arise. Continue reading to learn more about how to grow houseplants and keep them healthy and happy.",
      },
    ],
    subInfo: [
      {
        getStarted: [
          {
            title:
              "My Houseplant Stopped Growing – Help, My Indoor Plant Isn’t Growing Anymore ",
            linkTo: "subPageHousePlant/generalPageHouse/stopGrowing",
            src: "https://www.gardeningknowhow.com/wp-content/uploads/2021/04/houseplant-400x300.jpg",
            alt: "Stopped Growing ",
            author: "Mary H. Dyer, Credentialed Garden Writer",
            desc: "Why isn’t my houseplant growing? It’s frustrating when an indoor plant isn’t growing, and figuring out what’s causing the problem can be tricky. Read on for more info.",
          },
        ],
        afterStart: [
          {
            id: nanoid(6),
            title:"Growing Indoor Calla Lilies – Care For Calla Lilies In The Home",
            linkTo: "subPageHousePlant/generalPageHouse/callaLilies",
            src: "https://www.gardeningknowhow.com/wp-content/uploads/2020/12/calla-lily-indoors-400x533.jpg",
            alt: "Indoor Calla Lilies",
            author:
              "Raffaele Di Lallo, Author and founder of Ohio Tropics houseplant care blog",
            desc: "Did you know that you can grow calla lilies in the home? Click here for a few important things to know about growing calla lilies indoors to be successful.",
          },
          {
            id: nanoid(6),
            title:
              "Different Dieffenbachia Varieties – Different Types Of Dieffenbachia",
            linkTo: "subPageHousePlant/generalPageHouse/dieffenbachia",
            src: "https://www.gardeningknowhow.com/wp-content/uploads/2020/11/dieffenbachia-400x533.jpg",
            alt: "Dieffenbachia Varieties",
            author: "Mary H. Dyer, Credentialed Garden Writer",
            desc: "Dieffenbachia is an easy-to-grow plant with almost unlimited diversity. Click here for a short list of popular dieffenbachia varieties.",
          },
          {
            id: nanoid(6),
            title:
              "Citronella As A Houseplant – Can You Keep Mosquito Plant Citronella Indoors",
            linkTo: "subPageHousePlant/generalPageHouse/citronella",
            src: "https://www.gardeningknowhow.com/wp-content/uploads/2020/12/citronellageranium-400x533.jpg",
            alt: "Citronella",
            author:
              " Raffaele Di Lallo, Author and founder of Ohio Tropics houseplant care blog",
            desc: "Have you enjoyed your citronella plant outdoors and wondered if you can have citronella as a houseplant? Good news, you can! Click to learn more.",
          },
          // =====
          {
            id: nanoid(6),
            title: "Houseplant Placement – Houseplants And Where To Put Them" ,
            linkTo: "subPageHousePlant/generalPageHouse/placement",
            src: "https://www.gardeningknowhow.com/wp-content/uploads/2020/11/potted-plant-placement-400x515.jpg",
            alt: "Flowers Toxic To Bees",
            author: "Mary H. Dyer, Credentialed Garden Writer",
            desc: "Figuring out exactly where to put plants in your home can get tricky and even confusing. Click here for houseplant placement tips.",
          },
        ],
      },
    ],
  };
  return (
    <>
      <div className="container">
        <div
          className="adsTop d-flex justify-content-center flex-column"
          style={{ height: 250 }}
        >
          <div className="p-4 bg-warning">
            <h2 className="text-white">this is a ads</h2> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quaerat eius, dolor velit
            deleniti voluptas quibusdam vitae perspiciatis temporibus illum in.
          </div>
        </div>
        <TopPartSubTab dataTop={generalHousep} />
        <BottomPartSubTab dataBottom={generalHousep} />
      </div>
    </>
  );
}


export default GeneralHousep;
