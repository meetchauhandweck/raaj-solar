import "./leftRightImageContent.scss";
// import arrow from "../Images/arrow.svg";
// import AOS from "aos";
// import "aos/dist/aos.css";
import smallImage1 from "../../images/productCardSmallImage1.png";
import smallImage2 from "../../images/productCardSmallImage2.png";
import smallImage3 from "../../images/productCardSmallImage3.png";
import productImage1 from "../../images/productImage1.png";
import productImage2 from "../../images/productImage2.png";
import productImage3 from "../../images/productImage4.png";
import LeftRightImageContentItem from "./leftRightImageContentItem/LeftRightImageContentItem";

const propductCardData = [
  {
    id: 1,
    image1: productImage1,
    title: "POLY CRYSTALLINE",
    description:
      "With the development of Technology Poly Modules efficiency has increased up to 18%, where we can make Modules up to 345 WP. Poly Modules are ideally used for Ground Mounted, Industrial, Commercial, Residential, Water Pumping system &…",
    image2: smallImage1,
    link: "/raaj-solar/poly-crystalline",
  },
  {
    id: 2,
    image1: productImage2,
    title: "MONO PERC",
    description:
      "Assembled with MBB PERC cells, the half-cell configuration of the modules offers the advantages of higher power output, better temperature-dependent performance, reduced shading effect on the energy generation, lower risk of hot spot, as well as enhanced tolerance for mechanical…",
    image2: smallImage2,
    link: "/raaj-solar/mono-perc",
  },
  {
    id: 3,
    image1: productImage3,
    title: "MONO BI-Facial",
    description:
      "Assembled with MBB PERC cells, the half-cell configuration of the modules offers the advantages of higher power output, better temperature-dependent performance, reduced shading effect on the energy generation, lower risk of hot spot, as well as enhanced tolerance for mechanical…",
    image2: smallImage3,
    link: "/raaj-solar/mono-bi-facial",
  },
];

function LeftRightImageContent() {
  return (
    <div className="leftRightImageContent">
      <div className="container">
        <div className="leftRightImageContent_wrapper">
          {propductCardData.map((item) => (
            <LeftRightImageContentItem
              key={item.id}
              image={item.image1}
              smallImage={item.image2}
              title={item.title}
              description={item.description}
              link={item.link}
              order={item.id % 2 === 0 && "right"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftRightImageContent;
