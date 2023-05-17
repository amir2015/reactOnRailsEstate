import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "semantic-ui-react";
// import { AuthConsumer } from "../providers/AuthProvider";
// import { AuthContext } from "../providers/AuthProvider";

const MainNavbar = ({}) => {
  const { pathname } = useLocation();

  const getRightNav = () => {
    const user = null;
    if (user) {
      console.log("I am authenticated");
      return (
        <Menu.Menu position="right">
          <Link to="/update_profile">
            <Menu.Item>Profile</Menu.Item>
          </Link>
          <Menu.Item onClick={() => console.log("log out")}>Logout</Menu.Item>
        </Menu.Menu>
      );
    } else {
      console.log("Not authenticated");
      return (
        <Menu.Menu position="right">
          <Link to="/register">
            <Menu.Item active={pathname === "/register"}>Register</Menu.Item>
          </Link>
          <Link to="/login">
            <Menu.Item active={pathname === "/login"}>Login</Menu.Item>
          </Link>
        </Menu.Menu>
      );
    }
  };
  return (
    <Menu pointing secondary>
      <Link to="/">
        <Menu.Item active={pathname === "/"}>Home</Menu.Item>
      </Link>
      {getRightNav()}
    </Menu>
  );
};

export default MainNavbar;
