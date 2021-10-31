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
                            <Navbar.Brand href="/home">SROOM</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                                activeKey={window.location.pathname}
                            >
                                <LinkContainer to="/room">
                                    <Nav.Link href="/room">Phòng</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/schedule">
                                    <Nav.Link href="/schedule">Lịch trình</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/createMeeting">
                                    <Nav.Link href="/createMeeting">Tạo cuộc họp</Nav.Link>
                                </LinkContainer>
                            </Nav>
                            <Form className="d-flex">
                                <Nav activeKey={window.location.pathname}>
                                    <LinkContainer to="/signup">
                                        <Nav.Link>Đăng kí</Nav.Link>
                                    </LinkContainer>
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