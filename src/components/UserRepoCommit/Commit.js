import React from 'react';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';

import styles from './Commit.module.css';

let Commit = ({ commitID, message, author, htmlUrl }) => {
    return (
        <ListGroup.Item>
            <Row>
                <Col sm={10}>
                    <div>
                        <div>{message}</div>
                        <div className='text-muted'><small>committed by {author.name}</small></div>
                    </div>
                </Col>
                <Col sm={2} className='text-right'>
                    <Button href={htmlUrl} target='_blank' variant='outline-primary' className={styles.sha}>
                        {commitID.substring(0, 7)}
                    </Button>
                </Col>
            </Row>
        </ListGroup.Item>
    );
};

export default Commit;