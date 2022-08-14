import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BsNavbar from "react-bootstrap/Navbar";

function Navbar(): JSX.Element {
    return (
        <BsNavbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container fluid id="responsive-navbar-nav">
                <BsNavbar.Brand href="/">VDS</BsNavbar.Brand>
                <BsNavbar.Toggle aria-controls="responsive-navbar-nav" />
                <BsNavbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/drawings">Drawings</Nav.Link>
                    </Nav>
                </BsNavbar.Collapse>
            </Container>
        </BsNavbar>
    );
}

export default Navbar;
