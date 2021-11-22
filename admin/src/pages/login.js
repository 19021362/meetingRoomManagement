
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/login.css";
import axios from "axios";
import { setAuth } from "../data/auth";
import { localhost } from "../local";
import { Redirect, useHistory } from "react-router";

export default function Login() {
  const history = useHistory();
  const [u_email, setEmail] = useState("");
  const [u_password, setPassword] = useState("");

  function validateForm() {
    return u_email.length > 0 && u_password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const account = {
      email: u_email,
      password: u_password
    }

    axios.post(localhost + '/admin/login', account,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        setAuth(res.data);
      })
      .then(() => {
        history.push("/");
      })
  }

  return (
    <>

      <div className="LoginSignup">
        <h2 style={{ textAlign: "center" }}>Đăng nhập</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Tên đăng nhập</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={u_email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              value={u_password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}
            style={{ width: "320px", marginTop: "20px" }} variant="outline-primary">
            Đăng nhập
          </Button>
        </Form>
      </div>
    </>
  );
}