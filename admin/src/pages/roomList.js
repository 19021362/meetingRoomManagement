import React from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';

export default class RoomList extends React.Component {
    state = {
        rooms: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/room/all`)
            .then(res => {
                const rooms = res.data;
                this.setState({ rooms });
            })
            .catch(error => console.log(error));
    }



    render() {

        console.log(this.state.rooms);
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
                            this.state.rooms.map((room, i) => (
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{room.room_id}</td>
                                    <td>{room.title}</td>
                                    <td>{room.infomation}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>

            </>
        )
    }
}