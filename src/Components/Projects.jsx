import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Projects() {
  return (
    <div
      style={{
        top: 0,
        left: 0,
        width: "100%" /* Cover the entire width of the viewport */,
        height: "100Vh",
        backgroundSize:
          "cover" /* Cover the entire element with the background image */,
        backgroundPosition: "center" /* Center the background image */,
        backgroundRepeat:
          "no-repeat" /* Prevent repeating of the background image */,
        backgroundColor: "black",
        border:"2px solid black"

      }}
    >
      <h1 style={{ textAlign: "center" ,marginTop:"12vh",color:"lightgreen"}}>Projects</h1>
      <div className="row ">
        <div className="col-sm-6">
          <div
            className="card w-60 mt-5 ms-5 bg-transparent"
            style={{
              height: "350px",
              borderRadius: "12px",
              border: "2px solid white",
            }}
          >
            <div className="card-body">
              <h3 className="card-title ms-3 text-decoration-underline text-warning">User-InfoCloud</h3>
              <br />
              <p
                className="card-text ms-3 me-5 font-Garamond"
                style={{  fontSize: "17px",fontWeight:"bold",color:"white" }}
              >
                Engineered a robust user information storage system using React,
                empowering users to effortlessly create accounts and securely
                store both personal and work-related information. <br />
                Crafted an intuitive user interface with HTML and CSS
                technologies, ensuring a seamless and visually appealing
                experience. <br />
                Leveraged MongoDB as the backend database, ensuring the secure
                storage and retrieval of data, thus enhancing the overall
                reliability and efficiency of the system.{" "}
              </p>
            </div>
            <Link
              to="https://github.com/Prashantjotkar/User_InfoCloud"
              className="mb-5 btn btn-outline-warning"
              style={{
                width: "300px",
                marginLeft: "22vh",
              }}

               target="_blank"
            rel="noopener noreferrer"
            >
              Source Code{" "}
            </Link>
          </div>
        </div>
        <div className="col-sm-6">
          <div
            className="card w-60 mt-5 ms-5 me-5 bg-transparent"
            style={{
              height: "350px",
              borderRadius: "12px",
              border: "2px solid white",
            }}
          >
            <div className="card-body">
              <h3 className="card-title ms-3 text-decoration-underline text-warning">Text-Converter</h3>
              <br />
              <p
                className="card-text ms-3 me-5 font-Garamond"
                style={{  fontSize: "17px",fontWeight:"bold" ,color:"white"}}
              >
                Developed a dynamic text conversion application utilizing
                JavaScript and React, showcasing versatility in both front-end
                development and React programming. <br/>Implemented key features,
                including text copying, bold formatting, and uppercase
                conversion, through adeptly crafted React functions.
              </p>
            </div>
            <Link
              to="https://github.com/Prashantjotkar/Text-Converter-React"
              className=" mb-3 btn btn-outline-warning"
              style={{
                width: "300px",
                marginLeft: "22vh",
              }}
               target="_blank"
            rel="noopener noreferrer"
            >
              Source Code{" "}
            </Link>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
