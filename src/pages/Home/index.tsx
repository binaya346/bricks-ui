import React from "react";
import MainLayout from "../../layouts/mainLayout";
import Dropdown from "../../components/dropdown";
import Menu from "../../components/menu";
import MenuItem from "../../components/menuItem";
import { Button } from "../../components/buttons";

const Home = () => {
  const menu = (
    <Menu>
      <MenuItem menuClass="hi">
        <a href="google.com">1st menu item</a>
      </MenuItem>
      <MenuItem>
        <a href="google.com">2nd menu item</a>
      </MenuItem>
      <MenuItem>
        <a href="google.com">3rd menu item</a>
      </MenuItem>
    </Menu>
  );
  return (
    <MainLayout>
      <div className="title">Home</div>
      <Dropdown
        overlay={menu}
        overlayClass="hello"
        trigger="click"
        placement="bottomRight"
      >
        <Button type="primary">Dropdown</Button>
      </Dropdown>
    </MainLayout>
  );
};
export default Home;
