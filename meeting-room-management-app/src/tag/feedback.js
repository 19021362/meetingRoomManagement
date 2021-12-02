import axios from "axios";
import React, { useEffect, useState } from "react";
import { localhost } from "../local";
import { Form, Button } from "react-bootstrap";


const Feedback = () => {

    const [rooms, setRooms] = useState([]);
    const [roomId, setRoomId] = useState("1");
    const [feedback, setFeedback] = useState("");

    useEffect(() => {
        const fetchRooms = async () => {
            const result = await axios.get(localhost + "/room/all");
            setRooms(result.data);
        };

        fetchRooms();
    }, []);

    const handleSubmit = () => {
        const data = {
            room_id: roomId,
            feedback: feedback,
            isApprove: 0
        }

        axios.post(localhost + '/feedback', data,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      alert("Phản hồi của bạn đã được gửi đến quản trị viên. Cảm ơn về sự đóng góp cuả bạn!")
      setFeedback("");
    };

    const checkForm = () => {
        return feedback !== null && feedback !== "";
    }

    return (
        <>
            <h2 style={{ textAlign: "center", margin: "20px" }}>Gửi phản hồi</h2>
            <div className="submit-form">
                <Form>

                    <Form.Group size="lg" controlId="room">
                        <Form.Label>Phòng</Form.Label>
                        <select class="form-control" value={roomId}
                            onChange={(e) => setRoomId(e.target.value)}>
                            {rooms.map((room, index) => (
                                <option key={index} value={room.room_id}>{room.title}</option>
                            ))}
                        </select>
                    </Form.Group>

                    <Form.Group size="lg" controlId="feedback">
                        <Form.Label>Phản hồi</Form.Label>
                        <Form.Control
                            type="textarea" as="textarea"
                            style={{minHeight: "150px"}}
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                        />
                    </Form.Group>


                    <Button block size="md" type="button" disabled={!checkForm()}
                        style={{ width: "120px", marginTop: "20px", float: "right", marginBottom: "60px" }} variant="outline-info"
                        onClick={handleSubmit}>
                        Gửi
                    </Button>
                </Form>
            </div>
        </>
    );

};

export default Feedback;