import React from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';

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

                

                <Table striped bordered hover size="sm">
                    <thead>
                        <th>#</th>
                        <th>Name</th>
                        <th>Id</th>
                        <th>Email</th>

                    </thead>
                    <tbody>
                        {
                            this.state.users.map((user, i) => (
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.user_id}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>

            </>
        )
    }
}