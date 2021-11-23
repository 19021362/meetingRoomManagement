import React from 'react';
import SideBar from "../components/sideBar";
import { Table, Dropdown, Form, ButtonGroup } from 'react-bootstrap';
import FullCalendar from "@fullcalendar/react";
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Card, Button } from 'react-bootstrap';
import RoomDetail from '../components/roomDetail.js'
import '../styles/content.css';
import '../styles/sidebar.css';
import { Label } from 'reactstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import { localhost } from '../local';
import axios from 'axios';




const Room = () => {

    const [roomId, setRoomId] = useState();

    const [rooms, setRooms] = useState([]);
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
            <div class="sidebar-container">
                <div class="sidebar-logo">
                    <Label>
                        <i class="fa fa-star" aria-hidden="true"></i> Phòng họp
                    </Label>
                </div>

                <ul class="sidebar-navigation">
                    <li>
                        <Button block size="md" type="button" variant="primary" onClick={() => setRoomId(0)}
                            style={{ Height: "30px", minWidth: "200px", backgroundColor: "#0099ff", textAlign: "left" }}>
                            <i class="fa fa-circle" aria-hidden="true"></i><strong>Tất cả phòng</strong>
                        </Button>
                    </li>
                    {rooms.map((room, index) => (
                        <li>

                            <Button block size="md" type="button" variant="primary" onClick={() => setRoomId(index + 1)} key={index}
                                style={{ Height: "30px", minWidth: "200px", backgroundColor: "#0099ff", textAlign: "left" }}>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                Phòng {room.title}
                            </Button>
                        </li>
                    ))}
                </ul>
                <hr></hr>
            </div>
            <div class="content-container">

                <div class="container-fluid" style={{ backgroundColor: "white" }}>
                    {roomId === 0 && roomId_0(eventList)}
                    {roomIdOthers(eventList)}
                </div>
            </div>
        </>
    );

    function roomId_0(...p_events) {
        console.log(p_events);
        return (
            <>
                <FullCalendar
                    schedulerLicenseKey='CC-Attribution-NonCommercial-NoDerivatives'
                    plugins={[resourceTimeGridPlugin]}
                    initialView="resourceTimeGridDay"
                    resources={resourceList}
                    initialEvents={p_events[0]}
                    slotMinTime="07:00:00"
                    slotMaxTime="21:00:00"
                />
            </>
        );
    }

    function roomIdOthers(...p_events) {
        if (roomId > 0) {
            console.log(p_events);
            return (
                <>
                    <Card>
                        <Card.Header><h2>{"Phòng " + rooms[roomId - 1].title}</h2></Card.Header>
                        <Card.Body>
                            <ul>
                                <li>Tòa nhà : {rooms[roomId - 1].department}<br /></li>
                                <li>Tầng : {rooms[roomId - 1].floor}<br /></li>
                                <li>Diện tích : {rooms[roomId - 1].area}<br /></li>
                                <li>Sức chứa : {rooms[roomId - 1].capacity}<br /></li>
                                <li>Thiết bị : {rooms[roomId - 1].equipment}<br /></li>
                                <li>tình trạng : {rooms[roomId - 1].status}<br /></li>
                            </ul>
                        </Card.Body>
                    </Card>

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
                        slotMaxTime="21:00:00"
                    />

                </>
            );
        }
    }


};

export default Room;