import React from 'react';
import { nanoid } from 'nanoid';
import BottomPartSubTab from '../../component/subTabMenu/BottomPartSubTab';
import{ TopPartSubTab} from '../../component/subTabMenu/TopPartSubTab';


function GeneralLawn() {
    const generalLawn = {
      topInfo: [
        {
          title1: "Lawn Care",
          linkTo1:"/lawnCare",
          title2: "General lawn Care ",
          src: "https://www.gardeningknowhow.com/wp-content/uploads/2012/11/general-lawn-care-150x150.jpg",
          info: "We all dream of having the perfect lawn. While a “perfect” lawn may be less than ideal, as there will always be something to deal with (like weeds or disease), you can still have a healthy lawn using the following lawn care tips. With topics ranging from lawn diseases to planting and care of lawns, learning how to take care of your lawn can be a simple task. By using the proper lawn care products and practicing good lawn maintenance, you’ll be well on your way to having the yard you’ve always wanted.",
        },
      ],
      subInfo: [
        {
          getStarted: [
            {
              title:
                "Lawn Maintenance In The Northwest: Pacific Northwest Lawn Care Tips",
              linkTo: "",
              src: "https://www.gardeningknowhow.com/wp-content/uploads/2021/06/lawnmower-400x300.jpg",
              alt: "Maintenance In The Northwest",
              author: "Amy Grant",
              desc: "the Northwest, lawns are more prone to moss and certain weeds than other regions. Read on to learn about lawn maintenance and when to grow grass in the Northwest.",
            },
          ],
          afterStart: [
            {
              id: nanoid(6),
              title:
                "Hot Weather Lawn Care – Managing Your Lawn In Extreme Heat",
              linkTo: "",
              src: "https://www.gardeningknowhow.com/wp-content/uploads/2021/06/dry-grass-400x300.jpg",
              alt: "Hot Weather Lawn Care",
              author: "Mary Ellen Ellis",
              desc: "A lawn in summer heat is usually a brown lawn, but that doesn’t mean it has to be unhealthy or that it can’t rebound. Read on for tips.",
            },
            {
              id: nanoid(6),
              title:
                "Preparing A Lawn For Winter – Learn About Winterizing A Lawn",
              linkTo: "",
              src: "https://www.gardeningknowhow.com/wp-content/uploads/2020/10/winter-lawn-prep-400x300.jpg",
              alt: "Lawn For Winter",
              author: "Mary Ellen Ellis",
              desc: "Preparing a lawn for winter can mean the difference between mediocre turf in the spring and healthy, vigorous turf. Click here for info on lawn winter care.",
            },
            {
              id: nanoid(6),
              title: "Taming Wild Yards: How To Restore Overgrown Lawns",
              linkTo: "",
              src: "https://www.gardeningknowhow.com/wp-content/uploads/2020/06/overgrown-lawn-400x300.jpg",
              alt: "Taming Wild Yards",
              author: "Teo Spengler",
              desc: "If you are hoping for tips on how to restore overgrown lawns without chemicals, you’ve come to the right place. Click here for overgrown lawn care info.",
            },
            // ======
            {
              id: nanoid(6),
              title:
                "What Are Smart Lawn Mowers – Learn About Robot Lawn Mowers",
              linkTo: "",
              src: "https://www.gardeningknowhow.com/wp-content/uploads/2020/05/automatic-mower-400x300.jpg",
              alt: "Barley Covered",
              author: " Bonnie L. Grant, Certified Urban Agriculturist",
              desc:"What are smart lawn mowers? Once you learn what they are, you may find yourself switching from your existing model. Click here for more info."
            },
          ],
        },
      ],
    };

    const Ads =()=>{
        return (
          <>
            <div
              className="adsTop d-flex justify-content-center flex-column"
              style={{ height: 250 }}
            >
              <div className="p-4 bg-warning">
                <h2 className="text-white">this is a ads</h2> Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quaerat eius, dolor velit
                deleniti voluptas quibusdam vitae perspiciatis temporibus illum
                in.
              </div>
            </div>
          </>
        );
    }
  return (
    <>
      <div className="container">
        <Ads />
        <TopPartSubTab dataTop={generalLawn} />
        <BottomPartSubTab dataBottom={generalLawn} />
      </div>
    </>
  );
}

export default GeneralLawn;


