import React from "react";
import { AccordionCollapse, Container, Navbar, NavbarBrand, NavbarCollapse, NavbarText, NavbarToggle, NavItem, NavLink } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import "./nav.css"

type NavProps = {
    numPages: number
}

const Nav = (props: NavProps) => {
    const pages: Array<string> = [];
    let i = 0;
    while (i < props.numPages) {
        pages.push(`page ${i + 1}`)
        i++;
    }

    return (
        <Navbar collapseOnSelect expand='lg' bg="light" variant="light">
            <Container fluid>
                <NavbarBrand>Alex's website</NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <Navbar.Offcanvas placement="end">
                <NavbarCollapse id="basic-navbar-nav">
                    {pages.map((page: string) => (
                        <NavItem className="d-flex flex-row justify-content-center">
                            <NavLink className="ml4" href={`page${page}`}/>{page}
                        </NavItem>
                    ))}
                </NavbarCollapse>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default Nav;