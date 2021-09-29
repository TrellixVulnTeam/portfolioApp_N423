import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { LinkedIn, GitHub,Mail } from "@material-ui/icons";


export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 50,
      strings: ["Developer", "Server side dev.", "Mern stack Dev."],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/intro-anime-1.svg" alt="" />
        </div>
      </div>
      <div className="right">

        <div className="wrapper">
<div className="social-icon-div">
      <a href='https://www.linkedin.com/in/nishchal-singh-606591116/' target='_blank' className="social-icon-Container">
            <LinkedIn className='social-icon' />
          </a>
          <a href='https://github.com/nishchal27' target='_blank' className="social-icon-Container">
            <GitHub className='social-icon' />
          </a>
</div>

          <h2>Hi There, I'm</h2>
          <h1>nishchal singh</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio" className='small-device-px'>
          {/* ofcourse you can use here material icons also  */}
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
