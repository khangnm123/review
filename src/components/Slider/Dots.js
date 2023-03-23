import React from "react";
import SliderImage from '../../constant/sliderImage'
function Dots({ activeIndex, onclick, sliderImage }) {
  return (
    <div className="all-dots">
      {SliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;
