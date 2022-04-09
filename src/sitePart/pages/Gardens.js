import React from 'react';
import { Link } from "react-router-dom";


function Gardens() {
  return (
    <>
      <div className="container">
        <div className="row border border-danger">
          <div className="col-9 border border-success">
            <h1 className="">Gardens</h1>
            <div>
              <img
                src="https://www.gardeningknowhow.com/wp-content/uploads/2012/11/edible-garden-150x150.jpg"
                alt="fruit"
              />
            </div>
            <p>
              There is nothing better than growing edible gardens and enjoying
              the “fruits” of our labor. Here you will find a range of growing
              tips for edible plants, everything from classic herbs to your
              favorite fruits and vegetables. Whether you are just starting out
              or an experienced gardener, you are certain to find just what
              you’re looking for when it comes to edible gardening. Discover how
              to grow edible plants from beginning to end with gardening
              information that covers all the basics including design,
              preparation, planting, care, harvest and more. Read more at
              Gardening Know How: Gardens
              https://www.gardeningknowhow.com/gardens
            </p>
            <ul>
              <li>
                <Link to="">Edible</Link>
              </li>
              <li>
                <Link to="">Gardening How To</Link>
              </li>
              <li>
                <Link to="">Ornamental Gardens</Link>
              </li>
              <li>
                <Link to="">Special Gardens</Link>
              </li>
            </ul>
          </div>
          <div className="col-3 border border-warning">by</div>
        </div>
      </div>
      <div className="search">search for more information</div>
    </>
  );
}

export default Gardens;