import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../providers/AuthProvider";
import Button from "react-bootstrap/Button";
const Login = () => {
  const { handleLogin } = useContext(AuthContext);

  const [user, setUser] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user);
    setUser({ email: "", password: "" });
  };
  return (
    // {/* <Form onSubmit={handleSubmit}>
    //   <label htmlFor="">Email</label>
    //   <input
    //     type="email"
    //     name="email"
    //     value={user.email}
    //     onChange={(e) => {
    //       setUser({ ...user, email: e.target.value });
    //     }}
    //     required
    //   />
    //   <label htmlFor="">Password</label>
    //   <input
    //     type="password"
    //     name="password"
    //     value={user.password}
    //     onChange={(e) => {
    //       setUser({ ...user, password: e.target.value });
    //     }}
    //     required
    //   />
    //   <Form.Button type="submit">Log in</Form.Button>
    // </Form> */}
    <>
      <div className="d-flex flex-column align-items-center m-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button variant="dark" type="submit">
            Log In{" "}
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
