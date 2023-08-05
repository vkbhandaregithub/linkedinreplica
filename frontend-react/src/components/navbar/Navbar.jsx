import React from "react";
import { MdSearch } from "react-icons/md";
import linkedin from "../../assets/linkedin.png";
import menu from "../../data/data";
import MenuList from "./MenuList";
import "./Navbar.css";
import { FaUser } from "react-icons/fa";
import { BiCaretDown } from "react-icons/bi";
const Navbar = () => {
  return (
    <>
      <div className="headerContainer">
        <div className="header__left">
          <div className="headerLeft__logo">
            <img src={linkedin} alt="logo" className="logo" />
          </div>
          <div className="headerLeft__search rounded-1 d-flex justify-content-start align-items-center">
            <div className="search__icon ps-3">
              <MdSearch />
            </div>
            <input type="text" placeholder="Search" className="search__input" />
          </div>
        </div>
        <div className="header__right">
          <nav>
            <ul className="menu-item">
              {menu.map((item, index) => (
                <li key={index} className="text-uppercase">
                  <MenuList name={item.name} Icon={item.icon} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
