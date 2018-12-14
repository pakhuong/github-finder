import React from 'react';
import { Navbar, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Menu = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand href='/' className='mr-auto'>
                Github Finder
            </Navbar.Brand>
            <Nav>
                <Nav.Link eventKey={1} href='https://github.com/pakhuong/github-finder'>
                    <OverlayTrigger placement='bottom' overlay={
                        <Tooltip>Github</Tooltip>
                    }>
                        <FontAwesomeIcon icon={faGithub} />
                    </OverlayTrigger>
                </Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Menu;