import React from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import "../styles/admin.css";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { localhost } from '../data/local';

export default class UserList extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get(localhost + '/user/all')
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
            .catch(error => console.log(error));
    }

    handleDelete(id) {
        confirmAlert({
            title: 'Confirm',
            message: 'Bạn có muốn xóa tài khoản này không?',
            buttons: [
                {
                    label: 'Có',
                    onClick: () => {
                        axios.delete(localhost + '/user/' + id)
                            .then(res => {
                                console.log(res);
                                console.log(res.data);
                            });

                        const users = this.state.users.filter(user => user.user_id !== id);
                        this.setState({ users });
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

        console.log(this.state.users);
        return (
            <>
                <h2 style={{ textAlign: "center", margin: "20px 0px 0px 0px" }}>Danh sách người dùng</h2>
                <div class="admin-content">
                    <div class="admin-content-create">
                        <Link to="/newUser">
                            <Button variant="outline-primary">Thêm tài khoản mới</Button>
                        </Link>
                    </div>
                </div>

                <br />

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Id</th>
                            <th>Họ tên</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((user, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{user.user_id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={{
                                            pathname: "/user/" + user.user_id,
                                            state: user
                                        }}>
                                            <Badge bg="secondary">Chi tiết</Badge>
                                        </Link>
                                    </td>
                                    <td>
                                        <Badge bg="danger" onClick={(e) => this.handleDelete(user.user_id)}>Xóa</Badge>
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