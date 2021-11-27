import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { EventContentArg } from '@fullcalendar/react';
import timeGridPlugin from "@fullcalendar/timegrid";
import '../styles/content.css';
import '../styles/sidebar.css';
import Button from "react-bootstrap/Button";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { localhost } from '../local';
import { auth } from '../data/auth';

const Schedule = () => {

    const [viewMode, setViewMode] = useState();
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const result = await axios.get(localhost + '/user/' + auth.user_id + '/meetings/fullcalendar');
            setEventList(result.data.data);
        };
       
        fetchEvents();
    }, []);


    const setMonthView = () => {
        setViewMode(0);
    };

    const setWeekView = () => {
        setViewMode(1);
    };

    const setCEventsView = () => {
        setViewMode(2);
    };


    return (
        <>

            <div class="sidebar-container">
                <div class="sidebar-logo">
                    <i class="fa fa-star" aria-hidden="true"></i> Lịch trình
                </div>
                <div class="sidebar-navigation">
                    <ul class="sidebar-navigation">
                        <li>
                            <Button block size="md" type="button" variant="primary" onClick={setMonthView}
                                style={{ Height: "30px", minWidth: "200px", backgroundColor: "#0099ff", borderRadius: "0%", textAlign: "left" }}>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                Tháng
                            </Button>
                        </li>
                        <li>
                            <Button block size="md" type="button" variant="primary" onClick={setWeekView}
                                style={{ Height: "30px", minWidth: "200px", backgroundColor: "#0099ff", borderRadius: "0%", textAlign: "left" }}>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                Tuần
                            </Button>
                        </li>
                    </ul>
                    <hr />
                </div>
            </div>


            <div class="content-container">
                <div class="container-fluid" style={{ backgroundColor: "white" }}>
                    {viewMode === 0 && monthView(eventList)}
                    {viewMode === 1 && weekView(eventList)}

                </div>
            </div>


        </>
    );


    function monthView(...p_events) {
        return (
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                initialEvents={ p_events[0] }
                eventClick={handleEventClick}
            />
        );

    };

    function weekView(...p_events) {
        return (
            <FullCalendar
                plugins={[timeGridPlugin]}
                initialView="timeGridWeek"
                events={ p_events[0] }
                slotMinTime="07:00:00"
                slotMaxTime="19:00:00"
                eventClick={handleEventClick}
                
                
            />
        );
    };


    


    function renderEventContent(eventInfo) {
        return (
            <>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>
            </>
        )
    }

    function handleEventClick(eventInfo) {
        alert(
            "Cuộc họp: " + eventInfo.event.title + "\n"
            + "Mô tả: " + eventInfo.event.extendedProps.description + "\n"
            + "Giờ: " + eventInfo.event.start
        );
    }


}

export default Schedule;