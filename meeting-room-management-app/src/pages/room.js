import React from 'react';
import { Table, Dropdown, Form, ButtonGroup, ListGroup } from 'react-bootstrap';
import FullCalendar from "@fullcalendar/react";
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Card, Button } from 'react-bootstrap';
import allLocales from '@fullcalendar/core/locales-all';
import '../styles/content.css';
import '../styles/sidebar.css';
import { Label } from 'reactstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import { localhost } from '../local';
import axios from 'axios';
import Feedback from '../tag/feedback';
import { isLogin } from '../data/auth';
import { Redirect } from 'react-router';




const Room = () => {

    const [roomId, setRoomId] = useState(-2);

    const [rooms, setRooms] = useState([]);
    const [roomIdFeedback, setRoomIdFeedback] = useState();
    const [resourceList, setResource] = useState([]);
    const [eventList, setEvent] = useState([]);


    useEffect(() => {

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

        fetchEvents();
        fetchResources();
        fetchRooms();

    }, []);






    return (
        <>
            {isLogin && roomRender()}
            {!isLogin && (<Redirect to="/login" />)}
        </>
    );

    function roomRender() {
        return (
            <>
                <div class="sidebar-container">
                    <div class="sidebar-logo">
                        <Label>
                            <i class="fa fa-star" aria-hidden="true"></i> Phòng họp
                        </Label>
                    </div>
                    <hr />
                    <ListGroup>
                        <ListGroup.Item action variant="light" onClick={() => setRoomId(-2)}>
                            <strong> Danh sách phòng họp </strong>
                        </ListGroup.Item>
                    </ListGroup>
                    <hr />
                    <p><strong> Lịch sử dụng </strong></p>
                    <ListGroup>
                        <ListGroup.Item action variant="light" onClick={() => setRoomId(0)} key={0}>
                            Tất cả phòng
                        </ListGroup.Item>
                        {rooms.map((room, index) => (
                            <ListGroup.Item action variant="light" onClick={() => setRoomId(index + 1)} key={index}>
                                Phòng {room.title}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <hr />

                    <ListGroup>
                        <ListGroup.Item action variant="light" onClick={() => setRoomId(-1)}>
                            <strong> Phản hồi </strong>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <div class="content-container">

                    <div class="container-fluid" style={{ backgroundColor: "white" }}>
                        {roomId === -2 && roomCardList(rooms)}
                        {roomId === 0 && roomId_0(eventList)}
                        {roomIdOthers(eventList)}
                        {roomId === -1 && (<Feedback />)}
                    </div>
                </div>
            </>
        );
    }

    function roomId_0(...p_events) {
        return (
            <>
                <FullCalendar
                    schedulerLicenseKey='CC-Attribution-NonCommercial-NoDerivatives'
                    plugins={[resourceTimeGridPlugin]}
                    initialView="resourceTimeGridDay"
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
                />
            </>
        );
    }

    function roomIdOthers(...p_events) {
        if (roomId > 0) {
            return (
                <>


                    <FullCalendar
                        schedulerLicenseKey='CC-Attribution-NonCommercial-NoDerivatives'
                        plugins={[resourceTimeGridPlugin]}
                        initialView='resourceTimeGridFourDay'
                        resources={[
                            { id: rooms[roomId - 1].room_id, title: "Phòng " + rooms[roomId - 1].title }
                        ]}
                        views={{
                            resourceTimeGridFourDay: {
                                type: 'resourceTimeGrid',
                                duration: { days: 7 },
                                buttonText: '7 days'
                            }
                        }}
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
                    />

                </>
            );
        }
    };

    function roomCardList(...roomArray) {
        console.log(roomArray[0]);
        return (
            <>
                {roomArray[0].map((room, index) => (
                    <Card>
                        <Card.Header><h2>{"Phòng " + room.title}</h2></Card.Header>
                        <Card.Body>
                            <ul>
                                <li>Tòa nhà : {room.department}<br /></li>
                                <li>Tầng : {room.floor}<br /></li>
                                <li>Diện tích : {room.area + " m2"}<br /></li>
                                <li>Sức chứa : {room.capacity + " ghế"}<br /></li>
                                <li>Thiết bị : {room.equipment}<br /></li>
                                <li>tình trạng : {(room.status ? "Hoạt động" : "Bảo trì")} <br /></li>
                            </ul>
                        </Card.Body>
                    </Card>
                ))}

            </>
        );
    }


};

export default Room;