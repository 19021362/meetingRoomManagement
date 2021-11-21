import React from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "../styles/admin.css";
import Room from './room';
import { localhost } from '../data/local';

export default class RoomList extends React.Component {
    state = {
        rooms: []
    }

    componentDidMount() {
        axios.get(localhost + "/room/all")
            .then(res => {
                const rooms = res.data;
                this.setState({ rooms });
            })
            .catch(error => console.log(error));
    }



    handleDelete(id) {
        confirmAlert({
            title: 'Confirm',
            message: 'Bạn có muốn xóa phòng này không?',
            buttons: [
                {
                    label: 'Có',
                    onClick: () => {
                        axios.delete(localhost + '/room/' + id)
                            .then(res => {
                                console.log(res);
                                console.log(res.data);
                            });

                        const rooms = this.state.rooms.filter(room => room.room_id !== id);
                        this.setState({ rooms });
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

        return (
            <>
                <h2 style={{ textAlign: "center", margin: "20px 0px 0px 0px" }}>Danh sách phòng họp</h2>
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
                        <tr>
                            <th>#</th>
                            <th>ID phòng</th>
                            <th>Tên phòng</th>
                            <th>Địa chỉ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.rooms.map((room, i) => (
                                <tr key={i}>
                                    {console.log(room)}
                                    <td>{i + 1}</td>
                                    <td>{room.room_id}</td>
                                    <td>{room.name}</td>
                                    <td>{"tầng " + room.floor + " tòa nhà " + room.department}</td>
                                    <td>
                                        <Link to={{
                                            pathname: "/room/" + room.room_id,
                                            state: room
                                        }}>
                                            <Badge bg="secondary">Chi tiết</Badge>
                                        </Link>
                                    </td>
                                    <td>
                                        <Badge bg="danger" onClick={() => this.handleDelete(room.room_id)}>Xóa</Badge>
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