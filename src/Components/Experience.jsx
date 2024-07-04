import Navbar from "./Navbar";
import AnimationLottie from "./expLotti";
import exp from './/exp.json'

export default function Experience() {
  const imageUrl1 = "blackBg.jpg";
  const sectionStyle = {
    backgroundImage: `url(${imageUrl1})`,
    top: 0,
    left: 0,
    width: "100%" /* Cover the entire width of the viewport */,
    height: "100Vh",
    backgroundSize:
      "cover" /* Cover the entire element with the background image */,
    backgroundPosition: "center" /* Center the background image */,
    backgroundRepeat:
      "no-repeat" /* Prevent repeating of the background image */,
      border:"2px solid black"

  };

  return (
    <div style={sectionStyle}>

          
      <h1 style={{ marginLeft:"12vh", color: "lightgreen",marginTop:"12vh" }}>Experiences</h1>

      <div className="divC">
        <p className="ptext">(May 2022-Present) </p>
        <h1 className="exp">Project Engineer</h1>
        <p className="exp">Wipro Technologies</p>
        <img
          src="images.jpeg"
          alt="xx"
          style={{
            width: "50px",
            height: "50Px",
            marginTop: "-18vh",
            marginLeft: "5vh",
            borderRadius: "50%",
          }}
        />
      </div>
      <div className="divC" style={{ marginTop: "5vh" }}>
        <p className="ptext">(Jan 2022-May 2022) </p>

        <h1 className="exp">Intern</h1>
        <p className="exp">Wipro Technologies</p>
        <img
          src="images.jpeg"
          alt="xx"
          style={{
            width: "50px",
            height: "50Px",
            marginTop: "-18vh",
            marginLeft: "5vh",
            borderRadius: "50%",
          }}
        />
              <div style={{width:"800px",height:"500px",marginLeft:"-100vh",marginTop:"-60vh"}}>
              <AnimationLottie animationPath={exp} />
            </div>

      </div>
    </div>
  );
}
