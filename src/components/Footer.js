import "./FooterStyles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Revive.</h1>
          <p>Headstone Cleaning Service</p>
        </div>
        <div>
          <a href="https://www.instagram.com/revive.headstonecleaning/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="https://www.tiktok.com/@revive.headstonecleaning">
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Learn More</h4>
          <Link to="/headstone-cleaning-benefits">Benefits</Link>
          <Link to="/headstone-cleaning-techniques">Techniques</Link>
          <Link to="/headstone-cleaning-step-by-step">Step-by-Step</Link>
        </div>
        <div>
          <h4>Navigate</h4>
          <Link to="/">Home</Link>
          <Link to="/service">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/service">Services</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/faq">Frequently Asked Questions</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
