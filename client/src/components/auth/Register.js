import { Button, Form } from "react-bootstrap";
import React, { useContext, useState } from "react";

const Register = () => {
  // const [user, setUser] = useState({
  //   email: "",
  //   password: "",
  //   passwordConfirm: "",
  // });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (user.password === user.passwordConfirm) {
    //   setUser({ email: "", password: "" });
    // } else {
    //   alert("Passwords Do not match!");
    // }
    console.log("register");
  };
  return (
    <div className="d-flex flex-column align-items-center m-5">
      {" "}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            // value={user.email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            // required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="PasswordConfirm"
            // value={user.passwordConfirm}
            onChange={(e) => setPassword(e.target.value)}
            // required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password Confirm</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password Confirm"
            onChange={(e) => setPasswordConfirm(e.target.value)}
            // required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default Register;
