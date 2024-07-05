import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function About() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const sectionStyle = {
    top: 0,
    left: 0,
    width: "100%" /* Cover the entire width of the viewport */,
    height: "80Vh",
    backgroundSize:
      "cover" /* Cover the entire element with the background image */,
    backgroundPosition: "center" /* Center the background image */,
    backgroundRepeat:
      "no-repeat" /* Prevent repeating of the background image */,
    backgroundColor: "black",
    border: "2px solid black",
  };

  return (
    <>
      <div style={sectionStyle}>
        <h1 style={{ textAlign: "center", color: "lightgreen" }}>About Me</h1>
        <div className="cont">
          <div className="row">
            <div className="col-md-6">
              <div className="left-content">
                <h2 className="text-warning">
                  <strong>Software Developer</strong>
                </h2>
                <p
                  style={{
                    fontSize: "20px",
                    color: "white",
                  }}
                >
                  My name is Prashant. I am a software developer proficient in
                  HTML, CSS, JavaScript, React, and Next.js. I am known for my
                  quick learning abilities and passionate dedication to coding.
                  I thoroughly enjoy tackling challenging problems and finding
                  creative solutions through programming. My core skill is based
                  on JavaScript and I love to do most of the things using
                  JavaScript.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="right-content">
                <img
                  src="IMG_20190530_213432.jpg"
                  className="img-fluid"
                  alt="ccv"
                  style={{ border: "5px solid lightgreen" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20vh" }}>
          <div
            style={{
              marginLeft: "150vh",
              color: "white",
              fontSize: "3vh",
            }}
          >
            {" "}
            <p>
              <img
                src="email.png"
                alt="tp"
                style={{ width: "4vh", height: "4vh", marginRight: "1vh" }}
              />
              jotkarprashant@gmail.com
            </p>
            <p>
              <img
                src="tel.png"
                alt="tp"
                style={{ width: "4vh", height: "4vh", marginRight: "1vh" }}
              />
              +91 9112627097{" "}
            </p>
            <p style={{ marginLeft: "-140vh", fontSize: "2vh" }}>
              <FontAwesomeIcon
                icon={faCopyright}
                style={{ color: "#ffffff", marginRight: "1vh" }}
              />
              Portfolio by{"      "}
              <p
                style={{
                  color: "lightgreen",
                  display: "inline-block",
                  fontWeight: "bold",
                }}
              >
                Prashant
              </p>
            </p>
            <p
                style={{  marginTop:"-10vh",marginLeft: "45vh" }}
                onClick={handleScrollToTop}
              >
                <img
                  src="up.png"
                  alt="up"
                  style={{ width: "6vh", height: "6vh" }}
                />
              </p>

          </div>
        </div>
      </div>
    </>
  );
}
