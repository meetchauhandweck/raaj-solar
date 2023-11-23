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
    date: "October 3, 2023",
    intro: "intro",
    introP1:
      "You’ve decided to go solar – awesome! Making your own clean energy and saving money on power bills sounds almost too good to be true. But hold up, before you sign that contract with RAAJ Solar or any other company, you need to watch out for some common traps that could seriously dim your solar excitement. As with any major purchase, doing your homework beforehand is key. Don’t get seduced by slick sales tactics and lofty promises of huge energy cost savings. The solar industry is booming these days, and some companies are in it more for profits than providing real value to customers. Keep reading to uncover the top tips and tricks for buying solar panels so you end up with an affordable system that actually works as advertised. The planet will thank you, and so will your wallet.",
    blueSecondHeading:
      "Choosing the Right Solar Panel Manufacturer: Why RAAJ Solar Stands Out",
    blueSecondHeadingContent:
      "When choosing a solar panel manufacturer, it’s important to consider a few key factors. RAAJ Solar stands out for several reasons:",
    blackHeading1: "High-Efficiency Panels",
    blackHeading1Content:
      "RAAJ Solar uses the latest technology to produce panels that convert more of the sun’s energy into electricity. Their panels have efficiency ratings of up to 21.5%, compared to the typical 15-16% of standard panels. More efficiency means you’ll need fewer panels to power your home.",
    blackHeading2: "Premium Quality",
    blackHeading2Content:
      "RAAJ Solar uses high-grade materials and rigorous testing to ensure their panels will last. Their panels come with a 25-year power warranty and are built to withstand extreme weather. Cheaper panels tend to degrade faster, losing up to 1% of power output each year. RAAJ’s high-quality panels maintain over 80% of their original efficiency even after 25 years.",
    blackHeading3: "Experience and Customer Service",
    blackHeading3Content1:
      "RAAJ Solar is an established company with over 15 years of experience. They have a proven track record and dedication to customer satisfaction. From design to installation, their team will guide you through the entire process. And if you have any issues after your system is up and running, their customer service department is there to help.",
    blackHeading3Content2:
      "When making such an important investment, it pays to choose a reputable company that offers high-performance, long-lasting products and values your experience as a customer. RAAJ Solar checks all these boxes, making them a top choice for residential solar panels.",
    blueThirdHeading: "Watch Out for These Common Solar Panel Scams and Traps",
    blueThirdHeadingContent1:
      "When buying residential solar panels, you need to watch out for shifty sales tactics meant to take advantage of uninformed customers. Don’t fall for these traps!",
    blueThirdHeadingContent2Heading: "Bait and Switch Pricing : ",
    blueThirdHeadingContent2:
      " Some companies advertise an attractive low price to lure you in, then jack up the final quote with hidden fees and addons once you show interest. Get multiple detailed quotes in writing upfront before signing anything.",
    blueThirdHeadingContent3Heading: "High Pressure Sales Tactics : ",
    blueThirdHeadingContent3:
      "Door-to-door and telemarketing solar salespeople often use manipulative tactics to get you to buy on the spot. Never make a snap decision on such a big investment. Take your time to research options and get competing quotes.",
    blueThirdHeadingContent4Heading: "Lies About Tax Credits and Incentives : ",
    blueThirdHeadingContent4:
      "Shady companies may claim you’ll get huge tax credits and rebates that don’t really exist. Do your own research on current federal, state and local solar incentives before believing a salesperson’s promises.",
    blueThirdHeadingContent5Heading: "Poor Quality Equipment : ",
    blueThirdHeadingContent5:
      "Disreputable dealers sell cheap, subpar solar panels and inverters that won’t last. Only consider top tier panels with 25-year power warranties from reputable brands. Check reviews and ask an independent expert.",
    blueThirdHeadingContent6:
      "By being an informed consumer, you can avoid headaches and get the best value in residential solar panels. With the right company, solar can be an excellent investment for your home. Just make sure to watch out for these common traps before signing on the dotted line!",
    blueForthHeading:
      "Key Factors to Consider When Buying Reliable Solar Panels for Your Home or Business",
    blueForthHeadingContent1:
      "When buying solar panels for your home or business, there are a few key factors to keep in mind. The solar company and equipment you choose can make or break your experience with renewable energy.",
    blueForthHeadingContent2Heading: "Panel Efficiency : ",
    blueForthHeadingContent2:
      "The efficiency rating indicates how much of the sun’s energy a solar panel can convert into usable electricity. Higher efficiency means fewer panels are needed, saving you space and money. For residential use, look for panels rated at least 16-20% efficient or higher. For commercial installations, choose panels of at least 18-22% efficiency or better.",
    blueForthHeadingContent3Heading: "Panel Durability : ",
    blueForthHeadingContent3:
      "Solar panels are a long-term investment and should last at least 25-30 years. Look for panels that can withstand extreme weather like high heat, freezing temperatures, and hail. Panels made of high-quality materials like tempered glass, aluminum frames and waterproof connections will be the most durable.",
    blueForthHeadingContent4Heading: "Company Reputation : ",
    blueForthHeadingContent4:
      "Choose a reputable company that has been designing and installing solar power systems for several years. Check online reviews from their customers about quality, service and reliability. Ask if they offer financing options and a solid warranty on both components and labor. A reputable company will ensure your solar installation is safe, efficient and built to last.",
    blueForthHeadingContent5Heading: "Maintenance : ",
    blueForthHeadingContent5_1:
      "While solar panels themselves are low-maintenance, they still require occasional inspections and servicing. Ask about the company’s maintenance plans and service call fees before purchasing your system. Proper maintenance will maximize your solar panel performance and return on investment.",
    blueForthHeadingContent5_2:
      "By keeping these factors in mind, you’ll be able to invest in high-quality, reliable solar panels that will provide you with affordable clean energy for decades to come. Make the choice that’s right for your needs and budget.",
    blueForthHeadingContent6Heading: "Conclusion : ",
    blueForthHeadingContent6:
      "So there you have it, some red flags to watch out for so you get the best solar solution for your needs. Don’t get pressured into a quick sale or long-term contract before you’ve done your research. Check reviews, get multiple quotes, understand the technology and incentives available. While solar can be a great investment, you want to go in with eyes wide open. Do your due diligence and you’ll end up with an affordable, high-quality system to harness the sun’s energy for years to come. The planet will thank you, and your wallet will too. Good luck and happy solar shopping!",
  },

  {
    name: "RAAJ-Solar-Energizing-the-Future-at-REI-Expo-2023",
    id: 1,
    image: blogimg2,
    heading: "RAAJ Solar : Energizing the Future at REI Expo 2023",
    date: "September 28, 2023",
    intro: "intro",
    introP1:
      "RAAJ Solar, a well-known player in the solar energy industry, is gearing up to make a significant mark at the eagerly awaited Renewable Energy India Expo (REI Expo) 2023. Our involvement reflects our strong dedication to promoting sustainable energy solutions and supporting a greener future. The REI Expo is a crucial gathering that brings together industry leaders, innovators, and clean energy advocates from around the world.",
    introP2:
      "Renewable Energy India Expo popularly known as REI offers an all-inclusive platform to domestic and international manufacturers, traders, buyers and professionals from across the renewable energy domain. REI is recognized as Asia’s Leading B2B expo focusing on Solar Energy, Wind Energy, Bio-Energy, Energy Storage and Electric Vehicles and charging infra.",
    introP3:
      "The forthcoming 16th edition of REI Expo being held during 4-6 October 2023, is estimated to attract over 700+ Exhibitors, 40,000+ trade visitors and esteemed policy-makers, decision-makers, influencers, technical experts and professionals.",
    blueSecondHeading: "Why to Visit REI Expo 2023?",
    l1: "Exchange groundbreaking ideas & technologies on an international platform.",
    l2: "Meet the decision makers who are shaping the renewable energy market.",
    l3: "Get connected at exclusive networking events.",
    l4: "Attend interactive workshops and seminars at the exhibition.",
    l5: "Stay informed about the latest technological innovations in renewable energy sector.",
    l6: "Gain profound insights into current global trends in the renewable energy industry.",
    l7: "Attend world-class conference programs with industry experts & renowned speakers.",
  },
  {
    name: "Powering-Profit-How-Commercial-Solar-Panels-Supercharge-Businesses",
    id: 2,
    image: blogimg3,
    heading:
      "Powering Profit: How Commercial Solar Panels Supercharge Businesses",
    date: "September 19, 2023",
    intro: "intro",
    introP1:
      "You’ve probably heard about how solar panels can save homeowners money and help the environment. But did you know that solar energy can also significantly impact your business’s bottom line? Commercial solar panels are a smart investment that provides major benefits.They can drastically cut your energy costs and provide a stable source of renewable power for your company.",
    introP2:
      "Within just a few years, the savings from lower electric bills can offset the initial cost of installing a commercial solar system. After that, you’ll enjoy decades of nearly free, clean energy and a higher profit margin. You’ll also gain valuable goodwill from customers and clients who appreciate your commitment to sustainability.",
    introP3:
      "If you own or manage a business, it’s time to start harnessing the sun. Commercial solar panels are an easy way to boost your profits in a way that’s good for the planet. Discover how making the switch to solar can transform how you power your company. The savings and benefits to your bottom line may surprise you.",
    // blueSecondHeading: "The Benefits of Installing Commercial Solar Panels",
    blueThirdHeading: "The Benefits of Installing Commercial Solar Panels",
    blueThirdHeadingContent1:
      "The benefits of installing commercial solar panels are numerous. First, you’ll save a lot on energy costs. After the initial investment, the sun provides free power for your business for decades. Studies show commercial solar installations can cut energy bills by up to 90%.",
    blueThirdHeadingContent2Heading: "Lower Operating Costs : ",
    blueThirdHeadingContent2:
      "With such huge savings, you’ll have more working capital to put towards growing your business. You’ll also gain energy price certainty and stability, insulating you from volatile energy markets and unpredictable price spikes.",
    blueThirdHeadingContent3Heading: "Tax Incentives and Rebates : ",
    blueThirdHeadingContent3:
      "The government and many states offer tax credits, rebates, and other incentives for businesses that go solar. You may qualify for investment tax credits, accelerated depreciation, and state property tax exemptions which can significantly reduce the overall cost of your system.",
    blueThirdHeadingContent4Heading: "Increase Property Value : ",
    blueThirdHeadingContent4:
      "Solar panels are attractive to tenants and buyers. Studies show commercial buildings with solar photovoltaic systems sell for significantly higher prices. Going green with solar power is also great for public relations and can boost your brand image.",
    blueThirdHeadingContent5Heading: "Energy Independence : ",
    blueThirdHeadingContent5:
      "With a commercial solar energy system, you’ll generate your own power right on site. You’ll gain energy security and independence from the utility company. Your business will keep operating even if there’s a power outage in the neighborhood. That kind of reliability and resilience is invaluable.",
    blueThirdHeadingContent6:
      "The benefits of going solar for your business are clear. Lower costs, tax incentives, increased property value, and energy independence—what’s not to like? Join the thousands of companies harnessing the sun to power their profits. The future is bright!",
    blueForthHeading: "Top 5 Commercial Solar Panel Companies to Consider!",
    blueForthHeadingContent1:
      "The commercial solar industry has exploded in recent years, with many new companies entering the market. Here are 5 of the top commercial solar panel companies to consider for your business:",
    // blueForthHeadingContent2Heading,
    // blueForthHeadingContent2,
    // blueForthHeadingContent3,
    // blueForthHeadingContent3Heading,
    // blueForthHeadingContent4,
    // blueForthHeadingContent4Heading,
    // blueForthHeadingContent5_1,
    // blueForthHeadingContent5_2,
    // blueForthHeadingContent5Heading,
    // blueForthHeadingContent6,
    // blueForthHeadingContent6Heading,
  },
  {
    name: "Residential-Solar-Panels-Everything-You-Need-to-Know-Before-Going-Solar",
    id: 3,
    image: blogimg4,
    heading:
      "Residential Solar Panels: Everything You Need to Know Before Going Solar",
    date: "August 18, 2023",
    intro: "intro",
    introP1:
      "So you’re thinking of going solar – excellent! Harnessing the power of the sun to generate electricity for your home is a smart move, both financially and environmentally. But before you sign on the dotted line to have those sleek panels installed on your roof, there are some key things you need to know. How much will residential solar panels cost for your home? Will they eliminate your electric bill? How do solar panels work, anyway? This comprehensive guide will walk you through everything you need to consider before switching to solar energy for your house. By the end, you’ll be fully equipped with the knowledge to make the best decision for your home and wallet. The future is bright – the future is solar! Are you ready to take the plunge into energy independence?",
    // blueSecondHeading: "An Introduction to Residential Solar Panels",
    blueThirdHeading: "An Introduction to Residential Solar Panels",
    blueThirdHeadingContent1:
      "So you’re considering going solar. Great idea! Residential solar panels can provide clean energy and lower your electric bills. Here’s what you need to know before installing solar panels on your home.",
    blueThirdHeadingContent2Heading: "Cost and Savings : ",
    blueThirdHeadingContent2:
      "The upfront cost of a typical residential system in India is around Rs 180K to Rs 220K. But don’t worry; you’ll save money in the long run. Solar panels can lower or even eliminate your electric bill, and many homeowners see a return on their investment in 5 to 15 years.",
    blueThirdHeadingContent3Heading: "How Much Energy Can You Generate? : ",
    blueThirdHeadingContent3:
      "The amount of energy you can produce depends on the size of your solar panel system and the amount of sunlight in your area. On average, a residential solar panel system can generate 3 to 8 kilowatts of power, which is enough for a small home. You’ll need to evaluate your average energy usage to determine the right system size for your needs.",
    blueThirdHeadingContent4Heading: "Installation and Maintenance : ",
    blueThirdHeadingContent4:
      "Installation of solar panels usually takes 1 to 3 days for an experienced crew. Maintenance is minimal, but the panels must be inspected once a year to ensure maximum efficiency. Solar panels are very durable, with most carrying 25-year warranties.",
    blueThirdHeadingContent5Heading: "Incentives and Financing : ",
    blueThirdHeadingContent5:
      " There are federal tax credits and state rebates available for going solar. You can also finance your solar panels with a loan, lease, or power purchase agreement so you can start saving money right away. ",
    blueThirdHeadingContent6:
      "Going solar is a big step, but with the environmental and financial benefits, it’s worth considering. Do some research on costs and incentives in your area to determine if residential solar panels are right for you. The sun is shining – now get out there and harness the power!",
  },
  {
    name: "Top-10-Solar-Panel-Companies-in-India-you-should-know-them!",
    id: 4,
    image: blogimg5,
    heading: "Top 10 Solar Panel Companies in India, you should know them!",
    date: "July 22, 2023",
    intro: "intro",
    introP1:
      "Have you decided to go solar but aren’t sure which company to choose to install your panels? There are many great options in India, so we’ve compiled a list of the top 10 solar panel companies you should consider. These companies offer high-quality panels, competitive pricing, and skilled installation. Whether you’re looking for a residential system, commercial solar, or utility-scale panels, one of these leading brands will meet your needs. From major players like Tata Solar Power and Adani Solar to smaller but reputable companies like Raaj Solar, this roundup covers some of the best solar panel providers in the country. Keep reading to discover how these companies can help you save money while going green. With the bright future of solar in India, now is the perfect time to make the switch.",
    blueSecondHeading: "India's Solar Energy Market Overview",
    blueSecondHeadingContent:
      "India’s solar energy market is booming. The government aims to install 100 GW of solar power by 2022, and companies are rushing to gain a foothold in this promising industry.",
  },
  {
    name: "Solar-Panels-in-Ahmedabad-Prices-and-Installation-Guide",
    id: 5,
    image: blogimg6,
    heading: "Solar Panels in Ahmedabad: Prices and Installation Guide",
    date: "June 14, 2023",
    intro: "intro",
    introP1:
      "If you’re looking to harness the power of the sun in the bustling city of Ahmedabad, you’re in the right place! Located in the heart of Gujarat, it has a rich cultural heritage and a strong entrepreneurial spirit. But did you know that Ahmedabad is also a great place to go for solar panels?",
    blueSecondHeading: "Price list of Solar Panel in Ahmedabad",
  },
];

const BlogSingle = () => {
  const { name } = useParams();
  console.log(name);

  return (
    <div className="blogSingle">
      <div className="blogSingle_wrapper">
        {singleBlogData
          .filter((item) => item.name === name)
          .map((item, index) => (
            <BlogSingleItem
              key={index}
              heading={item.heading}
              image={item.image}
              date={item.date}
              intro={item.intro}
              introP1={item.introP1}
              introP2={item.introP2}
              introP3={item.introP3}
              blueSecondHeading={item.blueSecondHeading}
              blueSecondHeadingContent={item.blueSecondHeadingContent}
              l1={item.l1}
              l2={item.l2}
              l3={item.l3}
              l4={item.l4}
              l5={item.l5}
              l6={item.l6}
              l7={item.l7}
              blackHeading1={item.blackHeading1}
              blackHeading1Content={item.blackHeading1Content}
              blackHeading2={item.blackHeading2}
              blackHeading2Content={item.blackHeading2Content}
              blackHeading3={item.blackHeading3}
              blackHeading3Content1={item.blackHeading3Content1}
              blackHeading3Content2={item.blackHeading3Content2}
              blueThirdHeading={item.blueThirdHeading}
              blueThirdHeadingContent1={item.blueThirdHeadingContent1}
              blueThirdHeadingContent2={item.blueThirdHeadingContent2}
              blueThirdHeadingContent3={item.blueThirdHeadingContent3}
              blueThirdHeadingContent4={item.blueThirdHeadingContent4}
              blueThirdHeadingContent5={item.blueThirdHeadingContent5}
              blueThirdHeadingContent6={item.blueThirdHeadingContent6}
              blueThirdHeadingContent2Heading={
                item.blueThirdHeadingContent2Heading
              }
              blueThirdHeadingContent3Heading={
                item.blueThirdHeadingContent3Heading
              }
              blueThirdHeadingContent4Heading={
                item.blueThirdHeadingContent4Heading
              }
              blueThirdHeadingContent5Heading={
                item.blueThirdHeadingContent5Heading
              }
              blueForthHeading={item.blueForthHeading}
              blueForthHeadingContent2Heading={
                item.blueForthHeadingContent2Heading
              }
              blueForthHeadingContent3Heading={
                item.blueForthHeadingContent3Heading
              }
              blueForthHeadingContent4Heading={
                item.blueForthHeadingContent4Heading
              }
              blueForthHeadingContent5Heading={
                item.blueForthHeadingContent5Heading
              }
              blueForthHeadingContent6Heading={
                item.blueForthHeadingContent6Heading
              }
              blueForthHeadingContent1={item.blueForthHeadingContent1}
              blueForthHeadingContent2={item.blueForthHeadingContent2}
              blueForthHeadingContent3={item.blueForthHeadingContent3}
              blueForthHeadingContent4={item.blueForthHeadingContent4}
              blueForthHeadingContent5_1={item.blueForthHeadingContent5_1}
              blueForthHeadingContent5_2={item.blueForthHeadingContent5_2}
              blueForthHeadingContent6={item.blueForthHeadingContent6}
            />
          ))}
      </div>
    </div>
  );
};
export default BlogSingle;
