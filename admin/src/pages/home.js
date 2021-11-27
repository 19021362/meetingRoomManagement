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
            text: 'Biểu đồ tần suất sử dụng phòng trong 1 tháng',
        },
    },
};

const Home = () => {

    const [roomLabel, setRoomLabel] = useState([]);


    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const labels = [];
            const result = await axios.get(localhost + "/room/all");
            //setData(result.data);

            result.data.map((room, index) => {
                const label = room.title;
                labels.push(label);
            });
            setRoomLabel(labels);
        };

        fetchData();
    }, []);

    const dataSet = {
        labels: roomLabel,
        datasets: [
            {
                label: "lần sử dụng",
                data: [4, 5, 9, 2, 10],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
    };

    const approveFeedback = () => {
        alert("đã phê duyệt")
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
                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </p>
                                    <Button variant="outline-primary" style={{ margin: "0px 10px 0px 0px" }} onClick={approveFeedback}>
                                        Phê duyệt
                                    </Button>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <hr />
                    </div>
                    <div className="admin-chart" style={{ margin: "50px 50px 50px 50px", minHeight: "300px" }}>
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