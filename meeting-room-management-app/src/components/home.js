import { Container, Col, Row } from "react-bootstrap";

import React from 'react';
import SideBar from "./sideBar";
import '../styles/content.css';




const Home = () => {
    return (
        <>
            <SideBar />
            <div class="content-container">

                <div class="container-fluid">

                    <div class="jumbotron">
                        <h1>Chào mừng đến với SROOM!</h1>
                        <p>Phần mềm hỗ trợ công ty, doanh nghiệp quản lí phòng họp khoa học, hiệu quả.</p>
                        <p>Tìm và đặt phòng họp dễ dàng hơn bao giờ hết</p>
                        <p>
                            <a class="btn btn-lg btn-primary" href="#" role="button">View more &raquo;</a>
                        </p>
                    </div>

                </div>
            </div>
        </>
    );



};

export default Home;