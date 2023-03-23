import React from "react";
import SliderImage from '../../constant/sliderImage'
function SliderContent({ activeIndex}) {
  return (
    <section>
      {SliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <h2 className="slide-title">{slide.title}</h2>
          <p className="slide-text">{slide.description}</p>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
