import { Parallax } from "react-parallax";
import classes from "./Home.module.css";
import LinkedinIcon from "../Icons/Linkedin";
import MultipleHexagon from "../Icons/MultipleHexagon";
import PdfIcon from "../Icons/PdfIcon";
import GitHubIcon from "../Icons/GitHubIcon";
import pdfFile from "../static/MehdijaSekic_CV.pdf";
import AnimatedSVG from "../AnimatedSVG/AnimatedSVG";

const handleDownload = () => {
  // Create a virtual link element
  const link = document.createElement("a");
  link.href = pdfFile;
  link.download = "MehdijaSekic_CV";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};

const Home = () => {
  return (
    <div className={classes.main}>
      <div className={classes.bckg}>
        <div className={classes.container}>
          <div className={classes.leftSide}>
            <div className={classes.leftContent}>
              <h2 className={classes.mainHeading}>Mehdija Šekić</h2>
              <div className={classes.multipleHexagon}>
                <MultipleHexagon />
              </div>
            </div>
            <div className={classes.content}>
              <MultipleHexagon />
            </div>
          </div>
          <div className={classes.rightSide}></div>
        </div>
      </div>
      <div className={classes.parallax}>
        <Parallax
          bgImage={require("../Image/imgpar.jpg")}
          blur={{ min: -1, max: 3 }}
          strength={500}
        >
          <div className={classes.parallaxContent}>
            <div className={classes.parallaxMain}>
              <div className={classes.parallaxCard}>
                <div className={classes.parallaxCardBorder}>
                  <p className={classes.parallaxTitle}>About me</p>
                  <p className={classes.parallaxText}>
                    <span>
                      I was born (27.06.2001) and have completed primary school
                      in Sanski Most and electrical engineering high school in
                      Bihać. After completing secondary education, I enrolled in
                      college in Mostar. I am currently in my final year of the
                      Faculty of Information Technologies.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      I have ability to learn quickly, listen and communicate
                      with others, correctly and motivated, ease of analyzing
                      and solving problems. I am adaptable, and a teamwork
                      player. In general I am an optimistic,energetic and
                      positive person.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      I love to travel and explore, play social games and meet
                      new people.I enjoy playing chess, listening to music,
                      working out and playing team and individual quizzes.
                    </span>
                    <br></br>
                    <br></br>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
      <div className={classes.skills}>
        <AnimatedSVG />
        {/* <div className={classes.skillText}>
          <h3 className={classes.headerSkills}>Skills</h3>
          <p className={classes.par}>
            I have skills in following programming languages and technologies:
            C++ and C# (Gained knowledge in high school and continued to develop
            skills during my faculty studies). Java (learned it by myself so I
            can applied for Java instructor position). Angular and .NET with
            SSMS for database (Successfully designed and implemented a
            full-stack web application for a furniture web shop as a part of my
            faculty project). React (learned it on my internship by watching
            Udemy course and asynchronous working on assigned tasks)
          </p>
        </div>
        <div className={classes.skillSet}></div> */}
      </div>
      <div className={classes.horizontalLine}></div>
      <div className={classes.info}>
        <div className={classes.squares}>
          <div className={classes.information}>
            <GitHubIcon />
          </div>
          <div className={classes.information}>
            <LinkedinIcon />
          </div>
          <div className={classes.information} onClick={handleDownload}>
            <PdfIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
