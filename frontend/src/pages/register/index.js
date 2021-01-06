import React, { useState } from "react";
import "./index.scss";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { UseAuthContext } from "../../authcontext";

const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const authenticate = (email, password, confirmPassword) => {
  if (email.length <= 0) {
    alert("Email cannot be empty!");
    return false;
  } else if (!regex.test(email)) {
    alert("Please enter valid email address!");
    return false;
  } else if (password.length <= 0) {
    alert("Password cannot be empty!");
    return false;
  } else if (password != confirmPassword) {
    alert("Passwords mismatch!");
    return false;
  } else {
    return true;
  }
};

const Register = () => {
  const { setLogin } = UseAuthContext();
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="container">
      <div className="title">Register</div>
      <Form>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="Email"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder="Password"
            autoFocus
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            placeholder="Confirm Password"
            autoFocus
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          block
          size="lg"
          type="submit"
          onClick={() => {
            if (authenticate(email, password, confirmPassword)) {
              setLogin(true);
              history.push("/");
            }
          }}
        >
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
