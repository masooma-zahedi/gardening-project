import React from 'react';
import {Link} from "react-router-dom";
import {RightSidePart} from "../../component/RightSidePart";
import pages from "../../moduleCss/pages.module.css";
import { ScrollUp } from '../BackToTopButton';

function BottomPartSubTab(props) {
  return (
    <>
      <div className="subinfo row">
        <div className="col-12 col-md-9">
          <div className={`${pages.getStart}`}>
            <div>
              <span>GET STARTED</span>
            </div>
            <div className="row">
              <div className="col-3">
                <Link to={props.dataBottom.subInfo[0].getStarted[0].linkTo} >
                  <img
                    src={props.dataBottom.subInfo[0].getStarted[0].src}
                    alt={props.dataBottom.subInfo[0].getStarted[0].alt}
                    className="w-100" style={{maxHeight:200}}
                  />
                </Link>
              </div>
              <div className="col-9">
                <Link
                  to={props.dataBottom.subInfo[0].getStarted[0].linkTo}
                  className="h5 text-decoration-none mb-1"
                >
                  {props.dataBottom.subInfo[0].getStarted[0].title}
                </Link>
                <div className="mb-1 fs-5" style={{ color: "rgb(58 109 37)" }}>
                  {props.dataBottom.subInfo[0].getStarted[0].author}
                </div>
                <p className="fs-5">
                  {props.dataBottom.subInfo[0].getStarted[0].desc}
                </p>
              </div>
            </div>
          </div>
          {props.dataBottom.subInfo[0].afterStart.map((data, index) => {
              const BoxInfo = (props)=>{
                  return (
                    <>
                    {/* console.log(data.id); */}
                      <div
                        className="row mt-4 mb-4 "
                        // key={data.id}
                      >
                        {/* {console.log(data.id)} */}
                        <div className="col-3" style={{ height: "188px" }}>
                          <Link 
                            to={data.linkTo}
                            onClick={ScrollUp}
                            // /////???????????????????????????????????????????????
                            >
                            <img
                              src={data.src}
                              alt={data.alt}
                              className="w-100 h-100"
                            />
                          </Link>
                        </div>
                        <div className="col-9 pt-2  ">
                          <Link
                            to={data.linkTo}
                            onClick={ScrollUp}
                            className="h5 text-decoration-none mb-1"
                            style={{ color: "rgb(192 48 133)" }}
                          >
                            {data.title}
                          </Link>
                          <div
                            className="mb-1 fs-5"
                            style={{ color: "rgb(58 109 37)" }}
                          >
                            {data.author}
                          </div>
                          <p className="fs-5 m-0">
                            {data.desc}
                          </p>
                        </div>
                      </div>
                    </>
                  );
              }
            return (
              <>
                <BoxInfo/>
              </>
            );
          })}
        </div>
        <div className="col-12 col-md-3">
          <RightSidePart />
        </div>
      </div>
    </>
  );
}

export default BottomPartSubTab;