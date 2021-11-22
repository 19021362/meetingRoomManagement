

import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SideBar from "../components/sideBar";
import '../styles/content.css';
import axios from 'axios';
import { auth, SetAuth } from '../data/auth';
import { localhost } from '../local';




const Home = () => {

    useEffect(() => {
        const fetchUser = async () => {
            const result = await axios.get(localhost + "/user/" + auth.user_id);
            SetAuth(result.data);
            console.log(auth);
        };

        fetchUser()
    });

    return (
        <>
            <div class="home-content-container">

                <div class="container-fluid">

                    <div class="jumbotron">
                        <h1>Chào mừng {auth.name} đến với SROOM!</h1>
                        <p>Phần mềm hỗ trợ công ty, doanh nghiệp quản lí phòng họp khoa học, hiệu quả.</p>
                        <p>Tìm và đặt phòng họp dễ dàng hơn bao giờ hết</p>
                    </div>

                </div>
            </div>
        </>
    );



};

export default Home;