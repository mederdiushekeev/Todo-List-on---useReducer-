import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>Home</Navbar.Brand>
          </Link>

          <Link to="/add">
            <Navbar.Brand>Add Todo</Navbar.Brand>
          </Link>

          <Link to="/todos">
            <Navbar.Brand>Todo List</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
