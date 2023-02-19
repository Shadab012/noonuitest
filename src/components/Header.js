const Header = () => {
  return (
    <div className="header__wrapper">
      <div className="nav__left__wrapper">
        <img
          style={{ height: "24px" }}
          src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
          alt="areaCode"
        />
        <div>
          <img
            src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg"
            alt="flag"
          />
          <div>
            <span>
              Deliver to
              <img
                style={{ marginLeft: "8px" }}
                src="https://z.nooncdn.com/s/app/com/noon/icons/dropdownArrow.svg"
                alt="arrow"
              />
            </span>
            <span>Dubai</span>
          </div>
        </div>
      </div>
      <div className="nav__center">
        <input type="text" placeholder="What are you looking for?" />
      </div>
      <div className="nav__right__wrapper">
        <span> العربية </span>
        <span>
          Sign in{" "}
          <img
            style={{ width: "17px", marginLeft: "7px" }}
            src="https://z.nooncdn.com/s/app/com/noon/icons/user_thin.svg"
            alt="sign in"
          />{" "}
        </span>
        <span>
          Cart{" "}
          <img
            style={{ width: "20px", height: "20px", marginLeft: "7px" }}
            src="https://z.nooncdn.com/s/app/com/noon/icons/cart.svg"
            alt="cart"
          />{" "}
        </span>
      </div>
    </div>
  );
};

export default Header;
