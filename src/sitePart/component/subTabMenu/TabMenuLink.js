import React from 'react';
import {Link} from "react-router-dom"
import { RightSidePart } from '../RightSidePart';
import pages from "../../moduleCss/pages.module.css";
import {Section3} from '../../component/SectionsBottomPage'


function TabMenuLink(props) {
  return (
    <>
      <div className="" style={{fontFamily: "'Roboto Slab',Times New Roman,Times,serif"}}>
        <div className="my-4">
          <Link
            to="/"
            style={{ color: "rgb(87 161 195)", textDecoration: "none" }}
          >
            Home&nbsp;
          </Link>
          <span className="" style={{ color: "rgb(51 51 51)" }}>
            ›
          </span>
          {/* ///////////////////////////////////////////////////////////////////////// */}
          <Link
            to={props.data.topInfo[0].linkTo1}
            style={{ color: "rgb(87 161 195)", textDecoration: "none" }}
          >
            <span style={{ color: "rgb(87 161 195)" }}>
              &nbsp;{props.data.topInfo[0].title1}&nbsp;
            </span>
          </Link>
          {/* ///////////////////////////////////// ////////////////////////////////////////////*/}
          <span className="" style={{ color: "rgb(51 51 51)" }}>
            ›
          </span>
          <span style={{ color: "rgb(87 161 195)" }}>
            &nbsp;{props.data.topInfo[0].title2}
          </span>
        </div>
        <p
          className="display-6"
          style={{ color: "rgb(83, 116, 44)", fontFamily:" Oxygen,sans-serif,Arial,Helvetica"}}
        >
          information about {props.data.topInfo[0].title2}{" "}
        </p>
        <div className="row">
          <div className="col-12 col-sm-2 pe-0 ">
            <img
            className='w-100'
            style={{width:"75%"}}
              src={props.data.topInfo[0].src}
              alt={props.data.topInfo[0].title2}
            />
          </div>
          <p className="col-12 col-sm-9 ps-3 " style={{ fontSize: "1.2rem", left:"-40px" }}>
            {props.data.topInfo[0].info}
          </p>
        </div>
        {/* ---- */}
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
            <div>{props.subdescribePage}</div>
          </div>
          <div className="col-12 col-md-3">
            <RightSidePart />
          </div>
        </div>
        <div className='pt-5'>
                    <Section3  />
                </div>
      </div>
    </>
  );
}

export default TabMenuLink;