import Logo from "./logo/Logo";
import Navbar from "./navbar/Navbar";
import "./header.scss";
import "../../variables.scss";
import DownloadLogo from "./downloadLogo/DownloadLogo";

const Header = () => {
  return (
    <div className="header" id="hide-header">
      <div className="header_wrapper">
        <Logo />
        <Navbar />
        <DownloadLogo />
      </div>
    </div>
  );
};
export default Header;
