import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/admin.css";
import axios from 'axios';
import { localhost } from "../local";
import { useHistory } from "react-router";
import { Redirect } from "react-router";
import { isLogin } from "../data/auth";

export default function NewUser() {

    const history = useHistory();

    const [u_name, setU_name] = useState("");
    const [u_id, setU_id] = useState("");
    const [u_password, setU_password] = useState("");
    const [u_job, setU_job] = useState("");
    const [u_address, setU_address] = useState("");
    const [u_email, setU_email] = useState("");
    const [u_admin, setU_admin] = useState("0");


    function handleSubmit(event) {
        event.preventDefault();

        const newUser = {
            password: u_password,
            name: u_name,
            address: u_address,
            title: u_job,
            email: u_email,
            isAdmin: u_admin
        };

        console.log(newUser);

        axios.post(localhost + '/user', newUser,
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
                history.push("/userList")
            })


    }

    const successAlert = () => {
        alert("Thêm tài khoản mới thành công!");
    }

    return (
        <>
            {isLogin && newUserRender()}
            {!isLogin && (<Redirect to="/login" />)}
        </>
    );

    function newUserRender() {
        return (
            <>
                <div>
                    <h2 style={{ textAlign: "center", margin: "20px" }}>Tạo tài khoản mới</h2>
                    <div className="submit-form">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group size="lg" controlId="u_email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="text"
                                    value={u_email}
                                    required
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
                                    type="password"
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
                                style={{ width: "120px", marginTop: "20px", float: "right", marginBottom: "60px" }} variant="outline-success"
                                onClick={successAlert}>
                                Tạo
                            </Button>
                        </Form>
                    </div>

                </div>
            </>
        );
    }
}
