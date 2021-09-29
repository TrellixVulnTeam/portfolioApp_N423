import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setcurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web development",
      desc: "Frontend development.",
      desc1: "Backend development.",
      desc2: "MERNstack development.",
      img: './assets/web-dev.jpg',
    },

    {
      id: "2",
      icon: "./assets/globe.png",
      title: "web design",
      desc: "I develop the user interface.",
      desc1: "I develop modern websites.",
      desc2: "Fully responsive websites dev.",
      img: 'assets/design.jpg',
    },

    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Server-Side Apps",
      desc: "REST APIs.",
      desc1: "Node.js modules.",
      desc2: "Express apps.",
      img: 'assets/server.png',
    },
  ];

  const handleClick = (way) => {
    way === 'left' ? setcurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
      setcurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  }

  return (
    <div className="works" id="works">
      <div className="slider" style={{ transform: `translateX( -${currentSlide * 100}vw) ` }}>
        {data.map((d) => (

          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                    <i className="uil uil-check-circle services_modal-icon"></i>{d.desc} <br />
                    <i className="uil uil-check-circle services_modal-icon"></i>{d.desc1} <br />
                    <i className="uil uil-check-circle services_modal-icon"></i>{d.desc2} <br />
                  </p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()} />
    </div>
  );
}
