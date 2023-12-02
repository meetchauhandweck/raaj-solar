import { useRef, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import "./text.scss";
import PropTypes from "prop-types";
import closeIcon from "../../images/closeIcon.svg";

const Text = ({ text, smallText }) => {
  const [popup, setPopup] = useState(false);
  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);
  const phrase = text;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const openPopup = () => {
    setPopup(true);
  };
  const closePopup = () => {
    setPopup(false);
  };
  if (popup) {
    document.body.classList.add("popup");
  } else {
    document.body.classList.remove("popup");
  }

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
          <div className="readmore_btn" onClick={openPopup}>
            {/* <Link to={"/about-us"}>Read more</Link> */}
            Read more
          </div>
        </div>
        {popup && (
          <div className="popup">
            <div className="popup_wrapper">
              <div className="popup_wrapper_text">
                <p>
                  {` “RAAJ” is a reliable MBB – Solar PV Module Manufacturer in India
                that specialises in Manufacturing MONO PERC Half Cut Cell
                (Bi-Facial / Mono Facial ) & Poly-crystalline solar panels and
                is headquartered in Ahmedabad , Gujarat . “RAAJ” has a fully
                automated state-of-the-art manufacturing line with a capacity of
                300 MW and is expanding its manufacturing facility up to 500 MW
                by 2025 in TOP - CORN (N-Type) & HJT(Hytrojunction Technology).`}
                </p>
                <p>
                  {` “RAAJ” Manufacturer Solar Panels NON DCR & DCR (DOMESTIC CELL
                REQUIRED) with Made In India . RAAJ has available ratings upto
                335 Wp in POLY & 550 Wp in MONO PERC.`}
                </p>
                <p>
                  {`  “RAAJ” PV modules are manufactured in compliance with the
                Ministry of New and Renewable Energy (MNRE) approved guidelines.
                RAAJ modules are also listed in the ALMM. RAAJ PV modules are
                perfect for various applications such as ground-mounted ,
                Industrial, Commercial, residential, and solar water pumping
                systems. We are committed to providing impeccable quality and
                cost-effective solar energy solutions in PAN India and across
                the globe. With RAAJ Solar, you can confidently invest in the
                most advanced solar energy technology available today.`}
                </p>
              </div>
              <div className="close_btn" onClick={closePopup}>
                <img src={closeIcon} alt="closeIcon" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Text;

Text.propTypes = {
  text: PropTypes.string,
  smallText: PropTypes.string,
};
