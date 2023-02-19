const images = [
  {
    src: "https://f.nooncdn.com/mpcms/EN0001/assets/beffdc53-26ca-45b1-b3d5-84c1a0909903.png",
  },
  {
    src: "https://f.nooncdn.com/mpcms/EN0001/assets/a079af80-5348-4e33-a87c-7825432c17ac.png",
  },
  {
    src: "https://f.nooncdn.com/mpcms/EN0001/assets/beffdc53-26ca-45b1-b3d5-84c1a0909903.png",
  },
  {
    src: "https://f.nooncdn.com/mpcms/EN0001/assets/c9289a52-80e4-46ce-9a39-47c408ea902a.png",
  },
  {
    src: "https://f.nooncdn.com/mpcms/EN0001/assets/daaee684-f30a-4896-9f8b-02405aec5dca.png",
  },
  {
    src: "https://f.nooncdn.com/mpcms/EN0001/assets/beffdc53-26ca-45b1-b3d5-84c1a0909903.png",
  },
  {
    src: "https://f.nooncdn.com/mpcms/EN0001/assets/c9289a52-80e4-46ce-9a39-47c408ea902a.png",
  },
  {
    src: "https://f.nooncdn.com/mpcms/EN0001/assets/beffdc53-26ca-45b1-b3d5-84c1a0909903.png",
  },
  {
    src: "https://f.nooncdn.com/mpcms/EN0001/assets/ed889b28-66e2-4ee0-aa41-be4c885ca396.png",
  },
];
const ImageSlider = () => {
  return (
    <div style={{ display: "flex" }}>
      {images.map(({ src }) => {
        return (
          <>
            <img
              style={{ width: "140px", height: "200px", margin: "5px" }}
              src={src}
              alt="arrow"
            />
          </>
        );
      })}
    </div>
  );
};

export default ImageSlider;
