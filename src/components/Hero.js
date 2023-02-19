import React from "react";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div className="hero">
      <img
        style={{ width: "100%" }}
        src="https://f.nooncdn.com/mpcms/EN0001/assets/35ed38ac-b1f1-4d24-a7c3-a21aafc803c0.png"
        alt="banner"
      />
      <div className="image__wrapper">
        <Slider />
        <div style={{ width: "35%", display: "flex" }}>
          <img
            style={{ width: "50%" }}
            src="https://f.nooncdn.com/mpcms/EN0001/assets/c6f2bd47-5eca-4908-b3a5-d377e231622a.png"
            alt="banner"
          />
          <img
            style={{ width: "50%" }}
            src="https://f.nooncdn.com/mpcms/EN0001/assets/4b795127-3b55-499d-831b-a361e0eae5b0.png"
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
