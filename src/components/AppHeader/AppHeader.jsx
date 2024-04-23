import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import route from "./../../routes/route.json";

const AppHeader = () => {
  const activeClasses = ({ isActive }) =>
    isActive
      ? "text-white fs-6 fw-bold text-decoration-none ms-3"
      : "text-decoration-none text-white ms-3";

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">ShortYourUrl</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className={activeClasses} to={route.ALL_URLS}>
              All Urls
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AppHeader;
