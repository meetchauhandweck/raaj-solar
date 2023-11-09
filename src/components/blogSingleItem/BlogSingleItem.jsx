import BlogSingleBanner from "../blogSingleBanner/blogSingleBanner";
// import InnerPageBanner from "../innerPageBanner/InnerPageBanner";
import "./blogSingleItem.scss";
import blogImage from "../../images/blogimg1.png";
import Form from "../form/Form";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const BlogSingleItem = ({ image, heading, date }) => {
  const container = useRef(null);
  const refs = useRef(null);
  useEffect(() => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top top`,
        end: `+=${window.innerHeight / 0.5}`,
        pin: true,
      },
      opacity: 1,
      ease: "none",
      //   stagger: 20,
    });
  }, []);

  return (
    <div className="blogSingleItem">
      <div className="blogSingleItem_wrapper">
        <div className="blogSingleItem_wrapper_banner">
          <BlogSingleBanner
            image={blogImage}
            subHeading={
              "Don't Fall For These Solar Panel Traps: What To Know Before Buying From RAAJ Solar"
            }
            date={"October 3, 2023"}
          />
        </div>
        <div className="blogSingleItem_wrapper_content_sec" ref={refs}>
          <div className="container">
            <div className="blogSingleItem_wrapper_content_sec_wrapper">
              <div className="blogSingleItem_wrapper_content_sec_wrapper_inner">
                <section className="sec1">
                  <h3 className="heading">Intro</h3>
                  <p>
                    You’ve decided to go solar – awesome! Making your own clean
                    energy and saving money on power bills sounds almost too
                    good to be true. But hold up, before you sign that contract
                    with RAAJ Solar or any other company, you need to watch out
                    for some common traps that could seriously dim your solar
                    excitement. As with any major purchase, doing your homework
                    beforehand is key. Don’t get seduced by slick sales tactics
                    and lofty promises of huge energy cost savings. The solar
                    industry is booming these days, and some companies are in it
                    more for profits than providing real value to customers.
                    Keep reading to uncover the top tips and tricks for buying
                    solar panels so you end up with an affordable system that
                    actually works as advertised. The planet will thank you, and
                    so will your wallet.
                  </p>
                  <img src={image} alt="" />
                </section>
                <section className="sec2">
                  <h3>
                    Choosing the Right Solar Panel Manufacturer: Why RAAJ Solar
                    Stands Out
                  </h3>
                  <p>
                    When choosing a solar panel manufacturer, it’s important to
                    consider a few key factors. RAAJ Solar stands out for
                    several reasons:
                  </p>
                  <div className="heading_content">
                    <h4>High-Efficiency Panels</h4>
                    <p>
                      RAAJ Solar uses the latest technology to produce panels
                      that convert more of the sun’s energy into electricity.
                      Their panels have efficiency ratings of up to 21.5%,
                      compared to the typical 15-16% of standard panels. More
                      efficiency means you’ll need fewer panels to power your
                      home.
                    </p>
                  </div>
                  <div className="heading_content">
                    <h4>Premium Quality</h4>
                    <p>
                      RAAJ Solar uses high-grade materials and rigorous testing
                      to ensure their panels will last. Their panels come with a
                      25-year power warranty and are built to withstand extreme
                      weather. Cheaper panels tend to degrade faster, losing up
                      to 1% of power output each year. RAAJ’s high-quality
                      panels maintain over 80% of their original efficiency even
                      after 25 years.
                    </p>
                  </div>
                  <div className="heading_content">
                    <h4>Experience and Customer Service</h4>
                    <p>
                      RAAJ Solar is an established company with over 15 years of
                      experience. They have a proven track record and dedication
                      to customer satisfaction. From design to installation,
                      their team will guide you through the entire process. And
                      if you have any issues after your system is up and
                      running, their customer service department is there to
                      help.
                    </p>
                    <p>
                      When making such an important investment, it pays to
                      choose a reputable company that offers high-performance,
                      long-lasting products and values your experience as a
                      customer. RAAJ Solar checks all these boxes, making them a
                      top choice for residential solar panels.
                    </p>
                  </div>
                </section>
                <section className="sec3">
                  <h3>
                    Watch Out for These Common Solar Panel Scams and Traps
                  </h3>
                  <p>
                    When buying residential solar panels, you need to watch out
                    for shifty sales tactics meant to take advantage of
                    uninformed customers. Don’t fall for these traps!
                  </p>
                  <div className="heading_content">
                    <p>
                      <span>Bait and Switch Pricing:</span> Some companies
                      advertise an attractive low price to lure you in, then
                      jack up the final quote with hidden fees and addons once
                      you show interest. Get multiple detailed quotes in writing
                      upfront before signing anything.
                    </p>
                    <p>
                      <span>High Pressure Sales Tactics:</span> Door-to-door and
                      telemarketing solar salespeople often use manipulative
                      tactics to get you to buy on the spot. Never make a snap
                      decision on such a big investment. Take your time to
                      research options and get competing quotes.
                    </p>
                    <p>
                      <span>Lies About Tax Credits and Incentives:</span>Shady
                      companies may claim you’ll get huge tax credits and
                      rebates that don’t really exist. Do your own research on
                      current federal, state and local solar incentives before
                      believing a salesperson’s promises.
                    </p>
                    <p>
                      <span>Poor Quality Equipment:</span>Disreputable dealers
                      sell cheap, subpar solar panels and inverters that won’t
                      last. Only consider top tier panels with 25-year power
                      warranties from reputable brands. Check reviews and ask an
                      independent expert.
                    </p>
                    <p>
                      By being an informed consumer, you can avoid headaches and
                      get the best value in residential solar panels. With the
                      right company, solar can be an excellent investment for
                      your home. Just make sure to watch out for these common
                      traps before signing on the dotted line!
                    </p>
                  </div>
                </section>
                <section className="sec4">
                  <h3>
                    Key Factors to Consider When Buying Reliable Solar Panels
                    for Your Home or Business
                  </h3>
                  <p>
                    When buying solar panels for your home or business, there
                    are a few key factors to keep in mind. The solar company and
                    equipment you choose can make or break your experience with
                    renewable energy.
                  </p>
                  <div className="heading_content">
                    <p>
                      <span> Panel Efficiency:</span> The efficiency rating
                      indicates how much of the sun’s energy a solar panel can
                      convert into usable electricity. Higher efficiency means
                      fewer panels are needed, saving you space and money. For
                      residential use, look for panels rated at least 16-20%
                      efficient or higher. For commercial installations, choose
                      panels of at least 18-22% efficiency or better.
                    </p>
                    <p>
                      <span>Panel Durability:</span>Solar panels are a long-term
                      investment and should last at least 25-30 years. Look for
                      panels that can withstand extreme weather like high heat,
                      freezing temperatures, and hail. Panels made of
                      high-quality materials like tempered glass, aluminum
                      frames and waterproof connections will be the most
                      durable.
                    </p>
                    <p>
                      <span>Company Reputation:</span> Choose a reputable
                      company that has been designing and installing solar power
                      systems for several years. Check online reviews from their
                      customers about quality, service and reliability. Ask if
                      they offer financing options and a solid warranty on both
                      components and labor. A reputable company will ensure your
                      solar installation is safe, efficient and built to last.
                    </p>
                    <p>
                      <span>Maintenance:</span>While solar panels themselves are
                      low-maintenance, they still require occasional inspections
                      and servicing. Ask about the company’s maintenance plans
                      and service call fees before purchasing your system.
                      Proper maintenance will maximize your solar panel
                      performance and return on investment.
                    </p>
                    <p>
                      <span>Conclusion:</span>So there you have it, some red
                      flags to watch out for so you get the best solar solution
                      for your needs. Don’t get pressured into a quick sale or
                      long-term contract before you’ve done your research. Check
                      reviews, get multiple quotes, understand the technology
                      and incentives available. While solar can be a great
                      investment, you want to go in with eyes wide open. Do your
                      due diligence and you’ll end up with an affordable,
                      high-quality system to harness the sun’s energy for years
                      to come. The planet will thank you, and your wallet will
                      too. Good luck and happy solar shopping!
                    </p>
                  </div>
                </section>
              </div>
              <div className="blog_single_form">
                <div className="blog_single_form_wrapper" ref={container}>
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogSingleItem;
BlogSingleItem.propTypes = {
  image: PropTypes.any,
  heading: PropTypes.string,
  date: PropTypes.string,
};
