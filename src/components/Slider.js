import React, { useState, useEffect } from "react";
const slideImage = [
  "https://f.nooncdn.com/mpcms/EN0001/assets/69a0c337-ef13-4fbd-a138-583e28dbbb17.gif",

  "https://f.nooncdn.com/ads/banner-1008x1008/EN_NYX-CSWS-Hero-slider-homepage-Desktop_1008x210.1676694873.259677.jpg",

  "https://f.nooncdn.com/mpcms/EN0001/assets/dacd8bfa-5223-4ac1-bb3c-dc01c5b2d0f7.png",

  "https://f.nooncdn.com/mpcms/EN0001/assets/56921ba5-3479-46c4-8b02-4874d7f38489.png",
];

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((preState) =>
        preState == slideImage.length - 1 ? (preState = 0) : preState + 1
      );
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div
        className="slider"
        style={{ backgroundImage: `url(${slideImage[currentImage]})` }}
      ></div>
    </>
  );
};

export default Slider;
