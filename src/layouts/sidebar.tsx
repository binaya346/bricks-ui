import React from "react";
import "../sass/layouts/sidebar.scss";
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
    </div>
  );
};
export default Sidebar;
