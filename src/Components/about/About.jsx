import React from "react";
import "./about.css";


export default function About() {
  return (
    <div className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle-about">My introduction</span>

      <div className="about_container container grid">
        <img src="assets/about1.jpg" alt="" className="about_img" />

        <div className="about_data">
          <p className="about_description">
           " A web developer is at heart an interactive artist.
              They’re someone driven by a deep desire to create things.
               A web developer’s canvas is a user’s web browser."
            <br />
            I,m a Web developer, with extensive knowledge and experience,
            working in web technologies, fullstack, and MERNstack delivering quality work.
          </p>

          <div className="about_info">
            <div>
              <span className="about_info-title">10+</span>
              <span className="about_info-name">
                Frontend <br /> projects
              </span>
            </div>
            <div>
              <span className="about_info-title">05+</span>
              <span className="about_info-name">
                Fullstack <br /> projects
              </span>
            </div>
            <div>
              <span className="about_info-title">02+</span>
              <span className="about_info-name">
                MERNstack <br /> projects
              </span>
            </div>
          </div>

          <div className="about_buttons">
            <a
              download=""
              href="assets/pdf/Alexa-Cv.pdf"
              className="button button--flex"
            >
              Download CV <i className="uil uil-download-alt button_icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
