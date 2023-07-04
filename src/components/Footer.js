import "./FooterStyles.css";

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
          <a href="/headstone-cleaning-benefits">Benefits</a>
          <a href="/headstone-cleaning-techniques">Techniques</a>
          <a href="/headstone-cleaning-step-by-step">Step-by-Step</a>
        </div>
        <div>
          <h4>Navigate</h4>
          <a href="/">Home</a>
          <a href="/service">Services</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/faq">Frequently Asked Questions</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
