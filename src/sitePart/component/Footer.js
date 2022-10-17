import React from "react";
import { Link } from "react-router-dom";

import FooterCss from "../moduleCss/Footer.module.css"

export default function Footer() {
  const LeftSide=()=>{
    return (
      <>
        <div
          className="row no-gutters mx-3"
          style={{ borderTop: "2px solid rgb(85 124 33)" }}
        >
          <div className="col-12 w-100 p-5 my-2 border border-white border-2"  >
            <img
              src="https://www.gardeningknowhow.com/wp-content/uploads/2018/03/minLogo.png"
              alt=""
              className="w-100 "
            />
          </div>
          <Link
            to="https://blog.gardeningknowhow.com/"
            className="col-6 p-0 text-center d-none d-lg-block  text-decoration-none text-white"
          >
            <div
              className="border border-2 border-white p-4 me-1 h5 position-relative"
              style={{ background: "rgb(167 146 65)" }}
            >
              <div className={`${FooterCss.linkicon}`}></div>
              Visit Our Blog
            </div>
          </Link>
          <Link
            to="https://questions.gardeningknowhow.com/"
            className="col-6 p-0 text-center text-decoration-none text-white d-none d-lg-block"
          >
            <div
              className="p-4 ms-1 h5 border border-2 border-white position-relative"
              style={{ background: "rgb(51 141 201)" }}
            >
              <div className={`${FooterCss.linkicon}`}></div>Q & A
            </div>
          </Link>
        </div>
      </>
    );
  }

  const MiddleSide =()=>{
    return (
      <>
        <div
          className="row no-gutters mx-3"
          style={{ borderTop: "2px solid rgb(85 124 33)" }}
        >
          <h4 className="col-12 py-1">Navigate</h4>
          <div className={`col-6 ${FooterCss.middleside}`}>
            <ul className="list-unstyled">
              <li>
                <Link to="" className="">
                  Home
                </Link>
              </li>
              <li>
                <Link to="">Gardens</Link>
              </li>
              <li>
                <Link to="">HousePlants</Link>
              </li>
              <li>
                <Link to="">Problems</Link>
              </li>
              <li>
                <Link to="">Lawn Care</Link>
              </li>
              <li>
                <Link to="">Composing</Link>
              </li>
              <li>
                <Link to="">Gardening Help</Link>
              </li>
            </ul>
          </div>
          <div className={`col-6 ${FooterCss.middleside}`}>
            <ul className="list-unstyled">
              <li>
                <Link to="" className="">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="">About Us</Link>
              </li>
              <li>
                <Link to="">Advertising</Link>
              </li>
              <li>
                <Link to="">Press</Link>
              </li>
              <li>
                <Link to="">Job Opportunities</Link>
              </li>
              <li>
                <Link to="">Terms of Use</Link>
              </li>
              <li>
                <Link to="">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }

  const RightSide =()=>{
    return (
      <>
        <div
          className=" no-gutters mx-3"
          style={{ borderTop: "2px solid rgb(85 124 33)" }}
        >
          <h4 className="py-1">Free Garden Guides</h4>
          <div className={`${FooterCss.rightFoot}`}>

            <Link
              to=""
              className="text-decoration-none text-white h6 border-bottom border-white d-inline-block mt-2"
            >
              Explore our most popular garden guides{" "}
            </Link>
            <h4 className="mt-4">Stay Informed</h4>
            <p className="h6 my-4">
              Keep up to date with all that's happening in and around the garden.
              Sign up for our newsletter.
            </p>
            <form action="" className="row">
              <div className="col-8 row pe-3">
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="p-2 "
                />
              </div>
              <button
                type="submit"
                className="col-4 btn border border-white text-white rounded-0"
                style={{ background: " rgb(250 255 83 / 75%)" }}
              >
                Sign Up
              </button>
            </form>
            <div className={`mt-4 p-0  ${FooterCss.footicon}`}>
              <Link
                to="https://www.facebook.com/gardeningknowhow"
                className="text-dark"
              >
                <li className="fa fa-facebook fa-lg px-2 " ></li>
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
            </div>
          </div>
        </div>
      </>
    );
  }



  return (
    <footer className={`${FooterCss.footerstyle}`}>
      <div className="container row pt-5">
        <div className="col-12  col-lg-4" >
          <LeftSide />
        </div>
        <div className="col-12 col-sm-6 col-lg-4" >
          <MiddleSide />
        </div>
        <div className="col-12 col-sm-6 col-lg-4" >
          <RightSide/>
        </div>
        <p className={`ps-3 mt-4 ${FooterCss.copyright}`}> &copy; 2022 Gardening Know How</p>
      </div>
    </footer>
  );
}
