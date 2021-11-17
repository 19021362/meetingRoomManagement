import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function NewRoom() {

    const [u_name, setU_name] = useState("");
    const [u_id, setU_id] = useState("");
    const [u_password, setU_password] = useState("");
    const [u_job, setU_job] = useState("");
    const [u_department, setU_department] = useState("");
    const [u_email, setU_email] = useState("");
    const [u_admin, setU_admin] = useState("");
    
    function validateForm() {
        return ((u_id.length > 0) && (u_name.length > 0) && (u_password > 0));
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    const successAlert = () => {
        alert("Thêm phòng mới thành công!");
    }

    return (
        <>
            <div>
                <div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group size="lg" controlId="startTime">
                            <Form.Label>Họ tên</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                value={u_name}
                                onChange={(e) => setU_name(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="finishTime">
                            <Form.Label>Id</Form.Label>
                            <Form.Control
                                type="text"
                                value={u_id}
                                onChange={(e) => setU_id(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="finishTime">
                            <Form.Label>Mật khẩu</Form.Label>
                            <Form.Control
                                type="password"
                                value={u_password}
                                onChange={(e) => setU_password(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="finishTime">
                            <Form.Label>Chức vụ</Form.Label>
                            <Form.Control
                                type="text"
                                value={u_job}
                                onChange={(e) => setU_job(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="finishTime">
                            <Form.Label>Trụ sở</Form.Label>
                            <Form.Control
                                type="text"
                                value={u_department}
                                onChange={(e) => setU_department(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="finishTime">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                value={u_email}
                                onChange={(e) => setU_email(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="room">
                            <Form.Label>Quản trị viên</Form.Label>
                            <select class="form-control" value={u_admin} onChange={(e) => setU_admin(e.target.value)}>
                                <option>Không</option>
                                <option>Có</option>
                            </select>
                        </Form.Group>
                    </Form>
                </div>
                <Button block size="md" type="button" disabled={!validateForm()}
                    style={{ width: "120px", margin: "20px 10px 10px 10px" }} variant="outline-primary"
                    onClick={successAlert}>
                    Tạo
                </Button>
            </div>
        </>
    );
}
