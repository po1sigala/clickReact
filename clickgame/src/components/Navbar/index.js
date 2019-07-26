import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./style.css";
const HomeNavbar = () => (
    <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Relevant links</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">LinkedIn</Nav.Link>
                <Nav.Link href="#features">Portfolio</Nav.Link>
                <Nav.Link href="#pricing">GitHub</Nav.Link>
            </Nav>
        </Navbar>
    </>
);
export default HomeNavbar;
