

import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SideBar from "../components/sideBar";
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
                        <Nav activeKey={window.location.pathname}>
                            <LinkContainer to="/login">
                                <Nav.Link>Xem thêm</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </div>

                </div>
            </div>
        </>
    );



};

export default Home;