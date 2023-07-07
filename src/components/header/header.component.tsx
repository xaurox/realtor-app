import { useState } from "react";
import { NavLink } from "react-router-dom";

import appLogo from "../../assets/realtor-logo.png";

import styles from "./header.module.scss";

const {
  header,
  header__logo,
  header__container,
  logo,
  navLinks,
  navLinks__item,
  navLinks_active,
  hamburger,
  hamburger_active,
  bar,
} = styles;

const Header = () => {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);

  const toggleBurger = () => {
    setIsBurgerOpened((isBurgerOpened) => !isBurgerOpened);
  };

  return (
    <div className={header}>
      <div className={header__container}>
        <div className={`${header__logo} ${logo}`}>
          <img src={appLogo} alt="realtor app logo" />
          <p>Realtor</p>
        </div>
        <div className={`${navLinks} ${isBurgerOpened ? navLinks_active : ""}`}>
          <NavLink to="/offers" className={navLinks__item}>
            Offers
          </NavLink>
          <NavLink to="/create-offer" className={navLinks__item}>
            Create offer
          </NavLink>
          <NavLink to="/login" className={navLinks__item}>
            Login
          </NavLink>
        </div>
        <div
          className={`${hamburger} ${isBurgerOpened ? hamburger_active : ""}`}
          onClick={toggleBurger}
        >
          <div className={bar}></div>
          <div className={bar}></div>
          <div className={bar}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
