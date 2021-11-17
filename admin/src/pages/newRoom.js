import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/admin.css";

export default function NewRoom() {

    const [r_name, setR_name] = useState("");
    const [r_id, setr_id] = useState("");
    const [r_floor, setr_floor] = useState("");
    const [r_department, setr_department] = useState("");
    const [r_area, setr_area] = useState("");

    const [r_capacity, setr_capacity] = useState("");
    const [r_status, setr_status] = useState("");
    const [r_equipment, setr_equipment] = useState("");

    function validateForm() {
        return (r_name.length > 0);
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
                <h2 style={{ textAlign: "center", margin: "20px" }}>Tạo phòng mới</h2>
                <div class="submit-form">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group size="lg" controlId="roomName">
                            <Form.Label>Tên phòng</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                value={r_name}
                                onChange={(e) => setR_name(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="roomfloor">
                            <Form.Label>Tầng</Form.Label>
                            <Form.Control
                                type="number"
                                value={r_floor}
                                onChange={(e) => setr_floor(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="roomDepartment">
                            <Form.Label>Tòa</Form.Label>
                            <Form.Control
                                type="text"
                                value={r_department}
                                onChange={(e) => setr_department(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="roomCapacity">
                            <Form.Label>Sức chứa</Form.Label>
                            <Form.Control
                                type="number"
                                value={r_capacity}
                                onChange={(e) => setr_capacity(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group size="lg" controlId="roomArea">
                            <Form.Label>Diện tích</Form.Label>
                            <Form.Control
                                type="number"
                                value={r_area}
                                onChange={(e) => setr_area(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group size="lg" controlId="roomEquipment">
                            <Form.Label>Trang thiết bị</Form.Label>
                            <Form.Control as="textarea"
                                type="textarea" rows={3} style={{height:"70px"}}
                                value={r_equipment}
                                onChange={(e) => setr_equipment(e.target.value)}
                            />
                        </Form.Group>


                        <Form.Group size="lg" controlId="roomStatus">
                            <Form.Label>Tình trạng</Form.Label>
                            <select class="form-control" value={r_status} onChange={(e) => setr_status(e.target.value)}>
                                <option>Hoạt động</option>
                                <option>Bảo trì</option>
                            </select>
                        </Form.Group>
                    </Form>
                </div>
                <Button block size="md" type="button" disabled={!validateForm()}
                    style={{ width: "120px", margin: "10px 250px 10px 150px" }} variant="outline-success"
                    onClick={successAlert}>
                    Tạo
                </Button>
            </div>
        </>
    );
}
