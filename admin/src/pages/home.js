import React, { useState, useEffect } from 'react'
import { Bar, Line } from 'react-chartjs-2';
import axios from 'axios';
import { localhost } from '../local';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { auth, isLogin } from '../data/auth';
import Login from './login';
import { Redirect } from 'react-router';
import { Accordion, Button } from 'react-bootstrap';
import "../styles/admin.css";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Biểu đồ tần suất sử dụng phòng họp',
        },
    },
    
};

const Home = () => {

    const [roomLabel, setRoomLabel] = useState([]);
    const [feedbacks, setFeedback] = useState([]);
    const [freqData, setFreqData] = useState([]);



    useEffect(() => {
        fetchData();
        fetchFeedback();
    }, []);

    const fetchData = async () => {
        const labels = [];
        const freqs = [];
        const result = await axios.get(localhost + "/room/all/frequency");
        console.log(result.data);
        result.data.map((room, index) => {
            const label = room.lable;
            labels.push(label);
            const freq = room.freq + 5;
            freqs.push(freq);
        });
        console.log(labels);
        console.log(freqs);
        setRoomLabel(labels);
        setFreqData(freqs);
    };

    const fetchFeedback = async () => {
        const result = await axios.get(localhost + "/feedback/all");
        setFeedback(result.data);
    };

    const dataSet = {
        labels: roomLabel,
        datasets: [
            {
                label: "lần sử dụng",
                data: freqData,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                
            }
        ],
    };

    const approveFeedback = (fb) => {

        const updateFb = {
            room_id: fb.room_id,
            feedback: fb.feedback,
            isApprove: 1
        }

        axios.put(localhost + "/feedback/" + fb.feedback_id, updateFb,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        alert("đã phê duyệt");

        setFeedback(feedbacks.filter(_fb => _fb !== fb))
    };

    const deleteFeedback = (id) => {
        confirmAlert({
            title: 'Xác nhận',
            message: 'Bạn có muốn xóa phản hồi này không?',
            buttons: [
                {
                    label: 'Có',
                    onClick: () => {
                        axios.delete(localhost + '/feedback/' + id)
                            .then(res => {
                                console.log(res);
                                console.log(res.data);
                            });
                        setFeedback(feedbacks.filter(fb => fb.feedback_id != id));

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
            {isLogin && authHome()}
            {!isLogin && (<Redirect to="/login" />)}
        </>
    );

    function authHome() {
        return (
            <>
                <div className="admin-content">
                    <div className="admin-accordition">
                        <h2>phản hồi của người dùng</h2>
                        <Accordion flush style={{marginBottom: "50px"}}>
                            {
                                feedbacks.map((fb, index) => (
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header>{fb.room_name}</Accordion.Header>
                                        <Accordion.Body>
                                            <p>{fb.feedback}</p>
                                            <Button variant="outline-primary" style={{ margin: "0px 10px 0px 0px" }}
                                                onClick={(e) => approveFeedback( fb )}>
                                                Phê duyệt
                                            </Button>
                                            <Button variant="outline-danger" style={{ margin: "0px 10px 0px 0px" }}
                                                onClick={(e) => deleteFeedback(fb.feedback_id)}>
                                                Xóa
                                            </Button>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))
                            }
                        </Accordion>
                        <hr />
                    </div>
                    <div className="admin-chart" style={{ margin: "200px 50px 50px 50px", minHeight: "300px" }}>
                        <h2>Biểu đồ tần suất sử dụng phòng</h2>
                        <Bar
                            options={options} data={dataSet}
                        />
                        <hr />
                    </div>
                    <div>

                    </div>
                </div>
            </>
        );
    }
};

export default Home;