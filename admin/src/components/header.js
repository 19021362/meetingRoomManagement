import { Navbar, NavItem, NavLink } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Form } from "react-bootstrap";
import { Button, SplitButton, Dropdown } from "react-bootstrap";
import { React, useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router";
import { auth, isLogin, RemoveAuth, setAuth, setLogin } from "../data/auth";


const Header = () => {

    const history = useHistory();
    const [checkLogin, setCheckLogin] = useState(false);

    const logout = () => {
        RemoveAuth();
        setCheckLogin(false);
        
        history.push("/login");
    };

    useEffect(() => {
        if(isLogin) {
            setCheckLogin(true);
        }
        console.log(isLogin)
    });


    return (
        <>
            <div className="Header">
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <LinkContainer to="/">
                            <Navbar.Brand href="/home">SROOMadmin</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            {!checkLogin && publicHeader()}
                            {checkLogin && userHeader()}
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
                        <LinkContainer to="/roomList">
                            <Nav.Link>Phòng</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/userList">
                            <Nav.Link>Người dùng</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/meetingList">
                            <Nav.Link>Cuộc họp</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Form className="d-flex">
                        <Nav>
                            <SplitButton
                                id={`dropdown-split-variants-success`}
                                variant="success"
                                title={auth.email}
                            >
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={logout} style={{ textAlign: "center" }}>
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