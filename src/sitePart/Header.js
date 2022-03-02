import React from "react";


import './style.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="">
          <div
            className="d-flex justify-content-between "
            style={{ border: "1px solid blue" }}
          >
            {/* for brand */}
            <div style={{ border: "2px solid red" }}>
              <img
                itemprop="logo"
                src="https://www.gardeningknowhow.com/wp-content/uploads/2018/03/minLogo.png"
                url="https://www.gardeningknowhow.com/"
                alt="Gardening Know How"
                style={{width:"200px"}}
              ></img>
            </div>
            {/* for top nav-right */}
            <div className="border border-white d-flex align-items-center ">
              <div className="d-flex ">
                <div className="d-flex justify-content-center ">
                  <div class="d-flex  justify-content-center px-3">
                    <div class="input-group input-group-lg h-25">
                      <input
                        type="text"
                        class="form-control form-control-lg rounded h-25"
                        placeholder="ENHANNCED BY Google"
                        aria-label="Type Keywords"
                        aria-describedby="basic-addon2"
                      />
                      <span
                        class="input-group-text border-0 "
                        id="basic-addon2"
                      >
                        <i class="fa fa-search "></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="border border-danger p-2 "
                  style={{ color: "yellow" }}
                >
                  <i
                    class="fa fa-envelope-open px-2 fa-lg"
                    style={{ color: "yellow" }}
                  ></i>
                  <span>Sing Up</span>
                </div>
                {/* social Media Icons */}
                <div className=" border border-warning d-flex align-items-center ">
                  <ul className=" m-0 p-0 ">
                    <a href="google.com" className="text-dark" >
                      <li className="fa fa-facebook fa-lg px-2"></li>
                    </a>
                    <a href="google.com" className="text-dark">
                      <li className="fa fa-twitter fa-lg px-2"></li>
                    </a>
                    <a href="google.com" className="text-dark">
                      <li className="fa fa-instagram fa-lg px-2"></li>
                    </a>
                    <a href="google.com" className="text-dark">
                      <li className="fa fa-video-camera fa-lg px-2"></li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>menue</div>
        </nav>
      </div>
    </header>
  );
}
