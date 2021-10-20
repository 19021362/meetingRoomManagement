
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import MultiEmails from '../tag/multiEmail.js';

import "../styles/createMeeting.css";
import { render } from "preact";

export default function CreateMeeting() {

    const [formStep, setFormStep] = React.useState(0);

    const [m_name, setM_name] = useState("");
    const [m_desc, setM_desc] = useState("");
    const [m_date, setM_date] = useState("");
    const [m_startTime, setM_startTime] = useState("");
    const [m_finishTime, setM_finishTime] = useState("");
    const [m_room, setM_room] = useState("");
    const [m_participants, setM_participants] = useState("");

    var currentStep = 1;

    function validateForm() {
        return (m_name.length > 0 && m_date.length > 0);
    }

    function handleSubmit(event) {
        event.preventDefault();
    }


    const next = () => {
        setFormStep(cur => cur + 1);
    }

    const previous = () => {
        setFormStep(cur => cur - 1);
    }

    const successAlert = () => {
        alert(
            "Successfully!" + "\n" +
                "Meeting detail:" + "\n" +
                "Name: " + m_name + "\n" +
                "Description: " + m_desc + "\n" +
                "Will take place in" + m_room + "\n" +
                "on: " + m_date + "\n" +
                "at: " + m_startTime + "\n" +
                "end at: " + m_finishTime

        );
        setFormStep(0);

    }

    return (
        <>
            <div className="Crm-form">
                <div><h3>New meeting!</h3></div>
                {formStep === 0 && fstep1()}
                {formStep === 1 && fstep2()}
            </div>

            <div class="Crm-content">
                {formStep === 0 && cstep1()}
                {formStep === 1 && cstep2()}
            </div>
        </>
    );

    function fstep1() {
        return (
            <>
                <div class="Name-form">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group size="lg" controlId="name">
                            <Form.Label>Meeting name</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                value={m_name}
                                onChange={(e) => setM_name(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group size="lg" controlId="date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={m_date}
                                onChange={(e) => setM_date(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group size="lg" controlId="desc">
                            <Form.Label>Meeting description</Form.Label>
                            <Form.Control as="textarea"
                                type="textarea" row="3"
                                value={m_desc}
                                onChange={(e) => setM_desc(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group size="lg" controlId="parts">
                            <Form.Label>Participants</Form.Label>
                            <MultiEmails />
                        </Form.Group>
                    </Form>
                </div>
                <Button block size="lg" type="button" disabled={!validateForm()}
                    style={{ width: "120px", margin: "20px 10px 10px 10px" }} variant="outline-primary"
                    onClick={next}>
                    Next
                </Button>
            </>
        );
    }

    function fstep2() {
        return (
            <>
                <div class="Name-form">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group size="lg" controlId="startTime">
                            <Form.Label>Choose time from</Form.Label>
                            <Form.Control
                                autoFocus
                                type="time"
                                value={m_startTime}
                                onChange={(e) => setM_startTime(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="finishTime">
                            <Form.Label>to</Form.Label>
                            <Form.Control
                                type="time"
                                value={m_finishTime}
                                onChange={(e) => setM_finishTime(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="room">
                            <Form.Label>Room</Form.Label>
                            <select class="form-control" value={m_room} onChange={(e) => setM_room(e.target.value)}>
                                <option>Room 1</option>
                                <option>Room 2</option>
                                <option>Room 3</option>
                                <option>Room 4</option>
                                <option>Room 5</option>
                            </select>
                        </Form.Group>
                    </Form>
                </div>
                <Button block size="md" type="button" disabled={!validateForm()}
                    style={{ width: "120px", margin: "20px 10px 10px 10px" }} variant="outline-primary"
                    onClick={previous}>
                    Previous
                </Button>
                <Button block size="md" type="button" disabled={!validateForm()}
                    style={{ width: "120px", margin: "20px 10px 10px 10px" }} variant="outline-primary"
                    onClick={successAlert}>
                    Create
                </Button>
            </>
        );
    }


    function cstep1() {
        return (
            <FullCalendar
                plugins={[timeGridPlugin]}
                initialView="timeGridWeek"
            />
        );
    }

    function cstep2() {

        return (
            <FullCalendar
                schedulerLicenseKey='CC-Attribution-NonCommercial-NoDerivatives'
                plugins={[resourceTimeGridPlugin]}
                initialView="resourceTimeGridDay"
                initialDate = {m_date}
                resources={[
                    { id: '1', title: 'Room 1' },
                    { id: '2', title: 'Room 2' },
                    { id: '3', title: 'Room 3' },
                    { id: '4', title: 'Room 4' },
                    { id: '5', title: 'Room 5' }
                ]}
            />
        );

    }




}