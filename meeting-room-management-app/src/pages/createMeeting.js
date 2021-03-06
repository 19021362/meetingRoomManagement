
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import MultiEmails from '../tag/multiEmail.js';
import "../styles/createMeeting.css";
import axios from "axios";
import { localhost } from "../local.js";
import { useHistory } from "react-router";
import { auth } from "../data/auth.js";
import { participants, removeParticipant } from "../data/participant.js";
import { Redirect } from "react-router";
import { isLogin } from "../data/auth.js";
import allLocales from '@fullcalendar/core/locales-all';
import { Tooltip } from "bootstrap";


export default function CreateMeeting() {

    const [formStep, setFormStep] = useState(0);

    const [m_name, setM_name] = useState("");
    const [m_desc, setM_desc] = useState("");
    const [m_date, setM_date] = useState("");
    const [m_startTime, setM_startTime] = useState("");
    const [m_finishTime, setM_finishTime] = useState("");
    const [m_room, setM_room] = useState(1);
    const [m_priority, setM_priority] = useState("NORMAL")

    const [resourceList, setResource] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [eventList, setEvent] = useState([]);
    const [userEventList, setUserEvent] = useState([]);

    const history = useHistory();


    useEffect(() => {

        const fetchUserEvents = async () => {
            const result = await axios.get(localhost + '/user/' + auth.user_id + '/meetings/fullcalendar');
            setUserEvent(result.data.data);
        };

        const fetchEvents = async () => {
            const result = await axios.get(localhost + "/meeting/all/fullcalendar");
            setEvent(result.data);
        };

        const fetchResources = async () => {
            const result = await axios.get(localhost + "/room/all/fullcalendar");
            setResource(result.data);
        };

        const fetchRooms = async () => {
            const result = await axios.get(localhost + "/room/all");
            setRooms(result.data);
        };

        fetchUserEvents();
        fetchEvents();
        fetchResources();
        fetchRooms()
    }, [])


    function validateForm() {
        return (m_name.length > 0 && m_date.length > 0);
    }

    async function handleSubmit() {

        const newMeeting = {
            subject: m_name,
            description: m_desc,
            date: m_date,
            start_time: m_startTime,
            end_time: m_finishTime,
            type: m_priority,
            room_id: m_room,
            creator_id: auth.user_id,
        };

        console.log(newMeeting);

        const res = await axios.post(localhost + "/meeting", newMeeting,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });

        console.log(res.data.event_id);

        successAlert();

        postParticipant(res.data.event_id);
    }


    const next = () => {
        setFormStep(cur => cur + 1);
    }

    const previous = () => {
        setFormStep(cur => cur - 1);
    }

    function successAlert() {

        alert("Ta??o cu????c ho??p m????i tha??nh c??ng!");

        history.push("/createMeeting");
    };

    function postParticipant(props) {
        console.log(participants);
        console.log(props);
        axios.post(localhost + '/meeting/' + props + '/participant', participants,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });

        removeParticipant();
    };

    return (
        <>
            {isLogin && creatMeetingRender()}
            {!isLogin && (<Redirect to="/login" />)}
        </>
    );

    function creatMeetingRender() {
        return (
            <>
                <div className="Crm-form">
                    <div><h3>Ta??o cu????c ho??p m????i!</h3></div>
                    <div class="Name-form">
                        <Form id="form-1">
                            {formStep === 0 && fstep1()}
                        </Form>
                        <Form id="form-2">
                            {formStep === 1 && fstep2()}
                        </Form>
                    </div>

                </div>

                <div class="Crm-content">
                    {formStep === 0 && cstep1(userEventList)}
                    {formStep === 1 && cstep2(eventList)}
                </div>
            </>
        );
    }

    function fstep1() {
        return (
            <>
                <Form.Group size="lg" controlId="name">
                    <Form.Label>T??n cu????c ho??p</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        required
                        value={m_name}
                        onChange={(e) => setM_name(e.target.value)}
                    />
                </Form.Group>

                <Form.Group size="lg" controlId="date">
                    <Form.Label>Nga??y t???? ch????c</Form.Label>
                    <Form.Control
                        type="date"
                        value={m_date}
                        required
                        onChange={(e) => setM_date(e.target.value)}
                    />
                </Form.Group>

                <Form.Group size="lg" controlId="desc">
                    <Form.Label>Th??m m?? ta??</Form.Label>
                    <Form.Control as="textarea"
                        type="textarea" row="3"
                        style={{ minHeight: "100px" }}
                        value={m_desc}
                        onChange={(e) => setM_desc(e.target.value)}
                    />
                </Form.Group>

                {/* <Form.Group size="lg" controlId="priority">
                    <Form.Label>M????c ?????? ??u ti??n</Form.Label>
                    <Form.Control as="select" value={m_priority} onChange={(e) => setM_priority(e.target.value)}>
                        <option value="NORMAL">Th??ng th??????ng</option>
                        <option value="IMPORTANT">Kh????n c????p</option>
                    </Form.Control>

                </Form.Group> */}

                <Button block size="lg" type="button" disabled={!validateForm()}
                    style={{ width: "120px", margin: "20px 10px 10px 10px" }} variant="outline-primary"
                    onClick={next}>
                    Ti????p
                </Button>

            </>
        );
    }

    function fstep2() {
        return (
            <>
                <Form.Group size="lg" controlId="startTime">
                    <Form.Label>Th????i gian t????</Form.Label>
                    <Form.Control
                        autoFocus
                        type="time"
                        required
                        value={m_startTime}
                        onChange={(e) => setM_startTime(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="finishTime">
                    <Form.Label>??????n</Form.Label>
                    <Form.Control
                        type="time"
                        required
                        value={m_finishTime}
                        onChange={(e) => setM_finishTime(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="room">
                    <Form.Label>Cho??n pho??ng ho??p</Form.Label>
                    <Form.Control as="select" value={m_room} onChange={(e) => { setM_room(e.target.value); console.log(e.target.value) }}>
                        {rooms.map((room, index) => (
                            <option key={index} value={room.room_id}>{room.status ? room.title : room.title + ' ??ang ba??o tri??'}</option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group size="lg" controlId="parts">
                    <Form.Label>Th??m tha??nh vi??n</Form.Label>
                    <MultiEmails />
                </Form.Group>

                <Button block size="md" type="button"
                    style={{ width: "120px", margin: "20px 10px 10px 10px" }} variant="outline-primary"
                    onClick={previous}>
                    Tr??????c
                </Button>
                <Button block size="md" type="button" disabled={!validateForm()}
                    style={{ width: "120px", margin: "20px 10px 10px 10px" }} variant="outline-primary"
                    onClick={handleSubmit}>
                    Ta??o
                </Button>
            </>
        );
    }


    function cstep1(...p_events) {
        return (
            <FullCalendar
                plugins={[timeGridPlugin]}
                initialView="timeGridWeek"
                events={p_events[0]}
                slotMinTime="07:00:00"
                slotMaxTime="22:00:00"
                locales={allLocales}
                locale='vi'
                eventTimeFormat={{ // like '14:30:00'
                    hour: '2-digit',
                    minute: '2-digit',
                    meridiem: false
                }}
                titleFormat={{
                    year: 'numeric', month: '2-digit', day: 'numeric'
                }}
            />
        );
    }

    function cstep2(...p_events) {

        return (
            <FullCalendar
                schedulerLicenseKey='CC-Attribution-NonCommercial-NoDerivatives'
                plugins={[resourceTimeGridPlugin]}
                initialView="resourceTimeGridDay"
                initialDate={m_date}
                resources={resourceList}
                initialEvents={p_events[0]}
                slotMinTime="07:00:00"
                slotMaxTime="22:00:00"
                locales={allLocales}
                locale='vi'
                eventTimeFormat={{ // like '14:30:00'
                    hour: '2-digit',
                    minute: '2-digit',
                    meridiem: false
                }}
                titleFormat={{
                    year: 'numeric', month: '2-digit', day: 'numeric'
                }}
                resourceLabelDidMount={function (info) {
                    var questionMark = document.createElement('span');
                    questionMark.innerText = ' (chi ti????t) ';

                    info.el.appendChild(questionMark);
                    const r = rooms.find(i => i.room_id == info.resource.id);
                    const r_title = "S????c ch????a: " + r.capacity + " ng??????i. \n"
                        + " ??i??a ??i????m: t????ng " + r.floor + " to??a " + r.department + ". \n"
                        + " Thi????t bi??: " + r.equipment;
                    var tooltip = new Tooltip(questionMark, {
                        title: r_title,
                        placement: 'top',
                        trigger: 'hover',
                        container: 'body'
                    });
                }}
            />
        );

    }




}