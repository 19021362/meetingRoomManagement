import { Navbar, NavItem, NavLink } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Form } from "react-bootstrap";
import { Button, SplitButton, Dropdown } from "react-bootstrap";
import { React, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { auth, isLogin, RemoveAuth, SetAuth, setLogin } from "../data/auth";
import { Link } from "react-router-dom";



const Header = () => {

    const history = useHistory();
    const [checkLogin, setCheckLogin] = useState(false);

    const logout = () => {
        RemoveAuth();
        setCheckLogin(false);
        history.push("/login");
    };

    const profileOnClick = () => {
        history.push("/profile");
    }

    useEffect(() => {
        if (isLogin) {
            setCheckLogin(true);
        }
    });


    return (
        <>
            <div className="Header">
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <LinkContainer to="/">
                            <Navbar.Brand href="/home">SROOM</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            {checkLogin === false && publicHeader()}
                            {checkLogin === true && userHeader()}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

        </>
    );

    function publicHeader() {
        if (!checkLogin) {
            return (
                <>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Form className="d-flex" style={{ float: "right" }}>
                        <Nav style={{ float: "right" }}>
                            <LinkContainer to="/login">
                                <Nav.Link>Đăng nhập</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Form>
                </>
            );
        };
    };

    function userHeader() {
        if (checkLogin) {
            return (
                <>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        activeKey={window.location.pathname}
                    >
                        <LinkContainer to="/room" onClick={() => setCheckLogin(true)}>
                            <Nav.Link>Xem phòng</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/schedule" onClick={() => setCheckLogin(true)}>
                            <Nav.Link>Xem lịch trình</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/createMeeting" onClick={() => setCheckLogin(true)}>
                            <Nav.Link>Tạo cuộc họp</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/myMeeting" onClick={() => setCheckLogin(true)}>
                            <Nav.Link>Cuộc họp của tôi</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Form className="d-flex">
                        <Nav>
                            <SplitButton
                                id={`dropdown-split-variants-success`}
                                variant="success"
                                title={auth.email}
                            >
                                <Dropdown.Item onClick={profileOnClick}>
                                    <i class="fa fa-id-badge" aria-hidden="true"></i> Hồ sơ cá nhân
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={logout}>
                                    <i class="fa fa-sign-out" aria-hidden="true"></i> Logout
                                </Dropdown.Item>
                            </SplitButton>
                        </Nav>
                    </Form>
                </>
            );
        };
    };
};



export default Header;