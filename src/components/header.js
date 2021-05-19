import React from 'react'
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useHistory } from "react-router-dom"

const Header = ({activeKey}) => {

    let history = useHistory()
    const handleLogOut = () => {
        localStorage.removeItem('token')
        history.push("/login")
    }

    return(
        <Navbar bg="light" sticky="top" className="justify-content-between">
            <Navbar.Brand as={Link} to="/">Blog</Navbar.Brand>
                <Nav defaultActiveKey={activeKey} className="justify-content-end">
                    <Nav.Link as={Link} to="/" eventKey='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to="/create" eventKey='/create'>Create</Nav.Link>
                    <Nav.Link onClick={handleLogOut} >Log out</Nav.Link>
                </Nav>
        </Navbar>
    )
}

export default Header