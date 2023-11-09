import BlogSingleItem from "../../../components/blogSingleItem/BlogSingleItem";
import { useParams } from "react-router-dom";
import blogimg1 from "../../../images/blogimg1.png";
import blogimg2 from "../../../images/blogimg2.png";
import blogimg3 from "../../../images/blogimg3.png";
import blogimg4 from "../../../images/blogimg4.png";
import blogimg5 from "../../../images/blogimg5.png";
import blogimg6 from "../../../images/blogimg6.png";

const singleBlogData = [
  {
    name: "Don’t-Fall-for-These-Solar-Panel-Traps-What-to-Know-Before-Buying-From-RAAJ-Solar",
    id: 0,
    image: blogimg1,
    heading:
      "Don’t Fall for These Solar Panel Traps: What to Know Before Buying From RAAJ Solar",
  },
  {
    id: 1,
    image: blogimg2,
    heading: "RAAJ Solar : Energizing the Future at REI Expo 2023",
    date: "September 28, 2023",
  },
  {
    id: 2,
    image: blogimg3,
    heading:
      "Powering Profit: How Commercial Solar Panels Supercharge Businesses",
    date: "September 19, 2023",
  },
  {
    id: 3,
    image: blogimg4,
    heading:
      "Residential Solar Panels: Everything You Need to Know Before Going Solar",
    date: "August 18, 2023",
  },
  {
    id: 4,
    image: blogimg5,
    heading: "Top 10 Solar Panel Companies in India, you should know them!",
    date: "July 22, 2023",
  },
  {
    id: 5,
    image: blogimg6,
    heading: "Solar Panels in Ahmedabad: Prices and Installation Guide",
    date: "June 14, 2023",
  },
];

const BlogSingle = () => {
  const { name } = useParams();
  console.log("demo");
  console.log(name);

  return (
    <div className="blogSingle">
      <div className="blogSingle_wrapper">
        {singleBlogData
          .filter((item) => item.name === name)

          .map(
            (item, index) => console.log(name)
            // <BlogSingleItem
            //   key={index}
            //   heading={item.heading}
            //   image={item.image}
            //   date={item.date}
            // />
          )}
      </div>
    </div>
  );
};
export default BlogSingle;
