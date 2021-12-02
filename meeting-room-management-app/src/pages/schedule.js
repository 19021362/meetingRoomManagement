import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import listPlugin from '@fullcalendar/list';
import { EventContentArg } from '@fullcalendar/react';
import timeGridPlugin from "@fullcalendar/timegrid";
import '../styles/content.css';
import '../styles/sidebar.css';
import Button from "react-bootstrap/Button";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { localhost } from '../local';
import { auth, isLogin } from '../data/auth';
import { Redirect } from 'react-router';
import { ListGroup } from 'react-bootstrap';
import allLocales from '@fullcalendar/core/locales-all';


const Schedule = () => {

    const [viewMode, setViewMode] = useState(2);
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
            {isLogin && scheduleRender()}
            {!isLogin && (<Redirect to="/login" />)}
        </>
    );

    function scheduleRender() {
        return (
            <>
                <div class="sidebar-container">
                    <div class="sidebar-logo">
                        <i class="fa fa-star" aria-hidden="true"></i> Lịch trình
                    </div>
                    <hr />
                    <div class="sidebar-navigation">
                        <ListGroup>
                            <ListGroup.Item action variant="light" onClick={() => setCEventsView()} key={2}>
                                <strong> Danh sách sự kiện </strong>
                            </ListGroup.Item>
                            <ListGroup.Item action variant="light" onClick={() => setMonthView()} key={0}>
                                <strong> Tháng </strong>
                            </ListGroup.Item>
                            <ListGroup.Item action variant="light" onClick={() => setWeekView()} key={1}>
                                <strong> Tuần </strong>
                            </ListGroup.Item>

                        </ListGroup>
                        <hr />
                    </div>
                </div>


                <div class="content-container">
                    <div class="container-fluid" style={{ backgroundColor: "white" }}>
                        {viewMode === 0 && monthView(eventList)}
                        {viewMode === 1 && weekView(eventList)}
                        {viewMode === 2 && ComingEventView(eventList)}
                    </div>
                </div>
            </>
        );
    }


    function monthView(...p_events) {
        return (
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                initialEvents={p_events[0]}
                eventClick={handleEventClick}
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

    };

    function weekView(...p_events) {
        return (
            <FullCalendar
                plugins={[timeGridPlugin]}
                initialView="timeGridWeek"
                events={p_events[0]}
                slotMinTime="07:00:00"
                slotMaxTime="22:00:00"
                eventClick={handleEventClick}
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
    };


    function ComingEventView(...p_events) {
        return (
            <FullCalendar
                plugins={[listPlugin]}
                initialView="listMonth"
                events={p_events[0]}
                eventClick={handleEventClick}
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
                headerToolbar={{
                    start: 'title', // will normally be on the left. if RTL, will be on the right
                    center: '',
                    end: 'prev,next' // will normally be on the right. if RTL, will be on the left
                }}
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
            "\n" + 
            "Cuộc họp: " + eventInfo.event.title + "\n"
            + "Mô tả: " + eventInfo.event.extendedProps.description + "\n"
            + "Địa điểm: " + eventInfo.event.extendedProps.local + "\n"
            + "Chủ trì: " + eventInfo.event.extendedProps.creator_name + "\n"
        );
    }


}

export default Schedule;