import { nanoid } from 'nanoid';
import React from 'react';
import { Link } from "react-router-dom";
import {RightSidePart} from "../component/RightSidePart";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Edible from "./gardenPage/Edible";


import {TabMenu} from "../component/TabMenu"

// function Gardens() {
//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <div className="col-9">
//             <h1 className="">Gardens</h1>
//             <div>
//               <img
//                 src="https://www.gardeningknowhow.com/wp-content/uploads/2012/11/edible-garden-150x150.jpg"
//                 alt="fruit"
//               />
//             </div>
//             <p>
//               There is nothing better than growing edible gardens and enjoying
//               the “fruits” of our labor. Here you will find a range of growing
//               tips for edible plants, everything from classic herbs to your
//               favorite fruits and vegetables. Whether you are just starting out
//               or an experienced gardener, you are certain to find just what
//               you’re looking for when it comes to edible gardening. Discover how
//               to grow edible plants from beginning to end with gardening
//               information that covers all the basics including design,
//               preparation, planting, care, harvest and more. Read more at
//               Gardening Know How: Gardens
//               https://www.gardeningknowhow.com/gardens
//             </p>
//             <ul>
//               <li>
//                 <Link to="">Edible</Link>
//               </li>
//               <li>
//                 <Link to="">Gardening How To</Link>
//               </li>
//               <li>
//                 <Link to="">Ornamental Gardens</Link>
//               </li>
//               <li>
//                 <Link to="">Special Gardens</Link>
//               </li>
//             </ul>
//           </div>
//           <div className="col-3">
//             <RightSidePart />
//           </div>
//         </div>
//       </div>
//       <div className="search">search for more information</div>
//     </>
//   );
// }

// export default Gardens;

function Gardens() {
  const gardens = {
    topInfo: [
      {
        title: "Gardens",
        src: "https://www.gardeningknowhow.com/wp-content/uploads/2012/11/edible-garden-150x150.jpg",
        info: "There is nothing better than growing edible gardens and enjoying the “fruits” of our labor. Here you will find a range of growing tips for edible plants, everything from classic herbs to your favorite fruits and vegetables. Whether you are just starting out or an experienced gardener, you are certain to find just what you’re looking for when it comes to edible gardening. Discover how to grow edible plants from beginning to end with gardening information that covers all the basics including design, preparation, planting, care, harvest and more.",
      },
    ],
    // subinfo=====
    Links: [
      {
        id: nanoid(6),
        title: "Edible Gardens",
        linkTo: "edible",
      },
      {
        id: nanoid(6),
        title: "Gardening How To",
        linkTo: "howto",
      },
      {
        id: nanoid(6),
        title: "Ornamental Gardens",
        linkTo: "ornamental",
      },
      {
        id: nanoid(6),
        title: "Special Gardens",
        linkTo: "special",
      },
    ],
  };
  return (
    <>
      <TabMenu data={gardens} />
      {/* <Routes>
        <Route path="/edible" element={<Edible/>}/>
      </Routes> */}

    </>
  );
}

export default Gardens;