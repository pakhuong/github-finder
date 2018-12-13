import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = () => {
    return (
        <Navbar inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to='/'>Github Finder</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
                <NavItem eventKey={1} href='https://github.com/pakhuong/github-finder'>
                    <FontAwesomeIcon icon='github' />
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Menu;