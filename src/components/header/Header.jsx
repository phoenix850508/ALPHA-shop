import logo from "../../assets/icons/logo.svg";
import search from "../../assets/icons/search.svg";
import cart from "../../assets/icons/cart.svg";
import moon from "../../assets/icons/moon.svg";
import sun from "../../assets/icons/sun.svg";
import toggle from "../../assets/icons/toggle.svg";
import styles from "../styles/Header.module.scss";
import styled from "styled-components";

const StyleComponents = styled.div`
.nav-link {
    height: 100%;
    display: flex;
    align-items: center;
}
`


export default function Header() {
  return (
    <StyleComponents>
    <header className={`site-header ${styles.siteHeader}`}>
      <div className={`header-container mx-auto ${styles.headerContainer}`}>
        {/* navbar-toggle */}
        <input
          id="navbar-toggle"
          className={`d-none navbar-toggle ${styles.navbarToggle}`}
          type="checkbox"
        />
        <label
          htmlFor="navbar-toggle"
          className={`burger-container ${styles.burgerContainer}`}
        >
          <img
            className="nav-icon cursor-point"
            src={toggle}
            alt="toggle.svg"
          />
        </label>
        {/* navbar-menu */}
        <nav className={`navbar-menu ${styles.navbarMenu}`}>
          <ul className={`nav-list site-menu-list mr-auto ${styles.menuList}`}>
            <li className="nav-item">
              {/* eslint-disable-next-line */}
              <a className="nav-link secondary-text" href="#">
                男款
              </a>
            </li>
            <li className="nav-item">
              {/* eslint-disable-next-line */}
              <a className="nav-link" href="#">
                女款
              </a>
            </li>
            <li className="nav-item">
              {/* eslint-disable-next-line */}
              <a className="nav-link" href="#">
                最新消息
              </a>
            </li>
            <li className="nav-item">
              {/* eslint-disable-next-line */}
              <a className="nav-link" href="#">
                客製商品
              </a>
            </li>
            <li className="nav-item">
              {/* eslint-disable-next-line */}
              <a className="nav-link" href="#">
                聯絡我們
              </a>
            </li>
          </ul>
          <ul className={`nav-list site-action-list ${styles.actionList}`}>
            {/* search */}
            <li className="nav-item">
              <img
                className="nav-icon cursor-point"
                src={search}
                alt="search.svg"
              />
            </li>
            {/* cart */}
            <li className="nav-item">
              <img
                className="nav-icon cursor-point"
                src={cart}
                alt="cart.svg"
              />
            </li>
            <li id="theme-toggle" className="nav-item">
              {/* moon */}
              <img
                className="nav-icon cursor-point"
                src={moon}
                alt="moon.svg"
              />
              {/* sun */}
              <img
                className="d-none nav-icon cursor-point"
                src={sun}
                alt="sun.svg"
              />
            </li>
          </ul>
        </nav>
        {/* logo */}
        {/* eslint-disable-next-line */}
        <a className="header-logo-container" href="#">
          <img
            className={`nav-icon cursor-point ${styles.logo}`}
            src={logo}
            alt="logo.svg"
          />
        </a>
      </div>
    </header>
    </StyleComponents>
  );
}
