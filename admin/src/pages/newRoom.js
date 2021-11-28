import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/admin.css";
import axios from 'axios';
import { localhost } from "../local";
import { useHistory } from "react-router";
import { Redirect } from "react-router";
import { isLogin } from "../data/auth";


export default function NewRoom() {

    const history = useHistory();

    const [r_name, setR_name] = useState("");
    const [r_id, setr_id] = useState("");
    const [r_floor, setr_floor] = useState("");
    const [r_department, setr_department] = useState("");
    const [r_area, setr_area] = useState("");
    const [r_capacity, setr_capacity] = useState("");
    const [r_status, setr_status] = useState("1");
    const [r_equipment, setr_equipment] = useState("");


    function handleSubmit(event) {
        event.preventDefault();

        const newRoom = {
            title: r_name,
            floor: r_floor,
            department: r_department,
            area: r_area,
            capacity: r_capacity,
            equipment: r_equipment,
            status: r_status
        };

        console.log(newRoom);

        axios.post(localhost + '/room', newRoom,
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
                history.push("/roomList")
            })
    }

    const successAlert = () => {
        console.log(r_status);
        alert("Thêm phòng mới thành công!");

    }

    return (

        <>
            {isLogin && newRoomRender()}
            {!isLogin && (<Redirect to="/login" />)}
        </>
    );

    function newRoomRender() {
        return (
            <>
                <div>
                    <h2 style={{ textAlign: "center", margin: "20px" }}>Tạo phòng mới</h2>
                    <div className="submit-form">
                        <Form onSubmit={handleSubmit}>

                            <Form.Group size="lg" controlId="roomName">
                                <Form.Label>Tên phòng</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="text"
                                    required
                                    value={r_name}
                                    onChange={(e) => setR_name(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="roomfloor">
                                <Form.Label>Tầng</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={r_floor}
                                    required
                                    onChange={(e) => setr_floor(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="roomDepartment">
                                <Form.Label>Tòa</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={r_department}
                                    required
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
                                <Form.Control
                                    type="textarea" rows={3} style={{ height: "70px" }}
                                    value={r_equipment}
                                    onChange={(e) => setr_equipment(e.target.value)}
                                />
                            </Form.Group>


                            <Form.Group size="lg" controlId="roomStatus">
                                <Form.Label>Tình trạng</Form.Label>
                                <select className="form-control" value={r_status} onChange={(e) => setr_status(e.target.value)}>
                                    <option value="1">Hoạt động</option>
                                    <option value="0">Bảo trì</option>
                                </select>
                            </Form.Group>

                            <Button block size="md" type="submit"
                                style={{ width: "120px", float: "right", marginTop: "20px", marginBottom: "60px" }} variant="outline-success"
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
