import React from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { localhost } from '../local';
import { confirmAlert } from 'react-confirm-alert';
import { auth, isLogin } from '../data/auth';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Redirect, useHistory } from 'react-router';

export default class MyMeetingList extends React.Component {
    state = {
        meetings: []
    }

    componentDidMount() {
        axios.get(localhost + '/user/' + auth.user_id + '/meetings/initiating')
            .then(res => {
                const meetings = res.data.data;
                this.setState({ meetings });
            })
            .catch(error => console.log(error));
    }

    handleDelete(id) {
        confirmAlert({
            title: 'Xác nhận',
            message: 'Bạn có muốn xóa cuộc họp này không?',
            buttons: [
                {
                    label: 'Có',
                    onClick: () => {
                        axios.delete(localhost + '/meeting/' + id)
                            .then(res => {
                                console.log(res);
                                console.log(res.data);
                            });

                        const meetings = this.state.meetings.filter(meeting => meeting.meeting_id !== id);
                        this.setState({ meetings });
                    }
                },
                {
                    label: 'Không',
                    onClick: () => onclose
                }
            ]
        })


    };

    formatDate(date) {
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
    };



    render() {
        if(isLogin) {
        return (
            <>

                <h2 style={{ textAlign: "center", margin: "20px 0px 20px 0px" }}>Danh sách cuộc họp</h2>

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên cuộc họp</th>
                            <th>Ngày</th>
                            <th>Thời gian</th>
                            <th>Địa điểm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.meetings.map((meeting, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{meeting.subject}</td>
                                    <td>{this.formatDate(meeting.date)}</td>
                                    <td>{(meeting.start_time + " - " + meeting.end_time)}</td>
                                    <td>{(meeting.room_name + " " + meeting.room_local)}</td>
                                    <td>
                                        <Link to={{
                                            pathname: "/meeting/" + meeting.event_id,
                                            state: meeting
                                        }}>
                                            <Badge bg="secondary">Chi tiết</Badge>
                                        </Link>
                                    </td>
                                    <td>
                                        <Badge bg="danger" onClick={() => this.handleDelete(meeting.event_id)}>Xóa</Badge>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>

            </>
        );} else {
            return(
                <Redirect to="/login" />
            );
        }
    };
}