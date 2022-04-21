import React from 'react';
import {Link} from "react-router-dom";
import { RightSidePart } from '../RightSidePart';
import pages from "../../moduleCss/pages.module.css";


function BottomLinkSubTab(props) {
  return (
    <>
      <div className="subinfo  row">
        <div className="col-9">
          <p style={{ fontSize: "1.2rem", marginTop: "15px" }}>
            Select a category
          </p>
          <div className="bottomInfo row">
            {/* Links bottom  */}
            {props.data.Links.map((dataLink, index) => {
              return (
                <>
                  <div className="col-6 ">
                    <Link
                      to={props.data.Links[index].linkTo}
                      className={`p-2 ps-3 d-block mb-2 ${pages.bottomLink}`}
                      // style={{ backgroundColor: "rgb(251 250 249)" }}
                    >
                      {props.data.Links[index].title}
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="col-3">
          <RightSidePart />
        </div>
      </div>
    </>
  );
}

export default BottomLinkSubTab;