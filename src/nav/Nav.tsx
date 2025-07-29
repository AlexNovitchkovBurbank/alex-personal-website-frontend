import React from "react";
import { Offcanvas, AccordionCollapse, Container, Navbar, NavbarBrand, NavbarCollapse, NavbarText, NavbarToggle, NavItem, NavLink } from "react-bootstrap";
import "./nav.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from 'react-responsive';


type NavProps = {
    numPages: number
}

const Nav = (props: NavProps) => {
    const smallScreenSize = useMediaQuery({ query: '(max-width: 991px)' });
    const largeScreenSize = useMediaQuery({ query: '(min-width: 992px)' });

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
                {largeScreenSize ?
                    <>
                        <NavbarCollapse id="basic-navbar-nav">
                            {pages.map((page: string) => (
                                <NavItem className="d-flex flex-row justify-content-center">
                                    <NavLink className="spaced-out" href={`/${page}`}>{page}</NavLink>
                                </NavItem>
                            ))}
                        </NavbarCollapse>
                    </> : <></>
                }
                {smallScreenSize ? 
                    <>
                        <NavbarToggle aria-controls="basic-navbar-nav" />
                        <Navbar.Offcanvas placement="end">
                            <Offcanvas.Body>
                                {pages.map((page: string) => (
                                    <NavItem className="d-flex flex-row justify-content-center">
                                        <NavLink href={`/${page}`}>{page}</NavLink>
                                    </NavItem>
                                ))}
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </> : <></>
                }
            </Container>
        </Navbar>
    )
}

export default Nav;