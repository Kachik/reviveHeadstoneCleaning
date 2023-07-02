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
    </div>
  );
};

export default Footer;
