import '../index.css';
import "./styles/publicHeader.css";
import helpfulIcon from "../assets/helpful_icon.png";
import SignupButton from "../auth0/signup";

const PublicHeader: React.FC = () => {
  return (
    <header className="header-container">
      <nav className="header-nav">
        <div className="logo-section">
          <img src={helpfulIcon} alt="Helpful" className="helpful-icon" />
          <a href="/" className="logo-text">
            HELPFUL
          </a>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#partners">Partners</a>
          <a href="#research">Research</a>
          <a href="#events">Events</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-buttons">
          <button className="donate-button">DONATE</button>
          <SignupButton />
        </div>
      </nav>
    </header>
  );
};

export default PublicHeader;
