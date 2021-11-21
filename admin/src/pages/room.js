import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/admin.css";
import axios from 'axios';

const Room = props => {

  const room = props.location.state;

  const [r_name, setR_name] = useState(room.name);
  const [r_id, setr_id] = useState(room.room_id);
  const [r_floor, setr_floor] = useState(room.floor);
  const [r_department, setr_department] = useState(room.department);
  const [r_area, setr_area] = useState(room.area);
  const [r_capacity, setr_capacity] = useState(room.capacity);
  const [r_status, setr_status] = useState(room.status);
  const [r_equipment, setr_equipment] = useState(room.equipment);

  function validateForm() {
    return (r_name.length > 0);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const successAlert = () => {
    alert("Cập nhật thành công!");
  }

  console.log(props.location.state);

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center", margin: "20px" }}>Chi tiết thông tin</h2>
        <div className="submit-form">
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="roomName">
              <Form.Label>ID phòng</Form.Label>
              <Form.Control
                disabled={1}
                type="text"
                value={r_id}
              />
            </Form.Group>
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
                type="textarea" rows={3} style={{ height: "70px" }}
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
        <div>
          <Button block size="md" type="button" disabled={!validateForm()}
            style={{ width: "120px", margin: "10px 250px 10px 150px", }} variant="outline-info"
            onClick={successAlert}>
            Cập nhật
          </Button>
        </div>

      </div>
    </>
  );
};

export default Room;