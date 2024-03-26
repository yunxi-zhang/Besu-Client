import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="lg" bg="light" >
      <Container>
      <Navbar.Brand href="#home">Besu Frontend App</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/owner">Owner</Nav.Link>
            <Nav.Link href="/user">User</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
