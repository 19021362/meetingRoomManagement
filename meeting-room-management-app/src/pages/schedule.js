import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import SideBar from '../components/sideBar'
import '../styles/content.css';
import '../styles/sidebar.css';

export default class Schedule extends React.Component {
    render() {
        return (
            <>
                <SideBar />

                <div class="room-sidebar-container">
                    <div class="sidebar-logo">
                        <i class="fa fa-star" aria-hidden="true"></i> Schedule
                    </div>
                    <div class="sidebar-navigation">
                        <ul class="sidebar-navigation">
                            <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Month</a></li>
                            <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Week</a></li>
                            <li><a href="#"><i class="fa fa-circle" aria-hidden="true"></i>Coming up</a></li>
                        </ul>
                    </div>
                </div>


                <div class="content-container">
                    <div class="container-fluid" style={{ backgroundColor: "white" }}>
                        <FullCalendar
                            plugins={[dayGridPlugin]}
                            initialView="dayGridMonth"

                        />
                    </div>
                </div>


            </>
        )
    }
}