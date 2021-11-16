import React from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';

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

                

                <Table striped bordered hover size="sm">
                    <thead>
                        <th>#</th>
                        <th>ID phòng</th>
                        <th>Tên phòng</th>
                        <th>Mô tả</th>

                    </thead>
                    <tbody>
                        {
                            this.state.meetings.map((meeting, i) => (
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{meeting.event_id}</td>
                                    <td>{meeting.event_name}</td>
                                    <td>{meeting.date}</td>
                                    <td>{meeting.type}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>

            </>
        )
    }
}