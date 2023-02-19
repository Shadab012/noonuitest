import React from "react";
const category = [
  "ELECTRONICS",
  "MEN",
  "WOMEN",
  "HOME",
  "BEAUTY & FRAGRANCE",
  "BABY & TOYS",
  "SPORTS",
  "BESTSELLERS",
  "SELL ON NOON",
];
const Categories = () => {
  return (
    <div className="category__wrapper">
      <div>
        ALL CATEGORIES{" "}
        <img
          style={{ marginLeft: "8px" }}
          src="https://z.nooncdn.com/s/app/com/noon/icons/dropdownArrow.svg"
          alt="arrow"
        />
      </div>
      {category.map((item) => {
        return <div key={item}>{item}</div>;
      })}
      <div>
        <span>noon</span>
        <span>GROCERY</span>
      </div>
    </div>
  );
};

export default Categories;
