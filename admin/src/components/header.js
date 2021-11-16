import { Navbar, NavItem, NavLink } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";


const Header = () => {



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
                                <Nav activeKey={window.location.pathname}>
                                    <LinkContainer to="/login">
                                        <Nav.Link>Đăng nhập</Nav.Link>
                                    </LinkContainer>
                                    
                                </Nav>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

        </>
    );
};

export default Header;