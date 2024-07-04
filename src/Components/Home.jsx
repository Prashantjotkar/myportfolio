import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const imageUrl = "Home.jpg";
  const sectionStyle = {
    backgroundImage: `url(${imageUrl})`,
    top: "0",
    height: "100vh",
    width:"100%",
    backgroundPosition: "center" /* Center the background image */,
  };
  return (
    <div style={sectionStyle}>
      <Navbar />

      <div
        style={{
          color: "white",
          marginTop: "20vh",
          marginLeft: "10Vh",
          fontSize: "50px",
        }}
      >
        <h5 className="text-success">Hi, My name is </h5>
        <strong>Prashant Jotkar.</strong>
        <p>I Build Things For the web.</p>
      </div>

      <div
        style={{
          marginTop: "4vh",
          marginLeft: "8vh",
        }}
      >
        <Link
          to="https://www.linkedin.com/in/prashant-jotkar-a3367a18b/"
          target="_blank"
          style={{
            color: "#74C0FC",
            fontSize: "40px",
            marginTop: "3vh",
            marginLeft: "2Vh",
          }}
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>

        <Link
          to="https://leetcode.com/u/developer_2001/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="download.png"
            alt="xcv"
            width={35}
            height={35}
            style={{ marginLeft: "2vh", marginBottom: "3vh" }}
          />
        </Link>
        <Link
          to="https://github.com/Prashantjotkar"
          target="_blank"
          size="2xl"
          style={{
            color: "#74C0FC",
            fontSize: "38px",
            marginTop: "3vh",
            marginLeft: "2Vh",
          }}
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </div>
      <button
        className="btn btn-warning"
        style={{
          color: "black",
          fontWeight: "bold",
          height: "7vh",
          borderRadius: "12vh",
          width: "25vh",
          marginTop: "3vh",
          marginLeft: "10vh",
        }}
      >
        <Link
          to="https://drive.google.com/file/d/1GPmbNxNNNmbSssWGJjAr3XLZZl2HurG6/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          GET RESUME <img src="file-earmark-arrow-down-fill.svg" />
        </Link>
      </button>
    </div>
  );
}
