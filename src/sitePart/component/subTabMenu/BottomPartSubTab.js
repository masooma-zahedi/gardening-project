import React from 'react';
import {Link} from "react-router-dom";
import {RightSidePart} from "../../component/RightSidePart";
import pages from "../../moduleCss/pages.module.css"

function BottomPartSubTab(props) {
  return (
    <>
      <div className="subinfo row">
        <div className="col-9">
          <div className={`${pages.getStart}`}>
            <div>
              <span>GET STARTED</span>
            </div>
            <div className="row">
              <div className="col-3">
                <Link to="">
                  <img
                    src={props.dataBottom.subInfo[0].getStarted[0].src}
                    alt={props.dataBottom.subInfo[0].getStarted[0].alt}
                    className="w-100"
                  />
                </Link>
              </div>
              <div className="col-9">
                <Link
                  to=""
                  className="h5 text-decoration-none mb-1"
                  style={{ color: "rgb(192 48 133)" }}
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
            return (
              <>
                <div className="row mt-4 ">
                  <div className="col-3" style={{ height: "188px" }}>
                    <Link to="">
                      <img
                        src={props.dataBottom.subInfo[0].afterStart[index].src}
                        alt={props.dataBottom.subInfo[0].afterStart[index].alt}
                        className="w-100 h-100"
                      />
                    </Link>
                  </div>
                  <div className="col-9 pt-2">
                    <Link
                      to=""
                      className="h5 text-decoration-none mb-1"
                      style={{ color: "rgb(192 48 133)" }}
                    >
                      {props.dataBottom.subInfo[0].afterStart[index].title}
                    </Link>
                    <div
                      className="mb-1 fs-5"
                      style={{ color: "rgb(58 109 37)" }}
                    >
                      {props.dataBottom.subInfo[0].afterStart[index].author}
                    </div>
                    <p className="fs-5 m-0">
                      {props.dataBottom.subInfo[0].afterStart[index].desc}
                    </p>
                  </div>
                </div>
              </>
            );
          })}

          <div>
            <div>
              <Link to="">
                <img src="" alt="" />
              </Link>
            </div>
            <div>
              <Link to=""></Link>
              <div></div>
              <p></p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <RightSidePart />
        </div>
      </div>
    </>
  );
}

export default BottomPartSubTab;