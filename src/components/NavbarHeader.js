import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './NavbarHeader.css'
const NavbarHeader = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="LogoName">World TV Live<span className="liveDot">.</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <NavDropdown title="Channels" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#international">International</NavDropdown.Item>
                                <NavDropdown.Item href="#saudiArabia">Saudi Arabia</NavDropdown.Item>
                                <NavDropdown.Item href="#singapore">Singapore</NavDropdown.Item>
                                <NavDropdown.Item href="#turkey">Turkey</NavDropdown.Item>
                                <NavDropdown.Item href="#UK">UK</NavDropdown.Item>
                                <NavDropdown.Item href="#egypt">Egypt</NavDropdown.Item>
                                <NavDropdown.Item href="#USA">USA</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarHeader