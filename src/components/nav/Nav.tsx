import { Link, NavLink as RouterNavLink } from "react-router-dom";
import {
  Offcanvas,
  Container,
  Navbar,
  NavItem,
} from "react-bootstrap";
import "./nav.css";
import "bootstrap/dist/css/bootstrap.min.css";

const pages = [
  { label: "Home", href: "/" },
  { label: "System Design", href: "/system-design" },
  { label: "About", href: "/about" },
];

const Nav = () => {
  return (
    <>
      <div className="desktop-nav d-none d-lg-flex">
        <div className="desktop-nav-content">
          <NavItem as={Link} to="/" className="nav-website-title">
            Alex's website
          </NavItem>
          <div className="desktop-links">
            {pages.map((page) => (
              <NavItem key={page.label} className="desktop-nav-item">
                <RouterNavLink
                  to={page.href}
                  end={page.href === "/"}
                  className={({ isActive }) =>
                    `desktop-nav-link${isActive ? " active" : ""}`
                  }
                >
                  {page.label}
                </RouterNavLink>
              </NavItem>
            ))}
          </div>
        </div>
      </div>

      <Navbar
        expand="lg"
        bg="light"
        variant="light"
        className="mobile-nav d-flex d-lg-none"
      >
        <Container fluid>
          <NavItem as={Link} to="/" className="nav-website-title">
            Alex's website
          </NavItem>
          <Navbar.Toggle aria-controls="mobile-navbar-nav" />
          <Navbar.Offcanvas
            id="mobile-navbar-nav"
            aria-labelledby="mobile-navbar-label"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="mobile-navbar-label">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {pages.map((page) => (
                <NavItem key={page.label}>
                  <RouterNavLink
                    to={page.href}
                    end={page.href === "/"}
                    className={({ isActive }) =>
                      `mobile-nav-link${isActive ? " active" : ""}`
                    }
                  >
                    {page.label}
                  </RouterNavLink>
                </NavItem>
              ))}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Nav;
