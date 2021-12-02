import React, { useState, useEffect } from 'react'
import { Badge } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactFlexyTable from 'react-flexy-table'
import 'react-flexy-table/dist/index.css'
import { localhost } from '../local';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "../styles/admin.css";
import { isLogin } from '../data/auth';
import { useHistory } from 'react-router';
import { Redirect } from 'react-router';
import { SetUsers } from '../data/data';

const UserList = () => {

    const history = useHistory
    const [data, setData] = useState([])
    const [userList, setUserList] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const datas = [];
        const result = await axios.get(localhost + "/user/all");
        setUserList(result.data);
        SetUsers(result.data);
        result.data.map((user, index) => {
            const u = {
                STT: index + 1,
                ID: user.user_id,
                Tên: user.name,
                Email: user.email
            };
            datas.push(u);
        })
        setData(datas);
    };

    const columns = [
        {
            header: 'STT',
            key: 'STT',
        },
        {
            header: 'Tên',
            key: 'Tên'
        },
        {
            header: 'Email',
            key: 'Email'
        },
        {
            header: 'Thao tác',
            //key: 'action',
            td: (data, index) =>
                <div>
                    <Link to={{
                        pathname: "/user/" + data.ID,
                        state: data.ID
                    }}>
                        <Badge bg="secondary">Chi tiết</Badge>
                    </Link>{' '}
                    <Badge bg="danger" onClick={(e) => handleDelete(data.ID)}>Xóa</Badge>
                </div>

        }
    ];


    const additionalCols = [
        {
            header: 'Thao tác',
            td: (data, index) => {

                return (
                    <div>
                        <Link to={{
                            pathname: "/user/" + data.ID,
                            state: data.ID
                        }}>
                            <Badge bg="secondary">Chi tiết</Badge>
                        </Link>{' '}
                        <Badge bg="danger" onClick={(e) => handleDelete(data.ID)}>Xóa</Badge>
                    </div>
                );
            }
        }
    ]


    const handleDelete = async (id) => {
        confirmAlert({
            title: 'Xác nhận',
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

                        const users = data.filter(data => data.ID !== id);
                        setData(users);
                    }
                },
                {
                    label: 'Không',
                    onClick: () => onclose
                }
            ]
        });
    };


    return (
        <>
            {isLogin && userListRender()}
            {!isLogin && (<Redirect to="/login" />)}
        </>
    );

    function userListRender() {
        return (
            <>
                <div style={{ marginTop: '20px', marginBottom: "50px" }}>
                    <h2 style={{ textAlign: 'center' }}>Danh sách người dùng</h2>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'end'
                        }}
                    >
                        <div style={{ margin: 10 }}>
                            <Link to="/newUser">
                                <Button variant="outline-primary">Thêm tài Khoản mới</Button>
                            </Link>
                        </div>
                    </div>

                    <ReactFlexyTable
                        data={data}
                        columns={columns}
                        //additionalCols={additionalCols}
                        pageSize={10}
                        sortable={true}
                        filterable={true}
                        caseSensitive={true}
                        showExcelButton
                        nonFilterCols={["STT", "action"]}
                        nonSortCols={["action"]}
                        previousText="Trước"
                        nextText="Sau"
                        downloadExcelText="Tải xuống bản Excel"
                        ofText="của "
                        rowsText="Số dòng "
                        pageText="Trang "
                        filteredDataText="Lọc "
                        totalDataText="Tổng số "
                    />
                </div>
            </>
        );
    }
};

export default UserList;