import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-transparent"
        style={{ position: "relative" }}
      >
        <Link
          to="/"
          className="navbar-brand  fs-2 ms-5 mt-3 text-white"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          <FontAwesomeIcon
            icon={faProductHunt}
            size="2xl"
            style={{ color: "lightgreen", marginLeft: "5vh", marginTop: "2vh" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end "
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item btn">
              <Link
                className="nav-link fs-5 me-3 mt-1 text-white"
                to="/skills"
                spy={true}
                smooth={true}
                duration={500}
              >
                <p className="ll">Skills</p>{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fs-5 me-3 mt-1 text-white"
                to="/experience"
                spy={true}
                smooth={true}
                duration={500}
              >
                <p className="ll">Experience</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link fs-5 me-3 mt-1 text-white "
                to="/projects"
              >
                <p className="ll">Projects</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fs-5 me-3 mt-1 text-white"
                to="/about"
                spy={true}
                smooth={true}
                duration={500}
              >
                <p className="ll">About Me</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
