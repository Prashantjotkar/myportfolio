import Navbar from "./Navbar";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3,
  faNodeJs,
  faBootstrap,
  faAngular,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skills() {
  const imageUrl1 = "blackBg.jpg";
  const sectionStyle = {
    backgroundImage: `url(${imageUrl1})`,
    top: 0,
    left: 0,
    width: "100%" /* Cover the entire width of the viewport */,
    height: "70Vh",
        backgroundSize:
      "cover" /* Cover the entire element with the background image */,
    backgroundPosition: "center" /* Center the background image */,
    backgroundRepeat:
      "no-repeat" /* Prevent repeating of the background image */,
      border:"2px solid black"
  };

  return (
    <div style={sectionStyle}>
      <div id="container">
        <div
          style={{
            width: "270px",
            height: "270px",
            borderRadius: "50%",
            marginLeft: "-13vh",
            border: "5px solid lightgreen",
            marginTop: "-21vh",

          }}
        >
          <h1
            style={{
              fontFamily: "fangsong",
              fontSize: "60px",
              fontWeight: "bold",
              color: "#90EE90",
              textAlign:"center",
              marginTop: "12vh",

            }}
          >
            Skills
          </h1>
        </div>
        <div className="item">
          <FontAwesomeIcon
            icon={faReact}
            style={{
              borderRadius: "200px",
              fontSize: "64px",
              color: "#74C0FC",
            }}
          />
        </div>
        <div className="item">
          {" "}
          <FontAwesomeIcon
            icon={faJs}
            style={{
              borderRadius: "200px",
              fontSize: "64px",
              color: "#F0DB4F",
            }}
          />
        </div>
        <div className="item">
          {" "}
          <FontAwesomeIcon
            icon={faHtml5}
            style={{
              borderRadius: "200px",
              fontSize: "64px",
              color: "#e34c26",
            }}
          />
        </div>
        <div className="item">
          {" "}
          <FontAwesomeIcon
            icon={faCss3}
            style={{
              borderRadius: "200px",
              fontSize: "64px",
              color: "#2965f1",
            }}
          />
        </div>
        <div className="item">
          {" "}
          <FontAwesomeIcon
            icon={faNodeJs}
            style={{ borderRadius: "200px", fontSize: "64px", color: "green" }}
          />
        </div>
        <div className="item">
          {" "}
          <FontAwesomeIcon
            icon={faBootstrap}
            style={{
              borderRadius: "200px",
              fontSize: "64px",
              color: "#563d7c",
            }}
          />
        </div>
        <div className="item">
          {" "}
          <FontAwesomeIcon
            icon={faAngular}
            style={{ borderRadius: "200px", fontSize: "64px", color: "red" }}
          />
        </div>
      </div>
    </div>
  );
}
