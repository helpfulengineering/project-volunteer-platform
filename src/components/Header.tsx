import '../index.css';
import './styles/Header.css';
import helpfulIcon from '../assets/helpful_icon.png';
import profileIcon from '../assets/profile_icon.png';
// will need to work on the transition between login and signup, dynamic change to header buttons based on logged in status this was a work around for now to have a blank page (using the component: PublicHeader.tsx) with a button that has auth0 functionality to simulate a signup coming in from the public WP site. For the sake of time, it was easier to wait and fix this later. (Eric)
// import LoginButton from "../auth0/login";
// import LogoutButton from "../auth0/logout";  <--- logout button is implemented in auth0 folder, just need time to sort out the logged in view of header, add the button and test it.
import SignupButton from "../auth0/signup";

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <nav className="header-nav">
        <div className="nav-links">
          <img src={helpfulIcon} alt="Helpful Icon" className="helpful-icon" />
          <a href="#about">About</a>
          <a href="#partners">Partners</a>
          <a href="#research">Research</a>
          <a href="#events">Events</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-buttons">
          {/* <LoginButton/> */}
          <SignupButton/>
          <img src={profileIcon} alt="Profile Icon" className="profile-icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
