import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = ({ VideoSlidItem, settings }) => {
    return <Slider {...settings}>{VideoSlidItem}</Slider>;
};

export default Sliders;
