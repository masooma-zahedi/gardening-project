import React, {useState} from "react";
import { Link } from "react-router-dom";
import ErrorBoundary from "../component/ErrorBoundary";
import {MainSec} from "../Data/dataSec1";
import MainCss from "../moduleCss/Main.module.css";


const AdTop = ()=>{
  return(
    <div className="add d-flex justify-content-center align-items-center" style={{height:250}}> 
      <div className="adinside bg-secondary p-4"   >
        <h2 className="text-white">this is a ads</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eius, dolor velit deleniti voluptas quibusdam vitae perspiciatis temporibus illum in.
      </div>
    </div>
  )
}

const RightSec1 = () => {
  return (
    <>
      <div className="border border-success mx-2" style={{ width: "33%" }}>
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
        <div className="border border-success mx-2" style={{ maxWidth: "50%" }}>
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
                  <div style={{ height: 100 }} className="">
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
        <div className="border border-success mx-1" style={{ maxWidth: "50%" }}>
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
    <div className="d-flex ">
      <LeftSec1/>
      <MidSec1/>
    </div>
  );
}
// ****************** Section 2 ****************************
const Section2 =()=>{
  return (
    <>
      <div className="border-top border-bottom p-3 h4 text-primary mt-5">
        POPULAR ARTICLE
      </div>
      {/* 888888 */}
      {MainSec.mainSec2.map((dataSec2)=>{
        return (
          <div className="d-flex flex-row  mb-3" key={dataSec2.id}>
            <div className="" style={{ width: 350}}>
              <img
                src={dataSec2.src}
                alt={dataSec2.title}
                className="w-100 h-100 ms-2"
              />
            </div>
            <div
              className=" ms-4 p-2 "
              style={{ backgroundColor: "rgb(251 250 249)" }}
            >
              {/* there is something wwrong in "to= " */}
              <Link to="" className="text-decoration-none   ">
                <span className="text-danger bg-warning p-1 lh-base h6 text-uppercase">
                  {dataSec2.title}
                </span>
                <p className="fs-4" style={{ color: "rgb(58 109 37)" }}>
                  {dataSec2.article}
                </p>
              </Link>
              <p className="text-danger">{dataSec2.auther}</p>
              <p>{dataSec2.desc}</p>
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
      <div className="d-flex flex-column flex-wrap " style={{ width: "65%" }}>
        <Section1 />
        <Section2 />
      </div>
    </>
  );
}

const Section3 = ()=>{
  return (
    <>
      <div className=" border-top border-bottom border-secondary p-2 fs-4 text-primary text-uppercase mb-2">
        recent article
      </div>
      {/* map for recent */}
      <div className="d-flex">
        {MainSec.mainSec3.map((dataSec3) => {
          return (
            // <div className="d-flex flex-row flex-wrap w-25 border border-success">
            <div key={dataSec3.id} className="m-2 w-25">
              <Link to="" className="text-decoration-none text-success ">
                <div className={` ${MainCss.hihi} position-relative`}>
                  <img
                    src={dataSec3.src}
                    alt={dataSec3.title}
                    className="w-100 h-100"
                  />
                  <div
                    className="d-inline-block bg-warning position-absolute h6 text-black m-0 text-uppercase p-1"
                    style={{ bottom: 10, left: 10 }}
                    id="nini"
                  >
                    {dataSec3.title}
                  </div>
                  {/* {
                    console.log(document.getElementById("nini").parentElement.nodeName)
                  } */}
                </div>
                <p className="m-0 fs-5 lh-sm">{dataSec3.desc}</p>
              </Link>
            </div>
            // </div>
          );
        })}
      </div>
      <Link to=""
        className=" d-flex justify-content-end text-decoration-none text-success mb-3"
        style={{ fontFamily: "'Seaweed Script',cursive" }}
      >
        <p className="m-0">
          More Article &#9654;
        </p>
      </Link>
    </>
  );
}
// ******************************* Section 4****************************
const Section4=()=>{
  return (
    <>
      <div className={`${MainCss.mainSec4}`} >
        <div className="container d-flex justify-content-between flex-wrap mt-5">
          <div className="px-3" style={{ width: "33%" }}>
            <h4
              className=" border-end-0 border-start-0 py-3 text-center"
              style={{
                border: "1px solid rgb(130 189 216)",
                color: "rgb(130 189 216)",
              }}
            >
              GETTING STARTED
            </h4>
            <ul className="list-group">
              {MainSec.mainSec4.leftSec4.map((dataLSec4) => {
                return (
                  <>
                    <li className="list-group-item border-0 p-0">
                      <Link to="" className="text-decoration-none d-flex ">
                        <div
                          className="w-75 "
                          style={{ maxWidth: "85px" }}
                        >
                          <img
                            src={dataLSec4.src}
                            alt={dataLSec4.title}
                            className="w-100 "
                          />
                        </div>
                        <p
                          className="fs-5 px-4  text-justify"
                          style={{ color: "rgb(58 109 37)" }}
                        >
                          {dataLSec4.title}
                        </p>
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="px-3" style={{ width: "33%" }}>
            <h4
              className=" border-end-0 border-start-0 py-3 text-center"
              style={{
                border: "1px solid rgb(130 189 216)",
                color: "rgb(130 189 216)",
              }}
            >
              SEASONAL
            </h4>
            <ul className="list-group">
              {MainSec.mainSec4.midSect4.map((dataMSec4) => {
                return (
                  <>
                    <li className="list-group-item border-0 p-0">
                      <Link to="" className="text-decoration-none d-flex ">
                        <div
                          className=" w-75 "
                          style={{ maxWidth: "85px" }}
                        >
                          <img
                            src={dataMSec4.src}
                            alt={dataMSec4.title}
                            className="w-100 "
                          />
                        </div>
                        <p
                          className="fs-5 px-4  text-justify"
                          style={{ color: "rgb(58 109 37)" }}
                        >
                          {dataMSec4.title}
                        </p>
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="px-3" style={{ width: "33%" }}>
            <h4
              className=" border-end-0 border-start-0 py-3 text-center"
              style={{
                border: "1px solid rgb(130 189 216)",
                color: "rgb(130 189 216)",
              }}
            >
              LEARN MORE...
            </h4>
            <ul className="list-group">
              {MainSec.mainSec4.rightSec4.map((dataRSec4) => {
                return (
                  <>
                    <li className="list-group-item border-0 p-0 ">
                      <Link to="" className="text-decoration-none d-flex ">
                        <div
                          className="w-75 "
                          style={{ maxWidth: "85px" }}
                        >
                          <img
                            src={dataRSec4.src}
                            alt={dataRSec4.title}
                            className="w-100 "
                          />
                        </div>
                        <p
                          className="fs-5 px-4  text-justify"
                          style={{ color: "rgb(58 109 37)" }}
                        >
                          {dataRSec4.title}
                        </p>
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

// ******************************** Footer*****************************







export default function Main() {
  return (
    <>
      <div className="container">
        <ErrorBoundary>
          <AdTop />
        </ErrorBoundary>
        <div className="d-flex justify-content-start ">
          <Sections />
          <ErrorBoundary>
            <RightTop />
          </ErrorBoundary>
        </div>
        <AdTop />
        <Section3/>
      </div>
      <Section4/>
    </>
  );
}
