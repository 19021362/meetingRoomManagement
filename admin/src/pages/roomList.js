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
import { Redirect } from 'react-router';
import { isLogin } from '../data/auth';
import { SetRooms } from '../data/data';


const RoomList = () => {


    const [data, setData] = useState([]);
    const [roomList, setRoomList] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const datas = [];
        const result = await axios.get(localhost + "/room/all");
        setRoomList(result.data);
        SetRooms(result.data);
        result.data.map((room, index) => {
            const u = {
                STT: index + 1,
                ID: room.room_id,
                Tên: "Phòng " + room.title,
                Địa_chỉ: "Tầng " + room.floor + " tòa " + room.department
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
            header: 'Địa chỉ',
            key: 'Địa_chỉ'
        },
        {
            header: 'Thao tác',
            //key: 'action',
            td: (data, index) =>
                <div>
                    <Link to={{
                        pathname: "/room/" + data.ID,
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
                            pathname: "/room/" + data.ID,
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
        console.log(id);
        confirmAlert({
            title: 'Xác nhận',
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

                        const rooms = data.filter(data => data.ID !== id);
                        setData(rooms)
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
            {isLogin && roomListRender()}
            {!isLogin && (<Redirect to="/login" />)}
        </>
    );

    function roomListRender() {
        return (
            <>
                <div style={{ marginTop: '20px', marginBottom: "50px" }}>
                    <h2 style={{ textAlign: 'center' }}>Danh sách phòng họp</h2>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'end'
                        }}
                    >
                        <div style={{ margin: 10 }}>
                            <Link to="/newRoom">
                                <Button variant="outline-primary">Thêm phòng họp mới</Button>
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
                        nonSortCols={[ "action"]}
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

export default RoomList;