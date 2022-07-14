import { Link } from "react-router-dom";
import { MainSec } from "../Data/dataSec1";
import MainCss from '../moduleCss/Main.module.css'
function Section3 (){
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
                      <li
                        className="list-group-item border-0 p-0"
                        key={dataLSec4.id}
                      >
                        <Link to="" className="text-decoration-none d-flex ">
                          <div className="w-75 " style={{ maxWidth: "85px" }}>
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

  export {Section3 , Section4} ;