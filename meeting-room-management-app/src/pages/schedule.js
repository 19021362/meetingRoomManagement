import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import SideBar from '../components/sideBar'
import '../styles/content.css';
import '../styles/sidebar.css';
import Button from "react-bootstrap/Button";

const Schedule = () => {

    const [viewMode, setViewMode] = React.useState(0);

    const setMonthView = () => {
        setViewMode(0);
    }

    const setWeekView = () => {
        setViewMode(1);
    }

    const setCEventsView = () => {
        setViewMode(2);
    }

    return (
        <>
            <SideBar />

            <div class="room-sidebar-container">
                <div class="sidebar-logo">
                    <i class="fa fa-star" aria-hidden="true"></i> Lịch trình
                </div>
                <div class="sidebar-navigation">
                    <ul class="sidebar-navigation">
                        <li>
                            <Button block size="md" type="button" variant="primary" onClick={setMonthView} type="button"
                                style={{ Height: "30px", minWidth: "200px", backgroundColor: "#0099ff", borderRadius: "0%", textAlign: "left" }}>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                Tháng
                            </Button>
                        </li>
                        <li>
                            <Button block size="md" type="button" variant="primary" onClick={setWeekView} type="button"
                                style={{ Height: "30px", minWidth: "200px", backgroundColor: "#0099ff", borderRadius: "0%", textAlign: "left" }}>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                Tuần
                            </Button>
                        </li>
                        <li>
                            <Button block size="md" type="button" variant="primary" onClick={setCEventsView} type="button"
                                style={{ Height: "30px", minWidth: "200px", backgroundColor: "#0099ff", borderRadius: "0%", textAlign: "left" }}>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                Sự kiện sắp tới
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>


            <div class="content-container">
                <div class="container-fluid" style={{ backgroundColor: "white" }}>
                    {viewMode === 0 && monthView()}
                    {viewMode === 1 && weekView()}
                    {viewMode === 2 && comingEvent()}

                </div>
            </div>


        </>
    );


    function monthView() {
        return (
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
            />
        );

    }

    function weekView() {
        return (
            <FullCalendar
                plugins={[timeGridPlugin]}
                initialView="timeGridWeek"
            />
        );
    }

    function comingEvent() {
        return (
            <h1>Coming events!</h1>
        );
    }

}

export default Schedule;