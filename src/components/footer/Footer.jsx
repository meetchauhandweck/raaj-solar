import "./footer.scss";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import youtube from "../../images/youtube.svg";
import whatsapp from "../../images/whatsapp.svg";
import linkedin from "../../images/linkedin.svg";
import { Link } from "react-router-dom";
// import Form from "../form/Form";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="wrapper">
          <div className="wrapper_f1">
            <div className="f1">
              <h3>About Company</h3>
              <p>
                We are one of the best Crystalline Solar PV Modules
                Manufacturers India with an exceptionally solid client base PAN
                India.
              </p>
            </div>
          </div>
          <div className="f2">
            <div className="col1">
              <h2>Useful Links</h2>
              <div className="f3">About</div>
              <div className="f3">Management</div>
              <div className="f3">Blogs</div>
              <div className="f3">Contact Us</div>
            </div>
            <div className="col2">
              <h2>Quick Links</h2>
              <div className="f3">Career</div>
              <div className="f3">Products</div>
              <div className="f3">Experience</div>
              <div className="f3">Center</div>
            </div>
            <div className="col3">
              <h2>Contact</h2>
              <div className="address">
                1402, 14th floor, Phoenix, Vijay Cross Rd, Navrangpura,
                Ahmedabad - 380009 marketing@raajsolar.com
              </div>
              <div className="link">
                <Link to={"tel:9925031915"}>+91 99250 31915</Link>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="copyright_text">
              Copyright@ 2023 Raaj Solar, All Right Reserved. Designed &
              Developed by
              <span>
                <Link to="https://www.humbeestudio.com/">{" H/DS"}</Link>
              </span>
            </div>
            <div className="icons">
              <div className="icon">
                <img src={facebook} alt="facebook" />
              </div>
              <div className="icon">
                {/* <i className="fa-brands fa-instagram"></i> */}
                <img src={instagram} alt="instagram" />
              </div>
              <div className="icon">
                <img src={youtube} alt="youtube" />
              </div>
              <div className="icon">
                <img src={whatsapp} alt="whatsapp" />
              </div>
              <div className="icon">
                <img src={linkedin} alt="linkedin" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Form /> */}
    </div>
  );
};
export default Footer;
