import { Navbar, NavItem, NavLink } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <>
            <div className="Header">
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">SROOM</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Room</Nav.Link>
                                <Nav.Link href="#action3">Schedule</Nav.Link>
                                <Nav.Link href="#action4">Create meeting</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <NavItem>
                                    <NavLink
                                        className="nav-link-icon"
                                        to="#"
                                        tag={Link}
                                    >
                                        <i className="ni ni-circle-08" />
                                        <span className="nav-link-inner--text">Register</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link-icon" to="/components/login" tag={Link}>
                                        <i className="ni ni-key-25" />
                                        <span className="nav-link-inner--text">Login</span>
                                    </NavLink>
                                </NavItem>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

        </>
    );
};

export default Header;