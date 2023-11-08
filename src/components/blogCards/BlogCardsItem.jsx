import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import arrow from "../../images/whiteArrow.svg";

const BlogCardsItem = ({ image, heading, date, content }) => {
  return (
    <div className="card">
      <img src={image} alt="Card" className="card_image" />
      <div className="cardcolor">
        <p className="heading">{heading}</p>
        <p className="date">{date}</p>
        <p className="content">{content}</p>

        <Link>
          Read More <img src={arrow} alt="white_arrow" />
        </Link>
      </div>
    </div>
  );
};
export default BlogCardsItem;

BlogCardsItem.propTypes = {
  image: PropTypes.any,
  heading: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string,
};
