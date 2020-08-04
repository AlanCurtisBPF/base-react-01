import React from "react";
import { NavLink } from "react-router-dom";

const ANav = () => {
  return (
    <div className="ANav">
      ANav
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Page01">Page01</NavLink>
      <NavLink to="/Page02">Page02</NavLink>
    </div>
  );
};

export default ANav;
