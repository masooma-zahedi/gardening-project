import React from 'react';
import {Link} from "react-router-dom";

function TopPartSubTab(props) {
  return (
    <>
      <div>
        <Link
          to="/"
          style={{ color: "rgb(87 161 195)", textDecoration: "none" }}
        >
          Home
        </Link>
        <span className="" style={{ color: "rgb(51 51 51)" }}>
          ›
        </span>
        <span style={{ color: "rgb(87 161 195)" }}>
          {props.dataTop.topInfo[0].title1}
        </span>
        <span className="" style={{ color: "rgb(51 51 51)" }}>
          ›
        </span>
        <span style={{ color: "rgb(87 161 195)" }}>
          {props.dataTop.topInfo[0].title2}
        </span>
      </div>
      <h1 className="">information about {props.dataTop.topInfo[0].title2} </h1>
      <div className="row">
        <div className="col-2">
          <img
            src={props.dataTop.topInfo[0].src}
            alt={props.dataTop.topInfo[0].title2}
          />
        </div>
        <p className="col-9" style={{ fontSize: "1.2rem" }}>
          {props.dataTop.topInfo[0].info}
        </p>
      </div>
    </>
  );
}

export default TopPartSubTab;