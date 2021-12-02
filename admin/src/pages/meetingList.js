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
import { SetMeetings } from '../data/data';


const MeetingList = () => {


    const [data, setData] = useState([])
    const [meetingList, setMeetingList] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const datas = [];
        const result = await axios.get(localhost + "/meeting/all");
        //setMeetingList(result.data);
        SetMeetings(result.data);
        result.data.map((meeting, index) => {
            const u = {
                STT: index + 1,
                ID: meeting.event_id,
                Tên: meeting.subject,
                date: formatDate( meeting.date ),
                time: meeting.start_time + " - " + meeting.end_time,
                local: meeting.room_name + " " + meeting.room_local,
                host: meeting.creator_name
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
            header: 'Ngày tổ chức',
            key: 'date'
        },
        {
            header: 'Thời gian',
            key: 'time'
        },
        {
            header: 'Địa điểm',
            key: 'local'
        },
        {
            header: 'Chủ trì',
            key: 'host'
        },
        {
            header: 'Thao tác',
            //key: 'action',
            td: (data, index) =>
                <div>
                    <Link to={{
                        pathname: "/meeting/" + data.ID,
                        state: data.ID
                    }}>
                        <Badge bg="secondary">Chi tiết</Badge>
                    </Link>{' '}
                    <Badge bg="danger" onClick={(e) => handleDelete(data.ID)}>Xóa</Badge>
                </div>

        }
    ];

    function formatDate(date) {
        const newDate = new Date(date);
        var dateString = "";
        var monthString = "";

        if(newDate.getDate() < 10) {
            dateString = "0" + newDate.getDate();
        } else {
            dateString = "" + newDate.getDate();
        }

        if(newDate.getMonth < 9) {
            monthString = "0" + (newDate.getMonth() + 1);
        } else {
            monthString = "" + (newDate.getMonth() + 1);
        }

        const res = dateString + "-" + monthString + "-" + newDate.getFullYear();
        return res;
    }

    // const additionalCols = [
    //     {
    //         header: 'Thao tác',
    //         td: (data, index) => {

    //             return (
    //                 <div>
    //                     <Link to={{
    //                         pathname: "/meeting/" + data.ID,
    //                         state: meetingList[index]
    //                     }}>
    //                         <Badge bg="secondary">Chi tiết</Badge>
    //                     </Link>
    //                     <Badge bg="danger" onClick={(e) => handleDelete(data.ID)}>Xóa</Badge>
    //                 </div>
    //             );
    //         }
    //     }
    // ]


    const handleDelete = (id) => {
        confirmAlert({
            title: 'Xác nhận',
            message: 'Bạn có muốn xóa cuộc họp này không?',
            buttons: [
                {
                    label: 'Có',
                    onClick: () => {
                        axios.delete(localhost + '/meeting/' + id)
                            .then(res => {
                                console.log(res);
                                console.log(res.data);
                            });

                        const meetings = data.filter(data => data.ID !== id);
                        setData(meetings);
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
            {isLogin && meetingListRender()}
            {!isLogin && (<Redirect to="/login" />)}
        </>
    )

    function meetingListRender() {
        return (
            <>
                <div style={{ marginTop: '20px', marginBottom: "50px" }}>
                    <h2 style={{ textAlign: 'center' }}>Danh sách cuộc họp</h2>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'end'
                        }}
                    >
                        <div style={{ margin: 10 }}></div>
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

export default MeetingList;