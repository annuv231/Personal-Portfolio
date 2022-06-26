import React from "react";
import TypeEffect from "../TypeEffect/typeEffect";
import "./intro.css";
import Twitter from "../../img/twitter.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
const Intro = () => {
  return (
    <div className="i-intro">
      <div className="i-left">
        <div className="i-name">
          <span className="i-name-name">Amlendra Verma</span>
          <span>{<TypeEffect className="typeEffect" />}</span>
          <span className="i-name-bio">
            I'm full stack developer with MERN stack and programming enthusiast
            person and I love to solve problems. I have very good knowledge of
            Data Structure and Algorithm. Skilled in java and c++ and have very
            good knowledge of database and operating system as well.{" "}
          </span>
        </div>
        <button className="button-2">Hire Me</button>
      </div>
      <div className="i-right">
        {" "}
        <div className="i-social">
          <a href="https://twitter.com/amlendraJS">
            <img src={Twitter} alt="twitter-icon" className="i-twitter" />
          </a>
          <a href="https://github.com/annuv231" className="i-github">
            <img src={Github} alt="github-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/amlendra/"
            className="i-linkedin"
          >
            <img src={LinkedIn} alt="linkedin-icon" />
          </a>
          <a href="https://instagram.com/aml3ndra" className="i-instagram">
            <img src={Instagram} alt="instagram-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
