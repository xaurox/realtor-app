import { NavLink } from "react-router-dom";

import appLogo from "../../assets/realtor-logo.png";

import styles from "./header.module.scss";

const {
  header,
  header__logo,
  header__navLinks,
  header__account,
  header__container,
  logo,
  navLinks,
  navLinks__item,
  account,
} = styles;

const Header = () => {
  return (
    <div className={header}>
      <div className={header__container}>
        <div className={`${header__logo} ${logo}`}>
          <img src={appLogo} alt="realtor app logo" />
          <p>Realtor</p>
        </div>
        <div className={`${header__navLinks} ${navLinks}`}>
          <NavLink to="/offers" className={navLinks__item}>
            Offers
          </NavLink>
          <NavLink to="/create-offer" className={navLinks__item}>
            Create offer
          </NavLink>
          <NavLink to="/login" className={`${header__account} ${account}`}>
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
