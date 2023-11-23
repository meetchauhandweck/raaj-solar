import BlogSingleBanner from "../blogSingleBanner/blogSingleBanner";
import "./blogSingleItem.scss";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
const BlogSingleItem = ({
  image,
  heading,
  date,
  intro,
  introP1,
  introP2,
  introP3,
  blueSecondHeading,
  blueSecondHeadingContent,
  l1,
  l2,
  l3,
  l4,
  l5,
  l6,
  l7,
  blackHeading1,
  blackHeading1Content,
  blackHeading2,
  blackHeading2Content,
  blackHeading3,
  blackHeading3Content1,
  blackHeading3Content2,
  blueThirdHeading,
  blueThirdHeadingContent1,
  blueThirdHeadingContent2Heading,
  blueThirdHeadingContent2,
  blueThirdHeadingContent3,
  blueThirdHeadingContent3Heading,
  blueThirdHeadingContent4,
  blueThirdHeadingContent4Heading,
  blueThirdHeadingContent5,
  blueThirdHeadingContent5Heading,
  blueThirdHeadingContent6,
  blueForthHeading,
  blueForthHeadingContent1,
  blueForthHeadingContent2Heading,
  blueForthHeadingContent2,
  blueForthHeadingContent3,
  blueForthHeadingContent3Heading,
  blueForthHeadingContent4,
  blueForthHeadingContent4Heading,
  blueForthHeadingContent5_1,
  blueForthHeadingContent5_2,
  blueForthHeadingContent5Heading,
  blueForthHeadingContent6,
  blueForthHeadingContent6Heading,
  blueFifthHeading,
  blueFifthHeadingContent1,
  blueFifthHeadingContent2,
  blueFifthHeadingContent3,
  blueFifthHeadingContent4,
  blueFifthHeadingContent5,
  listBottomContent1,
  listBottomContent2,
  listBottomContent3,
  listBottomContent4,
  listBottomContent5,
  listBottomContent6,
  listBottomContent7,
  listBottomContent2Heading,
  listBottomContent3Heading,
  listBottomContent4Heading,
}) => {
  return (
    <div className="blogSingle_inner">
      <div className="blogSingleItem_wrapper_banner">
        <BlogSingleBanner image={image} subHeading={heading} date={date} />
      </div>
      <div className="blogSingle_content_wrapper">
        <div className="container">
          <div className="blogSingle_content_wrapper_inner">
            <div className="blogSingle_content_sec">
              <h2 id="initial-header" className="elementor-element-title">
                <span className="elementor-element-border">{intro}</span>
              </h2>
              <p className="elementor-element-text">{introP1}</p>
              <p className="elementor-element-text">{introP2}</p>
              <p className="elementor-element-text">{introP3}</p>
              <div>
                <img src={image} className="elementor-element-image" />
              </div>
              {blueSecondHeading && (
                <p className="elementor-element-border">
                  <h2 id="second-header" className="elementor-element-title">
                    {blueSecondHeading}
                  </h2>
                </p>
              )}
              {l1 || l2 || l3 || l4 || l5 || l6 || l7 ? (
                <>
                  <ul className="headingBottomList">
                    <li>{l1}</li>
                    <li>{l2}</li>
                    <li>{l3}</li>
                    <li>{l4}</li>
                    <li>{l5}</li>
                    <li>{l6}</li>
                    <li>{l7}</li>
                  </ul>
                  <div className="listBtn">
                    <Link
                      to={
                        "https://visitor-registration.renewableenergyindiaexpo.com/registration/?ref=exhibitors"
                      }
                      target="_blank"
                    >
                      Register now to visit
                    </Link>
                  </div>
                  <p className="elementor-element-text">{listBottomContent1}</p>
                  <p className="elementor-element-text">
                    <span>{listBottomContent2Heading}</span>
                    {listBottomContent2}
                  </p>
                  <p className="elementor-element-text">
                    <span>{listBottomContent3Heading}</span>
                    {listBottomContent3}
                  </p>
                  <p className="elementor-element-text">
                    <span>{listBottomContent4Heading}</span>
                    {listBottomContent4}
                  </p>
                  <p className="elementor-element-text">{listBottomContent5}</p>
                  <p className="elementor-element-text">{listBottomContent6}</p>
                  <p className="elementor-element-text">{listBottomContent7}</p>
                </>
              ) : null}
              <p className="elementor-element-text">
                {blueSecondHeadingContent}
              </p>
              {blackHeading1 && (
                <h2 id="third-header" className="elementor-element-title-black">
                  <span>{blackHeading1}</span>
                </h2>
              )}
              {blackHeading1Content && (
                <p className="elementor-element-text">{blackHeading1Content}</p>
              )}
              {blackHeading2 && (
                <h2
                  id="fourth-header"
                  className="elementor-element-title-black"
                >
                  <span>{blackHeading2}</span>
                </h2>
              )}
              {blackHeading2Content && (
                <p className="elementor-element-text">{blackHeading2Content}</p>
              )}
              {blackHeading3 && (
                <h2 id="fifth-header" className="elementor-element-title-black">
                  <span>{blackHeading3}</span>
                </h2>
              )}
              {blackHeading3Content1 && (
                <p className="elementor-element-text">
                  {blackHeading3Content1}
                </p>
              )}
              {blackHeading3Content2 && (
                <p className="elementor-element-text">
                  {blackHeading3Content2}
                </p>
              )}
              <h2 id="second-header" className="elementor-element-title">
                <span className="elementor-element-border">
                  {blueThirdHeading}
                </span>
              </h2>
              <p className="elementor-element-text">
                {blueThirdHeadingContent1}
              </p>
              <p className="elementor-element-text">
                <span>{blueThirdHeadingContent2Heading}</span>
                {blueThirdHeadingContent2}
              </p>
              <p className="elementor-element-text">
                <span>{blueThirdHeadingContent3Heading}</span>{" "}
                {blueThirdHeadingContent3}
              </p>
              <p className="elementor-element-text">
                <span>{blueThirdHeadingContent4Heading}</span>
                {blueThirdHeadingContent4}
              </p>
              <p className="elementor-element-text">
                <span>{blueThirdHeadingContent5Heading}</span>
                {blueThirdHeadingContent5}
              </p>
              <p className="elementor-element-text">
                {blueThirdHeadingContent6}
              </p>
              {blueFifthHeading ||
              blueFifthHeadingContent1 ||
              blueFifthHeadingContent2 ||
              blueFifthHeadingContent3 ||
              blueFifthHeadingContent4 ||
              blueFifthHeadingContent5 ? (
                <>
                  <p className="elementor-element-border">
                    <h2 id="eighth-header" className="elementor-element-title">
                      {blueFifthHeading}
                    </h2>
                  </p>
                  <p className="elementor-element-text">
                    {blueFifthHeadingContent1}
                  </p>
                  <p className="elementor-element-text">
                    {blueFifthHeadingContent2}
                  </p>
                  <p className="elementor-element-text">
                    {blueFifthHeadingContent3}
                  </p>
                  <p className="elementor-element-text">
                    {blueFifthHeadingContent4}
                  </p>
                  <p className="elementor-element-text">
                    {blueFifthHeadingContent5}
                  </p>
                </>
              ) : null}
              <p className="elementor-element-border">
                <h2 id="seventh-header" className="elementor-element-title">
                  {blueForthHeading}
                </h2>
              </p>
              <p className="elementor-element-text">
                {blueForthHeadingContent1}
              </p>
              <p className="elementor-element-text">
                <span>{blueForthHeadingContent2Heading}</span>
                {blueForthHeadingContent2}
              </p>
              <p className="elementor-element-text">
                <span>{blueForthHeadingContent3Heading}</span>{" "}
                {blueForthHeadingContent3}
              </p>
              <p className="elementor-element-text">
                <span>{blueForthHeadingContent4Heading}</span>{" "}
                {blueForthHeadingContent4}
              </p>
              <p className="elementor-element-text">
                <span>{blueForthHeadingContent5Heading}</span>
                {blueForthHeadingContent5_1}
              </p>
              <p className="elementor-element-text">
                {blueForthHeadingContent5_2}
              </p>
              <p className="elementor-element-text">
                <span>{blueForthHeadingContent6Heading}</span>
                {blueForthHeadingContent6}
              </p>
            </div>
            <TableOfContents />
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

Headings.propTypes = {
  headings: PropTypes.string,
  activeId: PropTypes.string,
};
