import blogimg1 from "../../images/blogimg1.png";
import blogimg2 from "../../images/blogimg2.png";
import blogimg3 from "../../images/blogimg3.png";
import blogimg4 from "../../images/blogimg4.png";
import blogimg5 from "../../images/blogimg5.png";
import blogimg6 from "../../images/blogimg6.png";
import BlogCardsItem from "./BlogCardsItem";
import "./blogCards.scss";

const blogCardsData = [
  {
    name: "Don’t-Fall-for-These-Solar-Panel-Traps-What-to-Know-Before-Buying-From-RAAJ-Solar",
    image: blogimg1,
    heading:
      "Don’t Fall for These Solar Panel Traps: What to Know Before Buying From RAAJ Solar",
    content:
      "You’ve decided to go solar – awesome! Making your own clean energy and saving money on power bills sounds almost too good to be true. But hold up, before you sign that contract with RAAJ Solar or any other company, you need to watch out for some common traps that could seriously dim your solar excitement.",
    buttonText: "Read More",
  },
  {
    name: "RAAJ-Solar-Energizing-the-Future-at-REI-Expo-2023",
    image: blogimg2,
    heading: "RAAJ Solar : Energizing the Future at REI Expo 2023",
    date: "September 28, 2023",
    content:
      "RAAJ Solar, a well-known player in the solar energy industry, is gearing up to make a significant mark at the eagerly awaited Renewable Energy India Expo (REI Expo) 2023. Our involvement reflects our strong dedication to promoting sustainable energy solutions and supporting a greener future.",
    buttonText: "Read More",
  },
  {
    name: "Powering-Profit-How-Commercial-Solar-Panels-Supercharge-Businesses",
    image: blogimg3,
    heading:
      "Powering Profit: How Commercial Solar Panels Supercharge Businesses",
    date: "September 19, 2023",
    content:
      "You’ve probably heard about how solar panels can save homeowners money and help the environment. But did you know that solar energy can also significantly impact your business’s bottom line? Commercial solar panels are a smart investment that provides major benefits",
    buttonText: "Read More",
  },
  {
    name: "Residential-Solar-Panels-Everything-You-Need-to-Know-Before-Going-Solar",
    image: blogimg4,
    heading:
      "Residential Solar Panels: Everything You Need to Know Before Going Solar",
    date: "August 18, 2023",
    content:
      "So you’re thinking of going solar – excellent! Harnessing the power of the sun to generate electricity for your home is a smart move, both financially and environmentally. But before you sign on the dotted line to have those sleek panels installed on your roof, there are some key things you need to know.",
    buttonText: "Read More",
  },
  {
    name: "Top-10-Solar-Panel-Companies-in-India-you-should-know-them!",
    image: blogimg5,
    heading: "Top 10 Solar Panel Companies in India, you should know them!",
    date: "July 22, 2023",
    content:
      "Have you decided to go solar but aren’t sure which company to choose to install your panels? There are many great options in India, so we’ve compiled a list of the top 10 solar panel companies you should consider. These companies offer high-quality panels, competitive pricing, and skilled installation.",
    buttonText: "Read More",
  },
  {
    name: "Solar-Panels-in-Ahmedabad-Prices-and-Installation-Guide",
    image: blogimg6,
    heading: "Solar Panels in Ahmedabad: Prices and Installation Guide",
    date: "June 14, 2023",
    content:
      "If you’re looking to harness the power of the sun in the bustling city of Ahmedabad, you’re in the right place! Located in the heart of Gujarat, it has a rich cultural heritage and a strong entrepreneurial spirit. But did you know that Ahmedabad is also a great place to go for solar panels?",
    buttonText: "Read More",
  },
];
const BlogCards = () => {
  return (
    <div className="blogCards">
      <div className="blog_container">
        <div className="card-grid">
          {blogCardsData.map((card, index) => (
            <BlogCardsItem
              key={index}
              name={card.name}
              image={card.image}
              heading={card.heading}
              date={card.date}
              content={card.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default BlogCards;
