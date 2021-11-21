import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/admin.css";
const User = props => {

  const user = props.location.state;
  console.log(user);

  const [u_name, setU_name] = useState(user.name);
  const [u_id, setU_id] = useState(user.user_id);
  const [u_password, setU_password] = useState(user.password);
  const [u_job, setU_job] = useState(user.title);
  const [u_address, setU_address] = useState(user.address);
  const [u_email, setU_email] = useState(user.email);
  const [u_admin, setU_admin] = useState(user.isAdmin);

  function validateForm() {
    return ((u_email.length > 0) && (u_name.length > 0) && (u_password.length > 0));
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const successAlert = () => {
    alert("Thêm tài khoản mới thành công!");
  }



  return (
    <>
      <div>
        <h2 style={{ textAlign: "center", margin: "20px" }}>Chi tiết thông tin</h2>
        <div className="submit-form">
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="u_id">
              <Form.Label>ID</Form.Label>
              <Form.Control
                disabled = {1}
                type="text"
                value={u_id}
                onChange={(e) => setU_email(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="u_email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                disabled = {1}
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
                onChange={(e) => setU_name(e.target.value)}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="u_password">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control                
                type="text"
                value={u_password}
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
                <option>Không</option>
                <option>Có</option>
              </select>
            </Form.Group>
          </Form>
        </div>
        <Button block size="md" type="button" disabled={!validateForm()}
          style={{ width: "120px", margin: "10px 250px 10px 150px" }} variant="outline-info"
          onClick={successAlert}>
          Cập nhật
        </Button>
      </div>
    </>
  );
}


export default User;