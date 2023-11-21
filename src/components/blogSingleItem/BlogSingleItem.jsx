import BlogSingleBanner from "../blogSingleBanner/blogSingleBanner";
import "./blogSingleItem.scss";
import Form from "../form/Form";
import gsap from "gsap";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Headings = ({ headings, activeId }) => (
  <ul>
    {headings.map((heading) => (
      <li
        key={heading.id}
        className={heading.id === activeId ? "active" : ""}
        style={{ padding: "8px 5px 8px 5px" }}
      >
        <a
          href={`#${heading.id}`}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(`#${heading.id}`).scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          {heading.title}
        </a>
        {heading.items.length > 0 && (
          <ul>
            {heading.items.map((child) => (
              <li
                key={child.id}
                className={child.id === activeId ? "active" : ""}
              >
                <a
                  href={`#${child.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${child.id}`).scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {child.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);
/**
 * Dynamically generates the table of contents list, using any H2s and H3s it can find in the main text
 */
const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState([]);
  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("main h2"));
    // Created a list of headings, with H3s nested
    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);
  return { nestedHeadings };
};
const getNestedHeadings = (headingElements) => {
  const nestedHeadings = [];
  headingElements.forEach((heading, index) => {
    const { innerText: title, id } = heading;
    if (heading.nodeName === "H2") {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
      });
    }
  });
  return nestedHeadings;
};
const useIntersectionObserver = (setActiveId) => {
  const headingElementsRef = useRef({});
  useEffect(() => {
    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);
      // Get all headings that are currently visible on the page
      const visibleHeadings = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });
      const getIndexFromId = (id) =>
        headingElements.findIndex((heading) => heading.id === id);
      // If there is only one visible heading, this is our "active" heading
      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
        // If there is more than one visible heading,
        // choose the one that is closest to the top of the page
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };
    const observer = new IntersectionObserver(callback, {
      root: document.querySelector("iframe"),
      rootMargin: "0px",
    });
    const headingElements = Array.from(document.querySelectorAll("h2"));
    headingElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [setActiveId]);
};
/**
 * Renders the table of contents.
 */
const TableOfContents = () => {
  const [activeId, setActiveId] = useState("initial-header");
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId);
  const [show, setShow] = useState("hide");
  return (
    <nav aria-label="Table of contents">
      <div className="tableofborder">
        <div className="Tablecontent">
          <p onClick={() => setShow(!show)}>Table of content</p>
          <button className="btn" onClick={() => setShow(!show)}>
            <i
              className={`fas ${show ? "fa-chevron-down" : "fa-chevron-up"}`}
            />
          </button>
        </div>
        {show && <Headings headings={nestedHeadings} activeId={activeId} />}
      </div>
    </nav>
  );
};
const BlogSingleItem = ({ image, heading, date }) => {
  return (
    <div className="blogSingle_inner">
      <div className="blogSingleItem_wrapper_banner">
          <BlogSingleBanner image={image} subHeading={heading} date={date} />
        </div>
      <div className="container">
        <main>
          {/* <div>
            <div>
              <h1 className="elementor-element-heading">
                Don't Fall for These Solar Panel Traps: What to Know Before
                Buying From RAAJ Solar
              </h1>
            </div>
          </div>
          <div>
            <div>
              <ul className="section122">
                <li>
                  <a href="">
                    <span>
                      <i
                        aria-hidden="true"
                        className="fas fa-calendar icon"
                      ></i>
                    </span>
                    <span className="">October 3, 2023 </span>
                  </a>
                </li>
                <li className="section122list">
                  <a href="">
                    <span>
                      <i
                        aria-hidden="true"
                        className="far fa-comment-dots icon"
                      ></i>
                    </span>
                    <span>No Comments </span>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}

          <h2 id="initial-header" className="elementor-element-title">
            <span className="elementor-element-border">Intro</span>
          </h2>
          <p className="elementor-element-text">
            You’ve decided to go solar – awesome! Making your own clean energy
            and saving money on power bills sounds almost too good to be true.
            But hold up, before you sign that contract with RAAJ Solar or any
            other company, you need to watch out for some common traps that
            could seriously dim your solar excitement. As with any major
            purchase, doing your homework beforehand is key. Don’t get seduced
            by slick sales tactics and lofty promises of huge energy cost
            savings. The solar industry is booming these days, and some
            companies are in it more for profits than providing real value to
            customers. Keep reading to uncover the top tips and tricks for
            buying solar panels so you end up with an affordable system that
            actually works as advertised. The planet will thank you, and so will
            your wallet.
          </p>
          <div>
            <img src={image} className="elementor-element-image" />
          </div>
          <p className="elementor-element-border">
            <h2 id="second-header" className="elementor-element-title">
              Choosing the Right Solar Panel Manufacturer: Why RAAJ Solar Stands
              Out
            </h2>
          </p>
          <p className="elementor-element-text">
            When choosing a solar panel manufacturer, it’s important to consider
            a few key factors. RAAJ Solar stands out for several reasons:
          </p>
          <h2 id="third-header" className="elementor-element-title-black">
            <span>High-Efficiency Panels</span>
          </h2>
          <p className="elementor-element-text">
            RAAJ Solar uses the latest technology to produce panels that convert
            more of the sun’s energy into electricity. Their panels have
            efficiency ratings of up to 21.5%, compared to the typical 15-16% of
            standard panels. More efficiency means you’ll need fewer panels to
            power your home.
          </p>

          <h2 id="fourth-header" className="elementor-element-title-black">
            <span>Premium Quality</span>
          </h2>
          <p className="elementor-element-text">
            RAAJ Solar uses high-grade materials and rigorous testing to ensure
            their panels will last. Their panels come with a 25-year power
            warranty and are built to withstand extreme weather. Cheaper panels
            tend to degrade faster, losing up to 1% of power output each year.
            RAAJ’s high-quality panels maintain over 80% of their original
            efficiency even after 25 years.
          </p>

          <h2 id="fifth-header" className="elementor-element-title-black">
            <span>Experience and Customer Service</span>
          </h2>
          <p className="elementor-element-text">
            RAAJ Solar is an established company with over 15 years of
            experience. They have a proven track record and dedication to
            customer satisfaction. From design to installation, their team will
            guide you through the entire process. And if you have any issues
            after your system is up and running, their customer service
            department is there to help.
          </p>
          <p className="elementor-element-text">
            When making such an important investment, it pays to choose a
            reputable company that offers high-performance, long-lasting
            products and values your experience as a customer. RAAJ Solar checks
            all these boxes, making them a top choice for residential solar
            panels.
          </p>
          <h2 id="sixth-header" className="elementor-element-title">
            <span className="elementor-element-border">
              Watch Out for These Common Solar Panel Scams and Traps
            </span>
          </h2>
          <p className="elementor-element-text">
            When buying residential solar panels, you need to watch out for
            shifty sales tactics meant to take advantage of uninformed
            customers. Don’t fall for these traps!
          </p>
          <p className="elementor-element-text">
            <span>Bait and Switch Pricing:</span>Some companies advertise an
            attractive low price to lure you in, then jack up the final quote
            with hidden fees and addons once you show interest. Get multiple
            detailed quotes in writing upfront before signing anything.
          </p>
          <p className="elementor-element-text">
            <span>High Pressure Sales Tactics:</span> Door-to-door and
            telemarketing solar salespeople often use manipulative tactics to
            get you to buy on the spot. Never make a snap decision on such a big
            investment. Take your time to research options and get competing
            quotes.
          </p>
          <p className="elementor-element-text">
            <span>Lies About Tax Credits and Incentives:</span>Shady companies
            may claim you’ll get huge tax credits and rebates that don’t really
            exist. Do your own research on current federal, state and local
            solar incentives before believing a salesperson’s promises.
          </p>
          <p className="elementor-element-text">
            <span>Poor Quality Equipment: </span>Disreputable dealers sell
            cheap, subpar solar panels and inverters that won’t last. Only
            consider top tier panels with 25-year power warranties from
            reputable brands. Check reviews and ask an independent expert.
          </p>
          <p className="elementor-element-text">
            By being an informed consumer, you can avoid headaches and get the
            best value in residential solar panels. With the right company,
            solar can be an excellent investment for your home. Just make sure
            to watch out for these common traps before signing on the dotted
            line!
          </p>

          <p className="elementor-element-border">
            <h2 id="seventh-header" className="elementor-element-title">
              Key Factors to Consider When Buying Reliable Solar Panels for Your
              Home or Business
            </h2>
          </p>
          <p className="elementor-element-text">
            When buying solar panels for your home or business, there are a few
            key factors to keep in mind. The solar company and equipment you
            choose can make or break your experience with renewable energy.
          </p>
          <p className="elementor-element-text">
            <span>Panel Efficiency:</span>The efficiency rating indicates how
            much of the sun’s energy a solar panel can convert into usable
            electricity. Higher efficiency means fewer panels are needed, saving
            you space and money. For residential use, look for panels rated at
            least 16-20% efficient or higher. For commercial installations,
            choose panels of at least 18-22% efficiency or better.
          </p>
          <p className="elementor-element-text">
            <span>Panel Durability:</span> Solar panels are a long-term
            investment and should last at least 25-30 years. Look for panels
            that can withstand extreme weather like high heat, freezing
            temperatures, and hail. Panels made of high-quality materials like
            tempered glass, aluminum frames and waterproof connections will be
            the most durable.
          </p>
          <p className="elementor-element-text">
            <span>Company Reputation:</span> Choose a reputable company that has
            been designing and installing solar power systems for several years.
            Check online reviews from their customers about quality, service and
            reliability. Ask if they offer financing options and a solid
            warranty on both components and labor. A reputable company will
            ensure your solar installation is safe, efficient and built to last.
          </p>
          <p className="elementor-element-text">
            <span>Maintenance:</span>While solar panels themselves are
            low-maintenance, they still require occasional inspections and
            servicing. Ask about the company’s maintenance plans and service
            call fees before purchasing your system. Proper maintenance will
            maximize your solar panel performance and return on investment.
          </p>
          <p className="elementor-element-text">
            By keeping these factors in mind, you’ll be able to invest in
            high-quality, reliable solar panels that will provide you with
            affordable clean energy for decades to come. Make the choice that’s
            right for your needs and budget.
          </p>
          <p className="elementor-element-text">
            <span>Conclusion:</span> So there you have it, some red flags to
            watch out for so you get the best solar solution for your needs.
            Don’t get pressured into a quick sale or long-term contract before
            you’ve done your research. Check reviews, get multiple quotes,
            understand the technology and incentives available. While solar can
            be a great investment, you want to go in with eyes wide open. Do
            your due diligence and you’ll end up with an affordable,
            high-quality system to harness the sun’s energy for years to come.
            The planet will thank you, and your wallet will too. Good luck and
            happy solar shopping!
          </p>
        </main>
        <TableOfContents />
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
