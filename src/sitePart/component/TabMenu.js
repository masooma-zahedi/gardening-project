import React from 'react';
import {Link} from "react-router-dom";
import {RightSidePart} from "./RightSidePart";
import pages from "../moduleCss/pages.module.css"

function TabMenu(props) {
  return (
    <>
      <div
        className="container"
        style={{ fontFamily: "'Roboto Slab',Times New Roman,Times,serif" }}
      >
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
        <div>
          <Link
            to="/"
            style={{ color: "rgb(87 161 195)", textDecoration: "none" }}
          >
            Home&nbsp;
          </Link>
          <span className="" style={{ color: "rgb(51 51 51)" }}>
            ›
          </span>
            <span style={{ color: "rgb(87 161 195)" }}>
              &nbsp;{props.data.topInfo[0].title}
            </span>
        </div> 
        <p
          className="display-6"
          style={{
            color: "rgb(83, 116, 44)",
            fontFamily: " Oxygen,sans-serif,Arial,Helvetica",
          }}
        >
          information about {props.data.topInfo[0].title}{" "}
        </p>
        <div className="row">
          <div className="col-12 col-sm-2">
            <img className='w-sm-100 '
              src={props.data.topInfo[0].src}
              alt={props.data.topInfo[0].title}
            />
          </div>
          <p
            className="col-9 px-sm-5 "
            style={{ fontSize: "1.2rem" }}
          >
            {props.data.topInfo[0].info}
          </p>
        </div>
        <div className="subinfo  row">
          <div className="col-12 col-md-9">
            <p style={{ fontSize: "1.2rem", marginTop: "15px" }}>
              Select a category
            </p>
            <div className="bottomInfo row">
              {/* Links bottom  */}
              {props.data.Links.map((dataLink, index) => {
                return (
                  <>
                    <div className="col-6 " key={dataLink.id}>
                      <Link
                        to={dataLink.linkTo}
                        className={`p-2 ps-3 d-block mb-2 ${pages.bottomLink}`}
                      >
                        {dataLink.title} 
                      </Link>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="col-12 col-md-3">
            <RightSidePart />
          </div>
        </div>
      </div>
    </>
  );
}

export { TabMenu };