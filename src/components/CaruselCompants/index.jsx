import Slider from "react-slick";
import React, { useState, useEffect, useRef } from "react";

const data = [
  {
    title: "I Can’t Express Enough",
    paragrow:
      "I can’t express enough the pleasure it is to talk with Matt about the trucking industry and dispatching, There is so much more to the industry and dispatching than people realize. He takes the time to break it down and explain how all the pieces fit together. His patience and willingness to share his knowledge are greatly appreciated. I personally consider Matt as a good friend and appreciate the door of knowledge he has extended to me and hope that others do as well. Thank you, Matt. I wish you great success.",
    name: "Kathie Strangio",
    discrabe: "C Style Services Inc"
  },
  {
    title: "Great People Great Company",
    paragrow:
      "I’ve been using their services for 5 months and it’s one of the best companies I’ve worked with by far. Matt and his team are always available to help and always find a way to get you out of any situation you might run across.",
    name: "Ken",
    discrabe: "Timeless Solutions LLC"
  },
  {
    title: "Great People Great Company",
    paragrow:
      "I’ve been using their services for 5 months and it’s one of the best companies I’ve worked with by far. Matt and his team are always available to help and always find a way to get you out of any situation you might run across.",
    name: "Ken",
    discrabe: "Timeless Solutions LLC"
  },
  {
    title: "Great People Great Company",
    paragrow:
      "I’ve been using their services for 5 months and it’s one of the best companies I’ve worked with by far. Matt and his team are always available to help and always find a way to get you out of any situation you might run across.",
    name: "Ken",
    discrabe: "Timeless Solutions LLC"
  },
  {
    title: "Great People Great Company",
    discrabe:
      "I’ve been using their services for 5 months and it’s one of the best companies I’ve worked with by far. Matt and his team are always available to help and always find a way to get you out of any situation you might run across.",
    name: "Ken",
    discrabe: "Timeless Solutions LLC"
  },
  {
    title: "Great People Great Company",
    paragrow:
      "I’ve been using their services for 5 months and it’s one of the best companies I’ve worked with by far. Matt and his team are always available to help and always find a way to get you out of any situation you might run across.",
    name: "Ken",
    discrabe: "Timeless Solutions LLC"
  }
];

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "blue",borderRadius:100 }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "blue" ,borderRadius:100 }}
        onClick={onClick}
      />
    );
  }
const CarouselCom = () => {


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
  autoplaySpeed: 3000,
  };
  return (
    <div className="bg-blue-100">
      <Slider {...settings} a>
        {data.map((item, index) => {
          return (
            <div key={index} className="text-center px-10">
              <h1 className="text-2xl font-extrabold py-6">
                {item.title}
              </h1>
              <p className="text-lg font-sans py-4">
                {item.paragrow}
              </p>

              <h1 className="text-lg font-bold">
                {item.name}
              </h1>
              <p className="text-2xl mb-12">
                {item.discrabe}
              </p>
            </div>
          );
        })}
      </Slider>
    </div>
  );    
};

export default CarouselCom;
