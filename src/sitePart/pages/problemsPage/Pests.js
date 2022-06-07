import { nanoid } from 'nanoid';
import React from 'react';
import TabMenuLink from '../../component/subTabMenu/TabMenuLink';

function Pests() {
  const pests = {
    topInfo: [
      {
        title1: "Problems",
        linkTo1:"/problems",
        title2: "Garden Pests",
        src: "https://www.gardeningknowhow.com/wp-content/uploads/2012/11/garden-pests-150x150.jpg",
        info: "Identifying garden pests is sometimes difficult, as there are many, but important when it comes to pest control in your garden. However, with the right tips and facts about garden pests at your disposal, you can arm yourself with the tools you need for controlling pests before they take control of your plants. Common pests in the garden don’t need to be a cause for alarm. Simply use the following information for identifying garden pests and learn how to employ the best methods for pest control in your garden.",
      },
    ],
    Links: [
      {
        id: nanoid(6),
        title: "Animals",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Deer",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Insect",
        linkTo: "",
      },
      {
        id: nanoid(6),
        title: "Pesticides",
        linkTo: "",
      },
    ],
  };
  return (
    <>
      <div className='container'>
        <TabMenuLink data={pests}/>
      </div>
    </>
  );
}

export default Pests;