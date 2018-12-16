import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import queryString from 'query-string';

import styles from './Repo.module.css';

let Repo = ({ 
    name, 
    fullName, 
    description, 
    stargazersCount, 
    openIssuesCount, 
    owner,
    defaultBranch
}) => (
    <Col sm={6} className='mb-3'>
        <Card className={`${styles.repo}`}>
            <Card.Body>
                <Card.Title>
                    <Link to={{ 
                        pathname: `/users/${owner.login}/repositories/${name}`,
                        search: queryString.stringify({ repoFullName: fullName, defaultBranch })
                    }}>
                        {name}
                    </Link>
                </Card.Title>
                <Card.Text>{description}</Card.Text>
                <ul className='list-inline'>
                    <li className='list-inline-item text-muted' title='Stars'>
                        <FontAwesomeIcon icon={faStar} /> {stargazersCount}
                    </li>
                    <li className='list-inline-item text-muted' title='Open issues'>
                        <FontAwesomeIcon icon={faExclamationCircle} /> {openIssuesCount}
                    </li>
                </ul>
            </Card.Body>
        </Card>
    </Col>
);

export default Repo;