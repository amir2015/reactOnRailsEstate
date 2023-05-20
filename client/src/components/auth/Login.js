import React, { useContext, useState } from "react";
import { Form } from "semantic-ui-react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { handleLogin } = useContext(AuthContext);

  const [user, setUser] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user);
    setUser({ email: "", password: "" });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          required
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
          required
        />
        <Form.Button type="submit">Log in</Form.Button>
      </Form>
    </div>
  );
};

export default Login;
