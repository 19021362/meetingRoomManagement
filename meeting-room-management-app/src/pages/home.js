import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Alert, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SideBar from "../components/sideBar";
import '../styles/content.css';
import axios from 'axios';
import { auth, isLogin, SetAuth } from '../data/auth';
import { localhost } from '../local';
import Slide from '../tag/slide';
import { Table, Badge } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';






const Home = () => {

    const [comingEvent, setComingEvent] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const result = await axios.get(localhost + "/user/" + auth.user_id);
            SetAuth(result.data);
        };

        const fetchComingEvent = async () => {
            const result = await axios.get(localhost + "/user/" + auth.user_id + "/meetings/upcoming");
            setComingEvent(result.data.data);
        };



        fetchUser();
        fetchComingEvent();
    }, []);

    function formatDate(date) {
        const newDate = new Date(date);
        var dateString = "";
        var monthString = "";

        if(newDate.getDate() < 10) {
            dateString = "0" + newDate.getDate();
        } else {
            dateString = "" + newDate.getDate();
        }

        if(newDate.getMonth < 9) {
            monthString = "0" + (newDate.getMonth() + 1);
        } else {
            monthString = "" + (newDate.getMonth() + 1);
        }

        const res = dateString + "-" + monthString + "-" + newDate.getFullYear();
        return res;
    }

    return (
        <>
            <div class="home-content-container">

                <div class="container-fluid">

                    <div class="jumbotron">
                        <h1>Chào mừng {auth.name} đến với SROOM!</h1>
                    </div>




                </div>
                {!isLogin && (<Slide />)}
                {isLogin && authHome()}
            </div>
        </>
    );



    function authHome() {
        return (
            <>
                <hr />
                <h2 style={{ textAlign: "center", margin: "20px 0px 20px 0px" }}>Danh sách cuộc họp sắp tới!</h2>

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên cuộc họp</th>
                            <th>Ngày</th>
                            <th>Thời gian</th>
                            <th>Địa điểm</th>
                            <th>Chủ trì</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            comingEvent.map((meeting, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{meeting.subject}</td>
                                    <td>{ formatDate(meeting.date) }</td>
                                    <td>{(meeting.start_time + " - " + meeting.end_time)}</td>
                                    <td>{(meeting.room_name + " " + meeting.room_local)}</td>
                                    <td>{meeting.creator_name}</td>
                                    <td>
                                        <Badge bg="secondary" onClick={() => alertDetail(meeting)}>Chi tiết</Badge>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <hr />
            </>
        );
    };

    function alertDetail(event) {
        alert(
            "Tên cuộc họp: " + event.subject + "\n"
            + "Nội dung: " + event.description + "\n"
            + "Ngày: " + event.date + "\n"
            + "Giờ bắt đầu: " + event.start_time + "\n"
            + "Giờ kết thúc: " + event.end_time + "\n"
            + "Phòng họp: " + event.room_name + "\n"
            + "Địa chỉ: " + event.room_local + "\n"
            + "Chủ trì: " + event.creator_name + "\n"
        );
    }

};


export default Home;