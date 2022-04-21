import React from 'react';
import { Link } from "react-router-dom";
import { rightSidePages } from "../Data/dataRightSidePages";


 export function RightSidePart() {
    const hoverLink = (e)=>{
        console.log(e.target);
        e.target.style.textDecoration = "underline";
    }
    const hoverOut =(e)=>{
      e.target.style.textDecoration = "none";
    }
      return (
    <>
      <div className="">
        {/* ***** Newest Article Part****** */}

        <div className="">
          <h4 className="text-primary border border-2 border-secondary border-left-0 border-end-0 border-start-0 my-3 py-3 mt-5 text-center">
            Newest Article
          </h4>
          {rightSidePages.newestArticle.map((data,index) => {
                              
            return (
              <>
                <div
                  className=" mb-3"
                  key={data.id}
                  style={{ background: "rgb(251 250 249)" }}
                >
                  {/* {console.log(data.id)} */}
                  <Link
                    to={data.link}
                    className="d-flex flex-wrap text-decoration-none"
                  >
                    <div className="w-25 ">
                      <img
                        src={data.src}
                        alt={data.title}
                        className="w-100 h-100"
                      />
                    </div>
                    <div className="w-75 ps-2" style={{ height: "80px" }}>
                      <p className="m-0" style={{ color: "rgb(252 175 27)" }}>
                        {data.title}
                      </p>
                      <p
                        onMouseEnter={hoverLink}
                        onMouseLeave={hoverOut}
                        className="m-0"
                        style={{ color: "rgb(48 81 0)" }}
                      >
                        {data.desc}
                      </p>
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="">ads</div>
      <div className="">
        <h4 className="text-primary border border-2 border-secondary border-left-0 border-end-0 border-start-0 my-3 py-3 mt-5 text-center">
          You might also like
        </h4>
        {rightSidePages.youMightAlsoLike.map((data) => {
          return (
            <>
              <div
                className="mb-3"
                key={data.id}
                style={{ background: "rgb(251 250 249)" }}
              >
                {/* {console.log(data.id)} */}
                <Link
                  to={data.link}
                  className="d-flex flex-wrap text-decoration-none"
                >
                  <div className="w-25 " style={{ height: "80px" }}>
                    <img
                      src={data.src}
                      alt={data.title}
                      className="w-100 h-100"
                    />
                  </div>
                  <div className="w-75 ps-2">
                    <p className="m-0" style={{ color: "rgb(252 175 27)" }}>
                      {data.title}
                    </p>
                    <p
                      onMouseEnter={hoverLink}
                      onMouseLeave={hoverOut}
                      className="m-0"
                      style={{ color: "rgb(48 81 0)" }}
                    >
                      {data.desc}
                    </p>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
      <div className="">
        <h4 className="text-primary border border-2 border-secondary border-left-0 border-end-0 border-start-0 my-3 py-3 mt-5 text-center">
          On The Blog
        </h4>
        {rightSidePages.OnTheBlog.map((data) => {
          return (
            <>
              <div
                className=" mb-3"
                key={data.id}
                style={{ background: "rgb(251 250 249)" }}
              >
                {/* {console.log(data.id)} */}
                <Link
                  to={data.link}
                  className="d-flex flex-wrap text-decoration-none"
                >
                  <div className="w-25 " style={{ height: "80px" }}>
                    <img
                      src={data.src}
                      alt={data.title}
                      className="w-100 h-100"
                    />
                  </div>
                  <div className="w-75 ps-2">
                    <p
                      onMouseEnter={hoverLink}
                      onMouseLeave={hoverOut}
                      className="mt-3"
                      style={{ color: "rgb(48 81 0)" }}
                    >
                      {data.desc}
                    </p>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
      <div className="">ads</div>
    </>
  );
}

