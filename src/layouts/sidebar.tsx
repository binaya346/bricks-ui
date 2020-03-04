import React from "react";
import "../sass/layouts/sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar-listing-wrapper">
      <div className="sidebar-listing-wrapper-button">Home</div>
      <div className="sidebar-listing-wrapper-button">Button</div>
      <div className="sidebar-listing-wrapper-tooltip">Tooltip</div>
    </div>
  );
};
export default Sidebar;
