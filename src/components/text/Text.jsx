import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import "./text.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Text = ({ text, smallText }) => {
  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);
  const phrase = text;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top`,
        end: `+=${window.innerHeight / 1}`,
        pin: true,
      },
      opacity: 1,
      color: "#54B8F2",
      ease: "none",
      stagger: 20,
    });
  };

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };
  return (
    <div className="text">
      <div className="container">
        <div className="wrapper" ref={container}>
          <div className="inner" ref={body}>
            {splitWords(phrase)}
          </div>
          <div className="smallText">{smallText}</div>
          <div className="readmore_btn">
            <Link to={"/about-us"}>Read more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Text;

Text.propTypes = {
  text: PropTypes.string,
  smallText: PropTypes.string,
};
