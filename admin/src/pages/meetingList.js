import React from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { localhost } from '../data/local';
import { confirmAlert } from 'react-confirm-alert';

export default class MeetingList extends React.Component {
    state = {
        meetings: []
    }

    componentDidMount() {
        axios.get(localhost + '/meeting/all')
            .then(res => {
                const meetings = res.data;
                this.setState({ meetings });
            })
            .catch(error => console.log(error));
    }

    handleDelete(id) {
        confirmAlert({
            title: 'Confirm',
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
        });


    }



    render() {

        console.log(this.state.meetings);
        return (
            <>

                <h2 style={{ textAlign: "center", margin: "20px 0px 20px 0px" }}>Danh sách cuộc họp</h2>

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID cuộc họp</th>
                            <th>Tên cuộc họp</th>
                            <th>Ngày</th>
                            <th>Loại</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.meetings.map((meeting, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{meeting.event_id}</td>
                                    <td>{meeting.subject}</td>
                                    <td>{meeting.date}</td>
                                    <td>{meeting.type}</td>
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
        )
    }
}