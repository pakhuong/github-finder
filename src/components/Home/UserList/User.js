import React from 'react';
import { Col, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

let User = ({ username, avatarUrl }) => (
    <Col xs={6} sm={4} md={2}>
        <Link to={{ pathname: `/users/${username}`, search: `?${queryString.stringify({ avatarUrl })}` }}>
            <Figure>
                <Figure.Image src={avatarUrl} roundedCircle className='user-avatar mx-auto mb-3' />
                <Figure.Caption className='text-center'>{username}</Figure.Caption>
            </Figure>
        </Link>
    </Col>
);

export default User;