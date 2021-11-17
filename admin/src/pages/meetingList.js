import React from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

export default class MeetingList extends React.Component {
    state = {
        meetings: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/meeting/all`)
            .then(res => {
                const meetings = res.data;
                this.setState({ meetings });
            })
            .catch(error => console.log(error));
    }



    render() {

        console.log(this.state.meetings);
        return (
            <>

                <h2 style={{textAlign:"center", margin:"20px 0px 20px 0px"}}>Danh sách cuộc họp</h2>

                <Table striped bordered hover size="sm">
                    <thead>
                        <th>#</th>
                        <th>ID phòng</th>
                        <th>Tên phòng</th>
                        <th>Ngày</th>
                        <th>Loại</th>

                    </thead>
                    <tbody>
                        {
                            this.state.meetings.map((meeting, i) => (
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{meeting.event_id}</td>
                                    <td>{meeting.subject}</td>
                                    <td>{meeting.date}</td>
                                    <td>{meeting.type}</td>
                                    <td>
                                        <Link to="/room">
                                            <Badge bg="secondary">Sửa</Badge>
                                        </Link>
                                    </td>
                                    <td>
                                        <Badge bg="danger">Xóa</Badge>
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