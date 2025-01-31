import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const handleRegister = (user) => {
    axios
      .post("/api/auth", user)
      .then((res) => {
        setUser(res.data.data);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  const handleLogin = (user) => {
    axios
      .post("/api/auth/sign_in", user)
      .then((res) => {
        setUser(res.data.data);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  const handleLogout = () => {
    axios.delete("/api/auth/sign_out").then((res) => {
      setUser(null);
      navigate("/");
    });
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        handleRegister: handleRegister,
        handleLogin: handleLogin,
        handleLogout: handleLogout,
        testingValue: "testValueeeee",
        authenticated: user !== null,
        setUser: (user) => setUser(user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
