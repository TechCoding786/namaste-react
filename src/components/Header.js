import { LOGO_URL } from "../utils/constants";

 const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="foodOderingLOGO"
          />
        </div>
        <div className="nav-items">
          <ul>
        
            <li>home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;