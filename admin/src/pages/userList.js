import React from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import "../styles/admin.css";

export default class UserList extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/user/all`)
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
            .catch(error => console.log(error));
    }



    render() {

        console.log(this.state.users);
        return (
            <>
                <h2 style={{textAlign:"center", margin:"20px 0px 0px 0px"}}>Danh sách người dùng</h2>
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
                        <th>#</th>
                        <th>Id</th>
                        <th>Họ tên</th>
                        <th>Email</th>

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
                                        <Link to="/user">
                                            <Badge bg="secondary">Chi tiết</Badge>
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