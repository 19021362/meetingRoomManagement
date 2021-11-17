import React from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "../styles/admin.css";

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
                <h2 style={{textAlign:"center", margin:"20px 0px 0px 0px"}}>Danh sách phòng họp</h2>
                <div class="admin-content">
                    <div class="admin-content-create">
                        <Link to="/newRoom">
                            <Button variant="outline-primary">Thêm phòng mới</Button>
                        </Link>
                    </div>
                </div>

                <br />

                <Table striped bordered hover size="sm">
                    <thead>
                        <th>#</th>
                        <th>ID phòng</th>
                        <th>Tên phòng</th>
                        <th>Địa chỉ</th>

                    </thead>
                    <tbody>
                        {
                            this.state.rooms.map((room, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{room.room_id}</td>
                                    <td>{room.name}</td>
                                    <td>{"tầng " + room.floor + " tòa nhà " + room.department}</td>
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