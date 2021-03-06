import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import "../styles/content.css";
import axios from 'axios';
import { localhost } from "../local";
import MultiEmails from "../tag/multiEmail";
import { useHistory } from "react-router";
import { auth } from "../data/auth";
import Header from "../components/header";
import { isLogin } from "../data/auth";
import { Redirect } from "react-router";
import { Row, Col } from "react-bootstrap";


const Meeting = props => {

  const meeting = props.location.state;
  const history = useHistory();
  console.log(meeting);

  const [m_name, setm_name] = useState(meeting.subject);
  const [m_id, setm_id] = useState(meeting.event_id);
  const [m_desc, setm_desc] = useState(meeting.description);
  const [m_date, setm_date] = useState(meeting.date);
  const [m_Stime, setm_Stime] = useState(meeting.start_time);
  const [m_Etime, setm_Etime] = useState(meeting.end_time);
  const [m_type, setm_type] = useState(meeting.type);
  const [m_status, setm_status] = useState(meeting.status);
  const [m_creatorId, setm_creatorId] = useState(meeting.creator_id);
  const [m_roomId, setm_roomId] = useState(meeting.room_id);

  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const result = await axios.get(localhost + "/room/all");
      setRooms(result.data);
    };

    const fetchUsers = async () => {
      const result = await axios.get(localhost + "/user/all");
      setUsers(result.data);
    };

    const fetchParticipant = async () => {
      const result = await axios.get(localhost + '/meeting/' + m_id + '/participant');
      setParticipants(result.data);
    };



    fetchRooms();
    fetchUsers();
    fetchParticipant();
  }, []);

  function validateForm() {
    return 1;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const updateMeeting = {
      subject: m_name,
      description: m_desc,
      date: m_date,
      start_time: m_Stime,
      end_time: m_Etime,
      type: m_type,
      status: m_status,
      creator_id: m_creatorId,
      room_id: m_roomId
    };

    axios.put(localhost + '/meeting/' + m_id, updateMeeting,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(() => {
        history.push("/myMeeting");
      })
  }

  const successAlert = () => {
    alert("C????p nh????t th??ng tin cu????c ho??p tha??nh c??ng!");
  }





  return (
    <>
      {isLogin && meetingRender()}
      {!isLogin && (<Redirect to="/login" />)}
    </>
  );

  function meetingRender() {
    return (
      <>
        <Header />
        <div>

          <h2 style={{ textAlign: "center", margin: "20px" }}>Chi ti????t th??ng tin</h2>
          <div className="submit-form">
            <Form onSubmit={handleSubmit}>
              <Form.Group size="lg" controlId="m_id">
                <Form.Label>ID</Form.Label>
                <Form.Control
                  disabled={1}
                  type="text"
                  value={m_id}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="u_name">
                <Form.Label>Chu?? ??????</Form.Label>
                <Form.Control
                  type="text"
                  value={m_name}
                  onChange={(e) => setm_name(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="m_decs">
                <Form.Label>M?? ta??</Form.Label>
                <Form.Control
                  type="textare"
                  style={{ height: "80px" }}
                  value={m_desc}
                  onChange={(e) => setm_desc(e.target.value)}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group size="lg" controlId="m_date">
                    <Form.Label>Nga??y t???? ch????c</Form.Label>
                    <Form.Control
                      type="date"
                      value={m_date}
                      onChange={(e) => setm_date(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group size="lg" controlId="m_starttime">
                    <Form.Label>t???? gi????</Form.Label>
                    <Form.Control
                      type="time"
                      value={m_Stime}
                      onChange={(e) => setm_Stime(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group size="lg" controlId="m_endtime">
                    <Form.Label>??????n gi????</Form.Label>
                    <Form.Control
                      type="time"
                      value={m_Etime}
                      onChange={(e) => setm_Etime(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* <Form.Group size="lg" controlId="m_piority">
                <Form.Label>Ti??nh ch????t cu????c ho??p</Form.Label>
                <select class="form-control" value={m_type} onChange={(e) => setm_type(e.target.value)} disabled>
                  <option value="0">Bi??nh th??????ng</option>
                  <option value="1">Kh????n c????p</option>
                </select>
              </Form.Group> */}
              <Form.Group size="lg" controlId="m_room">
                <Form.Label>T???? ch????c ta??i pho??ng</Form.Label>
                <select class="form-control" value={m_roomId} onChange={(e) => setm_roomId(e.target.value)}>
                  {rooms.map((room, index) => (
                    <option key={index} value={room.room_id}>{room.status ? room.title : room.title + ' ??ang ba??o tri??'}</option>
                  ))}
                </select>
              </Form.Group>
              <div>
                <Form.Label>Ng??????i tham d????</Form.Label>
                <ListGroup>
                  {participants.map((user) => (
                    <ListGroup.Item as="li">{user.name}</ListGroup.Item>
                  ))}
                </ListGroup>
              </div>


              <Button block size="md" type="submit" disabled={!validateForm()}
                style={{ width: "120px", marginTop: "20px", float: "right", marginBottom: "60px" }} variant="outline-info"
                onClick={successAlert}>
                C????p nh????t
              </Button>
            </Form>
          </div>

        </div>
      </>
    );
  }
}


export default Meeting;