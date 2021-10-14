import { Container, Navbar} from "react-bootstrap";


const Footer = () => {
    return(
    <>
        <div className="Footer">
            <Navbar fixed='bottom'>
                <Container>
                    <Navbar.Brand href="#home">SROOM Team</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a href="#login">About us</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    </>
    );

};

export default Footer;