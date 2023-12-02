import Logo from "./logo/Logo";
import Navbar from "./navbar/Navbar";
import "./header.scss";
import "../../variables.scss";
import DownloadLogo from "./downloadLogo/DownloadLogo";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  function handleMobileMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <div className="header" id="hide-header">
      <div className="header_wrapper">
        <Logo handleMenu={handleMobileMenu} />
        <Navbar handleMenu={handleMobileMenu} open={showMenu} />
        <DownloadLogo />
      </div>
    </div>
  );
};
export default Header;















// onClick={handleWidth < 991 ? handleMenu : null}