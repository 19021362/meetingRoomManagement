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


const RoomList = () => {


    const [data, setData] = useState([])
    const [roomList, setRoomList] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const datas = [];
        const result = await axios.get(localhost + "/room/all");
        setRoomList(result.data);
        result.data.map((room, index) => {
            const u = {
                STT: index + 1,
                ID: room.room_id,
                Tên: "Phòng " + room.title,
                Địa_chỉ : "Tầng " + room.floor + " tòa " + room.department 
            };
            datas.push(u);
        })
        setData(datas);
    }
    const additionalCols = [
        {
            header: 'Actions',
            td: (data, index) => {

                return (
                    <div>
                        <Link to={{
                            pathname: "/room/" + data.ID,
                            state: roomList[index]
                        }}>
                            <Badge bg="secondary">Chi tiết</Badge>
                        </Link>
                        <Badge bg="danger" onClick={(e) => handleDelete(data.ID)}>Xóa</Badge>
                    </div>
                );
            }
        }
    ]


    const handleDelete = (id) => {
        confirmAlert({
            title: 'Confirm',
            message: 'Bạn có muốn xóa tài khoản này không?',
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
                        setData({ rooms });
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
            <div style={{ marginTop:'20px', marginBottom:"50px" }}>
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
                    pageSize={10}
                    sortable={true}
                    filterable={true}
                    caseSensitive={false}
                    additionalCols={additionalCols}
                    showExcelButton
                    nonFilterCols={["STT"]}
                    nonSortCols={["STT"]}
                />
            </div>
        </>
    )
};

export default RoomList;