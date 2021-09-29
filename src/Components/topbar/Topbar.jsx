import "./topbar.scss";
import { LinkedIn, GitHub,Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>nishchal singh</a>
          <a href='https://www.linkedin.com/in/nishchal-singh-606591116/' target='_blank' className="itemContainer">
            <LinkedIn className='icon' />
          </a>
          <a href='https://github.com/nishchal27' target='_blank' className="itemContainer">
            <GitHub className='icon' />
          </a>
          <div className="itemContainer">
            <Mail className='icon' />
            <span>singhnishchal27@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
