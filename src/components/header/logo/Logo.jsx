import { Link } from "react-router-dom";
import logo from "../../../images/logo.svg";
import "./logo.scss";

const Logo = () => {
  return (
    <div className={`logo`}>
      <Link to={"/raaj-solar"}>
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};
export default Logo;
