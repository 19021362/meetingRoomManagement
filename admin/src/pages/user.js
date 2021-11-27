import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/admin.css";
import axios from 'axios';
import { localhost } from "../local";
import { useHistory } from "react-router";
import Header from "../components/header";


const User = props => {

  const user = props.location.state;
  const history = useHistory();
  console.log(user);

  const [u_name, setU_name] = useState(user.name);
  const [u_id, setU_id] = useState(user.user_id);
  const [u_password, setU_password] = useState(user.password);
  const [u_job, setU_job] = useState(user.title);
  const [u_address, setU_address] = useState(user.address);
  const [u_email, setU_email] = useState(user.email);
  const [u_admin, setU_admin] = useState(user.isAdmin);

  function handleSubmit(event) {
    event.preventDefault();

    const updateUser = {
      password: u_password,
      name: u_name,
      address: u_address,
      title: u_job,
      isAdmin: u_admin
    };

    console.log(updateUser);

    axios.put(localhost + '/user/' + u_id, updateUser,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .then(() => {
        history.push("/userList");
      })
  }

  const successAlert = () => {
    alert("Cập nhật tài khoản thành công!");
  }



  return (
    <>
      <Header />
      <div>
        <h2 style={{ textAlign: "center", margin: "20px" }}>Chi tiết thông tin</h2>
        <div className="submit-form">
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="u_id">
              <Form.Label>ID</Form.Label>
              <Form.Control
                disabled={1}
                type="text"
                value={u_id}
                onChange={(e) => setU_email(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="u_email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                disabled={1}
                type="text"
                value={u_email}
                onChange={(e) => setU_email(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="u_name">
              <Form.Label>Họ tên</Form.Label>
              <Form.Control
                type="text"
                value={u_name}
                required
                onChange={(e) => setU_name(e.target.value)}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="u_password">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                type="text"
                value={u_password}
                required
                onChange={(e) => setU_password(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="u_title">
              <Form.Label>Chức vụ</Form.Label>
              <Form.Control
                type="text"
                value={u_job}
                onChange={(e) => setU_job(e.target.value)}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="u_address">
              <Form.Label>Địa chỉ</Form.Label>
              <Form.Control
                type="text"
                value={u_address}
                onChange={(e) => setU_address(e.target.value)}
              />
            </Form.Group>


            <Form.Group size="lg" controlId="u_admin">
              <Form.Label>Quản trị viên</Form.Label>
              <select class="form-control" value={u_admin} onChange={(e) => setU_admin(e.target.value)}>
                <option value="0">Không</option>
                <option value="1">Có</option>
              </select>
            </Form.Group>

            <Button block size="md" type="submit"
              style={{ width: "120px", marginTop: "20px", float: "right", marginBottom: "60px" }} variant="outline-info"
              onClick={successAlert}>
              Cập nhật
            </Button>
          </Form>
        </div>

      </div>
    </>
  );
}


export default User;