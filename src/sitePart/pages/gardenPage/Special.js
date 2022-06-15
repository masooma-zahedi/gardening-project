import { nanoid } from "nanoid";
import React from "react";
import { useParams } from "react-router-dom";
import TabMenuLink from "../../component/subTabMenu/TabMenuLink";








function Special() {
  const {id} = useParams()
  console.log(id);

  // const Accessible =()=>{
  //   return(
  //     <>
  //       <h1>
  //         Accessible parts
  //       </h1>
  //     </>
  //   )
  // }

  const Specialdata = {
    topInfo: [
      {
        title1: "Gardens",
        linkTo1:"/gardens",
        title2: "Special Gardens",
        src: "https://www.gardeningknowhow.com/wp-content/uploads/2012/11/special-gardens-150x150.jpg",
        info: "What are special gardens? These are gardens with something specific in mind. Here you will find tips for the special needs gardener, gardening with children and those just starting out. In addition, you will learn more about growing specific types of gardens like xeriscape designs, color themes, seaside gardens, organic gardening, urban gardening and using containers in the garden. From how to design them to their overall care, these special gardens have something for everyone. So, if you’re looking for something specific, it’s likely here.",
      },
    ],
    Links: [
      {
        id: nanoid(6),
        title: "Accessible Gardens",
        linkTo: "subSpecialPage/accessible",
      },
      {
        id: nanoid(6),
        title: "Children's Gardens",
        linkTo: "subSpecialPage/childrenG",
      },
      {
        id: nanoid(6),
        title: "Container Gardens",
        linkTo: "subSpecialPage/container",
      },
      {
        id: nanoid(6),
        title: "Garden Spaces",
        linkTo: "subSpecialPage/spaces",
      },
      // {
      //   id: nanoid(6),
      //   title: "Greenhouses",
      //   linkTo: "",
      // },
      // {
      //   id: nanoid(6),
      //   title: "Organic Gardens",
      //   linkTo: "",
      // },
      // {
      //   id: nanoid(6),
      //   title: "Ground Cover",
      //   linkTo: "",
      // },
    ],
  };
  return (
    <>
      <div className="container">
        <TabMenuLink data={Specialdata} />
        <h1>params var is : { id }</h1>
      </div>
    </>
  );
}

export default Special;
