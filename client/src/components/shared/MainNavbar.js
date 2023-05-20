import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { AuthContext } from "../../providers/AuthProvider";
import React, { useContext } from "react";

export const MainNavbar = () => {
  const { authenticated, testingValue, handleLogout, user } =
    useContext(AuthContext);
  console.log(testingValue, "testing value");
  console.log(authenticated);
  const getRightNav = () => {
    if (user) {
      console.log("I am authenticated");
      return (
        <Menu.Menu position="right">
          <Link to="/update_profile">
            <Menu.Item>Profile</Menu.Item>
          </Link>
          <Menu.Item onClick={() => handleLogout()}>Logout</Menu.Item>
        </Menu.Menu>
      );
    } else {
      console.log("Not authenticated");
      return (
        <Menu.Menu position="right">
          <Link to="/register">
            <Menu.Item>Register</Menu.Item>
          </Link>
          <Link to="/login">
            <Menu.Item>Login</Menu.Item>
          </Link>
        </Menu.Menu>
      );
    }
  };
  return (
    <Menu pointing secondary>
      <Link to="/">
        <Menu.Item>Home</Menu.Item>
      </Link>
      {getRightNav()}
    </Menu>
  );
};

export default MainNavbar;
