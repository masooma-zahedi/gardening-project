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
          Home&nbsp;
        </Link>
        <span className="" style={{ color: "rgb(51 51 51)" }}>
          ›
        </span>
        <span style={{ color: "rgb(87 161 195)" }}>
          &nbsp;{props.dataTop.topInfo[0].title1}&nbsp;
        </span>
        <span className="" style={{ color: "rgb(51 51 51)" }}>
           ›
        </span>
        <span style={{ color: "rgb(87 161 195)" }}>
          &nbsp;{props.dataTop.topInfo[0].title2}
        </span>
        
      </div>
      {/* ??????????? */}
      <p
        className="display-6 "
        style={{
          color: "rgb(83, 116, 44)",
          fontFamily: " Oxygen,sans-serif,Arial,Helvetica",
        }}
      >
        information about {props.dataTop.topInfo[0].title2}
      </p>
      <div className="row">
        <div className="col-2 pe-0">
          <img
            className=""
            style={{ width: "75%" }}
            src={props.dataTop.topInfo[0].src}
            alt={props.dataTop.topInfo[0].title2}
          />
        </div>
        <p
          className="col-9 px-0 position-relative"
          style={{ fontSize: "1.2rem", left: "-40px" }}
        >
          {props.dataTop.topInfo[0].info}
        </p>
      </div>
    </>
  );
}

function TopTitle(props){
  return(
    <>
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
          &nbsp;{props.dataTop.topInfo[0].title1}&nbsp;
        </span>
        <span className="" style={{ color: "rgb(51 51 51)" }}>
           ›
        </span>
        <span style={{ color: "rgb(87 161 195)" }}>
          &nbsp;{props.dataTop.topInfo[0].title2}
        </span>
        {props.addTitle}
        
      </div>
    </>
  )
}



export {
  TopPartSubTab,
  TopTitle
} 