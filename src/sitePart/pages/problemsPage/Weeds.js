import { nanoid } from 'nanoid';
import React from 'react'
import BottomPartSubTab from '../../component/subTabMenu/BottomPartSubTab';
import {TopPartSubTab} from '../../component/subTabMenu/TopPartSubTab';

function Weeds() {
        const environmental = {
          topInfo: [
            {
              title1: "Problems",
              linkTo1:"/problems",
              title2: "Weeds",
              src: "https://www.gardeningknowhow.com/wp-content/uploads/2012/11/weeds-150x150.jpg",
              info: "There are many types of garden weeds, making it difficult to know how to kill weeds, as not all methods work the same for all weed types. For this reason, we have attempted to make the task of weed control in lawns and gardens easier by providing tips on how to identify garden weeds. Once you know more about the common garden weeds found in the landscape, you’ll have a better idea on how to kill weeds that become bothersome. Whether it comes down to taking an organic approach or using a chemical method, our tips will alleviate future problems.",
            },
          ],
          subInfo: [
            {
              getStarted: [
                {
                  title:
                    "Identifying Sand Bittercress – Growing Conditions For Small-Flowered Bittercress",
                  linkTo: "",
                  src: "https://www.gardeningknowhow.com/wp-content/uploads/2022/02/sand-bittercress-400x300.jpg",
                  alt: "Sand Bittercress",
                  author: "Laura Miller",
                  desc: "Small-flowered bittercress, also known as sand bittercress, is a plant native to North America. Click here for more info about this plant.",
                },
              ],
              afterStart: [
                {
                  id: nanoid(6),
                  title:
                    "Patches Of Brown Leaves On Trees – Fall Color, Cicada Damage Or Something Else?",
                  linkTo: "",
                  src: "https://www.gardeningknowhow.com/wp-content/uploads/2021/11/buckthorn-400x533.jpg",
                  alt: "Invasive Buckthorn",
                  author: "Teo Spengler",
                  desc: "If you have noxious buckthorn plants growing in your yard, you may want to eliminate them. Click here to learn about buckthorn control.",
                },
                {
                  id: nanoid(6),
                  title: "What Is Arrowgrass – Seaside Arrowgrass Management",
                  linkTo: "",
                  src: "https://www.gardeningknowhow.com/wp-content/uploads/2021/06/arrowgrass-400x533.jpg",
                  alt: "Arrowgrass ",
                  author: "Mary H. Dyer, Credentialed Garden Writer",
                  desc: "What is arrowgrass? Known by many other names, seaside arrowgrass being one, it is an aquatic or semi-aquatic plant that grows wild across much of southern Canada and the Northern U.S. To learn about identifying this plant along with tips on seaside arrowgrass management click the following.",
                },
                {
                  id: nanoid(6),
                  title: "Weeds In The Garden: Identifying Basic Weeds",
                  linkTo: "",
                  src: "https://www.gardeningknowhow.com/wp-content/uploads/2021/02/purslane-flower-bed-weed-400x300.jpg",
                  alt: "Weeds In The Garden",
                  author: " Bonnie L. Grant, Certified Urban Agriculturist",
                  desc: "Many gardeners are plagued by weeds. They seem to pop up in the most inconvenient places like cracks in the sidewalk or against the foundation. Garden bed weeds are also frequent annoyances. Identification and control methods are crucial to containing common weeds.",
                },
                // 11111
                {
                  id: nanoid(6),
                  title: "What Is Button Clover – Information On Button Clover",
                  linkTo: "",
                  src: "https://www.gardeningknowhow.com/wp-content/uploads/2021/02/button-clover-1-400x300.jpg",
                  alt: "Button Clover",
                  author: "Mary Ellen Ellis",
                  desc: "Click here for information on Medicago button clover as well as learn how to manage button clover.",
                },
              ],
            },
          ],
        };
        // console.log(environmental.subInfo[0].afterStart[1].id);
        return (
          <>
            <div className="container">
              <div
                className="adsTop d-flex justify-content-center flex-column"
                style={{ height: 250 }}
              >
                <div className="p-4 bg-warning">
                  <h2 className="text-white">this is a ads</h2> Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Quaerat eius,
                  dolor velit deleniti voluptas quibusdam vitae perspiciatis
                  temporibus illum in.
                </div>
              </div>
              <TopPartSubTab dataTop={environmental} />
              <BottomPartSubTab dataBottom={environmental} />
            </div>
          </>
        );
    }

export default Weeds