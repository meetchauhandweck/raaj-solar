import { Link } from "react-router-dom";
import "./navbar.scss";
import { useState } from "react";
import downloadLogo from "../../../images/downloadLogo1.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);

  if (showMenu && window.innerWidth < 992) {
    document.body.classList.add("mobile_menu_open");
  } else {
    document.body.classList.remove("mobile_menu_open");
  }
  return (
    <div className="navbar">
      <div
        className={`mobileMenu_icon ${showMenu ? "active" : null}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        {/* Menu */}
        <span className="line1"></span>
        <span className="line2"></span>
      </div>
      <div className={`navbar_wrapper ${showMenu ? "active" : null}`}>
        <ul>
          <li onClick={() => setShowMenu(!showMenu)} className="mobile_home">
            <Link to="/raaj-solar">Home</Link>
          </li>
          <li onClick={() => setShowMenu(!showMenu)}>
            <Link to="/raaj-solar/about-us">
              About<span style={{ paddingLeft: "5px" }}>us</span>
            </Link>
          </li>
          <li onClick={() => setShowMenu(!showMenu)}>
            <Link to="/raaj-solar/management">Management</Link>
          </li>
          <li onClick={() => setShowMenu(!showMenu)}>
            <Link to="/raaj-solar/products">Products</Link>
          </li>
          {/* <li>
            <Link to="/management">Management</Link>
          </li> */}
          {/* <li  onClick={() => setShowMenu(!showMenu)}>
            <Link to="/center">Center</Link>
          </li> */}
          <li onClick={() => setShowMenu(!showMenu)}>
            <Link to="/raaj-solar/blog">Blog</Link>
          </li>
          <li onClick={() => setShowMenu(!showMenu)}>
            <Link to="/raaj-solar/contact-us">
              Contact<span style={{ paddingLeft: "5px" }}>Us</span>
            </Link>
          </li>
          <li
            onClick={() => setShowMenu(!showMenu)}
            className="downloadLogoMObile"
          >
            <Link>
              Download<span style={{ paddingLeft: "5px" }}> Now</span>
              <img
                src={downloadLogo}
                alt="downloadLogo"
                style={{ marginLeft: "10px" }}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
