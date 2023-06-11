import React, { useState, useRef } from "react";
import downIcon from "../../assets/images/questionareImage/downIcon.png";

import "./Accordion.css";

function Accordion(props: any) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content: any = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="accordion__section">
      <p >
        {props.title}
        <img
          src={downIcon}
          onClick={toggleAccordion}
          className={`${setRotate}`}
          alt=""
        />
      </p>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        {props.content}
      </div>
    </div>
  );
}

export default Accordion;
