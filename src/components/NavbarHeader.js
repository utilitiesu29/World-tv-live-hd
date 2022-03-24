import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './NavbarHeader.css'
import logo from '../images/world-tv-live2.png';
const NavbarHeader = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#" className="LogoName">
                        <img
                            alt=""
                            src={logo}
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                        />World TV Live<span className="liveDot">.</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link href="/world-Tv-Live/">Home</Nav.Link>
                            <Nav.Link href="/world-Tv-Live/About">About</Nav.Link>
                            <Nav.Link href="/world-Tv-Live/Contact">Contact</Nav.Link>
                            <Nav.Link href="/world-Tv-Live/Policies">Privacy policy</Nav.Link>
                            <NavDropdown title="Channels" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#international">International</NavDropdown.Item>
                                <NavDropdown.Item href="#pakistan">Pakistan</NavDropdown.Item>
                                <NavDropdown.Item href="#india">India</NavDropdown.Item>
                                <NavDropdown.Item href="#germany">Germany</NavDropdown.Item>
                                <NavDropdown.Item href="#france">France</NavDropdown.Item>
                                <NavDropdown.Item href="#japan">Japan</NavDropdown.Item>
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