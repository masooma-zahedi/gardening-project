import React, {useState} from "react";
import { Link } from "react-router-dom";
import ErrorBoundary from "../component/ErrorBoundary";
import {MainSec} from "../Data/dataSec1";
import MainCss from "../moduleCss/Main.module.css";
import { Section3, Section4 } from "../component/SectionsBottomPage";
import { ScrollUp } from "../component/BackToTopButton";
import MainHerbs from "./gardenPage/subPageGarden/ediblePage/Herbs";

const AdTop = ()=>{
  return(
    <div className="add d-flex justify-content-center align-items-center" style={{height:250}}> 
      <div className="adinside bg-warning p-4"   >
        <h2 className="text-white">this is a ads </h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eius, dolor velit deleniti voluptas quibusdam vitae perspiciatis temporibus illum in.
      </div>
    </div>
  )
}

const RightSec1 = () => {
  return (
    <>
      <div className=" col-12 col-md-3" >
        <div className=" d-flex justify-content-between  align-items-center ">
              <div className={`${MainCss.leftFlo}`}></div>
              <div className={`${MainCss.textMid}`}>Explore</div>
              <div className={`${MainCss.rightFlo}`}></div>
        </div>
          <p className={`${MainCss.sec1Para} border-bottom pb-4`}>
            <b>Did You Know?</b>
            Gardening Know How has three websites. Check out our blog filled
            with great articles from our weekend gardening warriors and a
            Questions and Answers website where you can ask a pro gardener.
          </p>
      </div>
    </>
  );
};
// ********************* Section 1 *********************
const Section1 = ()=>{
    const LeftSec1 = () => {;
      return (
        <div className="" >
          <div
            className={`title p-3 h5 border-secondary border-bottom border-top ${MainCss.textTitle} ${MainCss.bgLink}`}
          >
            FEATURED ARTICLE
          </div>
          {MainSec.leftSec1.map((data) => {
            // console.log(data.id);
            return (
              <div className={` ${MainCss.leftarticle} pb-2`} key={data.id}>
                <Link
                  to={data.to}
                  className={`text-decoration-none ${MainCss.desLeft}  h6`}
                >
                  <div style={{ height: 150 }} className="">
                    <img
                      src={data.src}
                      alt={data.name}
                      className="w-100 h-100"
                    />
                  </div>
                  <div className="p-2 pb-0 ">{data.desc}</div>
                </Link>
              </div>
            );
          })}
        </div>
      );
    }

    const MidSec1= () => {
      return (
        <div className="" >
          {MainSec.midSect1.map((data) => {
            return (
              <div className={` ${MainCss.leftarticle} pb-2`} key={data.name}>
                <Link 
                  to={data.to}
                  className={`text-decoration-none ${MainCss.desLeft} `}
                >
                  <div style={{ height: 350 }} className="">
                    <img
                      src={data.src}
                      alt={data.name}
                      className="w-100 h-100"
                    />
                  </div>

                  <div className="p-2 ">
                    <span
                      className={`bg-warning text-black d-inline-block  rounded p-1 `}
                    >
                      {data.title}
                    </span>
                    <span className="h5">{data.desc}</span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      );
    }

  return (
    <div className="row col-12">
      <div className="col-12 col-md-6">
        <LeftSec1/>
      </div>
      <div className="col-12 col-md-6">
        <MidSec1/>
      </div>
    </div>
  );
}
// ****************** Section 2 ****************************
const Section2 =()=>{
  return (
    <>
      <div className="border-top border-bottom  h4 text-primary mt-5">
        POPULAR ARTICLE
      </div>
      {/* 888888 */}
      {MainSec.mainSec2.map((dataSec2)=>{
        return (
          <div className="row mb-3" key={dataSec2.id}>
            <div className="col-md-3 col-sm-12" style={{maxHeight:"200px"}} >
              <img
                src={dataSec2.src}
                alt={dataSec2.title}
                className="w-100 h-100 ms-2"
              />
            </div>
            <div className="col-md-9  col-sm-12"
              style={{ backgroundColor: "rgb(251 250 249)" }}
            >
              <Link to={dataSec2.linkTitle} onClick={ScrollUp} className="text-decoration-none">
                <span className="text-danger bg-warning p-1 lh-base h6 text-uppercase">
                  {dataSec2.title}
                </span>
                <p className=" fs-4" style={{ color: "rgb(58 109 37)" }}>
                  {dataSec2.article}
                </p>
              </Link>
              <p className="text-danger">{dataSec2.auther}</p>
              <p className="d-none d-lg-block">{dataSec2.desc}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

const RightTop =()=>{
  return <RightSec1 />;
}

const Sections = () =>{
  return (
    <>
      <div className=" col-12 col-md-9" >
        <Section1 />
        <Section2 />
      </div>
    </>
  );
}



export default function Main() {
  return (
    <>
      <div className="container  ">
        <ErrorBoundary>
          <AdTop />
        </ErrorBoundary>
        <div className=" row">
          <Sections />
          <ErrorBoundary>
            <RightTop />
          </ErrorBoundary>
        </div>
        <AdTop />
        <Section3/>
      </div>
      <Section4 />
    </>
  );
}
