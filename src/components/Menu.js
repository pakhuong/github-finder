import React from 'react';
import {
    Navbar,
    Nav,
    OverlayTrigger,
    Tooltip,
    Container
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

let Menu = () => (
    <Navbar bg='dark' variant='dark'>
        <Container>
            <Navbar.Brand href='/' className='mr-auto'>
                Github Finder
            </Navbar.Brand>
            <Nav>
                <Nav.Link eventKey={1} href='https://github.com/pakhuong/github-finder' target='_blank'>
                    <OverlayTrigger placement='bottom' overlay={<Tooltip>Github</Tooltip>}>
                        <FontAwesomeIcon icon={faGithub} />
                    </OverlayTrigger>
                </Nav.Link>
            </Nav>
        </Container>
    </Navbar>
);

export default Menu;