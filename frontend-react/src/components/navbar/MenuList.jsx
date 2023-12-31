import React from "react";
import "./Navbar.css";
const MenuList = ({ name, Icon }) => {
  return (
    <div className="menu_container" title={name}>
      {<Icon className="iconsize" />} <div className="menusize">{name}</div>
    </div>
  );
};

export default MenuList;
