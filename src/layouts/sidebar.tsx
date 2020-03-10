import React from "react";
import "../sass/layouts/sidebar.scss";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar-listing-wrapper">
      <div className="sidebar-listing-title">General</div>
      <a href="/home">
        <div className="sidebar-listing-items">Home</div>
      </a>
      <a href="/button">
        <div className="sidebar-listing-items">Button</div>
      </a>
      <a href="/tooltip">
        <div className="sidebar-listing-items">Tooltip</div>
      </a>
      <NavLink to="/" activeClassName="active" exact>Home</NavLink>
      <NavLink to="/button" activeClassName="active" exact>Buttons</NavLink>
      <NavLink to="/tooltip" activeClassName="active" exact>Tooltip</NavLink>
      <NavLink to="/typography" activeClassName="active" exact>Typography</NavLink>
    </div>
  );
};
export default Sidebar;
