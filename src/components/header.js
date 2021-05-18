import React from 'react'
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Header = ({activeKey}) => {
    return(
        <Navbar bg="light" fixed="top" className="justify-content-between">
            <Navbar.Brand as={Link} to="/">Blog</Navbar.Brand>
                <Nav defaultActiveKey={activeKey} className="justify-content-end">
                    <Nav.Link as={Link} to="/" eventKey='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to="/create" eventKey='/create'>Create</Nav.Link>
                    <Nav.Link>Logout</Nav.Link>
                </Nav>
        </Navbar>
    )
}

export default Header