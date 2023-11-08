import PropTypes from "prop-types";
import "./leftRightImageContentItem.scss";
import arrowIcon from "../../../images/rightArrow.svg";
import { Link } from "react-router-dom";

const LeftRightImageContentItem = ({
  image,
  smallImage,
  title,
  description,
  order,
  link,
}) => {
  return (
    <div className={`leftRightImageContentItem ${order}`}>
      <div className="content_left">
        <div className="content_image1">
          <img src={image} alt={title} />
        </div>
      </div>
      <div className="content_right">
        <div className="content_right_wrapper">
          <div
            data-aos="fade-up"
            className="content_right_wrapper_inner"
            data-aos-duration="2000"
          >
            <h2>{title}</h2>
            <div className="content_text">
              <p>{description}</p>
            </div>
            <div>
              <p className="button_text">
                <Link to={link}>Read more</Link>
                <img src={arrowIcon} alt="Read more arrow" />
              </p>
            </div>
          </div>

          <div className="content_image2">
            <img src={smallImage} alt={`smallImage`} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftRightImageContentItem;

LeftRightImageContentItem.propTypes = {
  image: PropTypes.any,
  smallImage: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
  order: PropTypes.any,
  link: PropTypes.string,
};
