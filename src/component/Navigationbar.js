import { Navbar, Container, Nav } from "react-bootstrap";

const Navigationbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="">Satu Sore</Navbar.Brand>
        <Nav className="me-right">
          <Nav.Link href="/">Beranda</Nav.Link>
          <Nav.Link href="/filter">Menu</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
