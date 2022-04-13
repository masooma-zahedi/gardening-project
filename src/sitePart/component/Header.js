import React ,{useState}from "react";
import {Link} from "react-router-dom";
import headercss from "../moduleCss/Header.module.css";



const NavTop = ()=>{
  return (
    <div
      className="d-flex justify-content-between align-self-stretch "
    >
      {/* for brand */}
      <div >
        <img
          // itemprop="logo"
          src="https://www.gardeningknowhow.com/wp-content/uploads/2018/03/minLogo.png"
          url="https://www.gardeningknowhow.com/"
          alt="Gardening Know How"
          style={{ width: "200px" }}
        ></img>
      </div>
      {/* for top nav-right */}
      <div className=" d-flex align-items-center ">
        <div className="d-flex ">
          <div className="d-flex justify-content-center ">
            <div className="d-flex  justify-content-center px-3">
              <div className="input-group input-group-lg h-25">
                <input
                  type="text"
                  className="form-control form-control-lg rounded h-25"
                  placeholder="ENHANNCED BY Google"
                  aria-label="Type Keywords"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text border-0 " id="basic-addon2">
                  <i className="fa fa-search "></i>
                </span>
              </div>
            </div>
          </div>
          <div
            className=" p-2 "
            style={{ color: "yellow" }}
          >
            <Link to="kj" style={{color:"yellow"}}>
              <i
                className="fa fa-envelope-open px-2 fa-lg"
                style={{ color: "yellow" }}
              ></i>
              <span>Sign Up</span>
            </Link>
          </div>
          {/* social Media Icons */}
          <div className="  d-flex align-items-center ">
            <ul className=" m-0 p-0 ">
              <Link
                to="https://www.facebook.com/gardeningknowhow"
                className="text-dark"
              >
                <li className="fa fa-facebook fa-lg px-2"></li>
              </Link>
              <Link to="google.com" className="text-dark">
                <li className="fa fa-twitter fa-lg px-2"></li>
              </Link>
              <Link to="google.com" className="text-dark">
                <li className="fa fa-instagram fa-lg px-2"></li>
              </Link>
              <Link to="google.com" className="text-dark">
                <li className="fa fa-video-camera fa-lg px-2"></li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// 888888888888888888888888888888888888888888888888888888888888888888
const Navbottom =()=>{
  
  return (
    <div className={headercss.navb}>
      <ul className={headercss.navul}>
        <li className={headercss.liclass}>
          <Link to="/" className={headercss.topmenu}>
            Home
          </Link>
        </li>
        <li className={headercss.liclass}>
          <Link to="gardens" className={headercss.topmenu}>
            Gardens
          </Link>
          <div className={headercss.subdiv}>
            <Link to="hi" className={headercss.submenue}>
              Edible Gardens
            </Link>
            <Link to="hi" className={headercss.submenue}>
              Gardening How To
            </Link>
            <Link to="hi" className={headercss.submenue}>
              Ornamental Gardens
            </Link>
            <Link to="hi" className={headercss.submenue}>
              Special Gardens
            </Link>
          </div>
        </li>
        <li className={headercss.liclass}>
          <Link to="houseplant" className={headercss.topmenu}>
            Houseplant
          </Link>
          <div className={headercss.subdiv}>
            <Link to="hi" className={headercss.submenue}>
              Specific Houseplants
            </Link>
            <Link to="hi" className={headercss.submenue}>
              General Houseplants Care
            </Link>
          </div>
        </li>

        <li className={headercss.liclass}>
          <Link to="problems" className={headercss.topmenu}>
            Problems
          </Link>
          <div className={headercss.subdiv}>
            <Link to="hi" className={headercss.submenue}>
              Plant Diseases
            </Link>
            <Link to="hi" className={headercss.submenue}>
              Enviromental Problems
            </Link>
            <Link to="hi" className={headercss.submenue}>
              Garden Pests
            </Link>
            <Link to="hi" className={headercss.submenue}>
              Weeds
            </Link>
          </div>
        </li>
        <li className={headercss.liclass}>
          <Link to="/Lawn Care" className={headercss.topmenu}>
            Lawn Care
          </Link>
          <div className={headercss.subdiv}>
            <Link to="hi" className={headercss.submenue}>
              General Lawn Care
            </Link>
            <Link to="hi" className={headercss.submenue}>
              Lawn Substitutes
            </Link>
            <Link to="hi" className={headercss.submenue}>
              Specific Lawn Grasses
            </Link>
          </div>
        </li>
        <li className={headercss.liclass}>
          <Link to="/Composting" className={headercss.topmenu}>
            Composting
          </Link>
          <div className={headercss.subdiv}>
            <Link to="hi" className={headercss.submenue}>
              Composting Basics
            </Link>
            <Link to="hi" className={headercss.submenue}>
              Compost Ingredient
            </Link>
            <Link to="hi" className={headercss.submenue}>
              Composting Manures
            </Link>
            <Link to="hi" className={headercss.submenue}>
              Vermicomposting
            </Link>
          </div>
        </li>
        <li className={headercss.liclass}>
          <Link to="/Gardening" className={headercss.topmenu}>
            Gardening
          </Link>
          <div className={headercss.subdiv}>
            <Link to="hi" className={headercss.submenue}>
              Our Blog
            </Link>
            <Link to="hi" className={headercss.submenue}>
              Ask A Gardening Question
            </Link>
            <Link to="hi" className={headercss.submenue}>
              School & Community Garden
            </Link>
            <Link to="hi" className={headercss.submenue}>
              Find a Local Extention Office
            </Link>
            <Link to="hi" className={headercss.submenue}>
              USDA Planting Zones
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}




export default function Header() {
  return (
    <header className={headercss.header}>
      <div className="container py-4">
        <nav className="d-flex flex-column align-items-end">
          <NavTop/>
          <Navbottom/>
        </nav>
      </div>
    </header>
  );
}
