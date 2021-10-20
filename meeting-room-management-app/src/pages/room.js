

import React from 'react';
import SideBar from "../components/sideBar";
import { Table, Dropdown, Form } from 'react-bootstrap';
import FullCalendar from "@fullcalendar/react";
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';

import '../styles/content.css';
import '../styles/sidebar.css';




const Room = () => {
    const rooms = ['Phòng 1', 'Phòng 2', 'Phòng 3', 'Phòng 4', 'Phòng 5'];
    var d = new Date();

    function nextDay() {
        var n = new Date();
        n.setDate(d.getDate() + 1);
        d.setDate(d.getDate() + 1);
        return n.getDate() + "/" + n.getMonth();
    }

    return (
        <>
            <SideBar />


            <div class="room-sidebar-container">
                <div class="sidebar-logo">
                    <i class="fa fa-star" aria-hidden="true"></i> ROOM
                </div>
                <div class="sidebar-navigation">
                    <ul class="sidebar-navigation">
                        <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Room 1</a></li>
                        <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Room 2</a></li>
                        <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Room 3</a></li>
                        <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Room 4</a></li>
                        <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Room 5</a></li>
                    </ul>
                </div>
            </div>
            <div class="content-container">

                <div class="container-fluid" style={{backgroundColor:"white"}}>

                    <FullCalendar
                        schedulerLicenseKey='CC-Attribution-NonCommercial-NoDerivatives'
                        plugins={[resourceTimeGridPlugin]}
                        initialView="resourceTimeGridDay"
                        resources={[
                            { id: '1', title: 'Room 1' },
                            { id: '2', title: 'Room 2' },
                            { id: '3', title: 'Room 3' },
                            { id: '4', title: 'Room 4' },
                            { id: '5', title: 'Room 5' }
                        ]}
                    />

                    {/* <Table responsive>
                        <thead>
                            <tr>
                                <th class="col-1">
                                    <Form>
                                        <select class="form-select" aria-label="Default select example" style={{ textAlign: "left" }}>
                                            <option selected>{d.getDate()}/{d.getMonth()}</option>
                                            <option value="">{nextDay()}</option>
                                            <option value="">{nextDay()}</option>
                                            <option value="">{nextDay()}</option>
                                            <option value="">{nextDay()}</option>
                                            <option value="">{nextDay()}</option>
                                            <option value="">{nextDay()}</option>
                                        </select>
                                    </Form>
                                </th>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <th key={index}>{rooms[index]}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="col-1">7:00</td>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                            <tr>
                                <td class="col-1">7:30</td>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                            <tr>
                                <td class="col-1">8:00</td>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                            <tr>
                                <td class="col-1">8:30</td>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                            <tr>
                                <td class="col-1">9:00</td>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                            <tr>
                                <td class="col-1">9:30</td>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                            <tr>
                                <td class="col-1">10:00</td>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                            <tr>
                                <td class="col-1">10:30</td>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                            <tr>
                                <td class="col-1">11:00</td>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                            <tr>
                                <td class="col-1">11:30</td>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                            <tr>
                                <td class="col-1">12:00</td>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                            <tr>
                                <td class="col-1">12:30</td>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                            <tr>
                                <td class="col-1">13:00</td>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                            <tr>
                                <td class="col-1">13:30</td>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                            <tr>
                                <td class="col-1">14:00</td>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                            <tr>
                                <td class="col-1">14:30</td>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                            <tr>
                                <td class="col-1">15:00</td>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                            <tr>
                                <td class="col-1">15:30</td>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                            <tr>
                                <td class="col-1">16:00</td>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                            <tr>
                                <td class="col-1">16:30</td>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                            <tr>
                                <td class="col-1">17:00</td>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                            <tr>
                                <td class="col-1">17:30</td>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                            <tr>
                                <td class="col-1">18:00</td>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                            <tr>
                                <td class="col-1">18:30</td>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                        </tbody>
                    </Table> */}

                </div>
            </div>
        </>
    );



};

export default Room;