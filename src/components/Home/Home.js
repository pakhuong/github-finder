import React, { Component } from 'react';
import { Container, Form, FormControl, InputGroup } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <Container>
                <h1 className='text-center mt-5 mb-4'>Github Finder</h1>
                <Form>
                    <Form.Group>
                        <InputGroup>
                            <FormControl placeholder='Enter a Github username' aria-label='Enter a Github username' />
                        </InputGroup>
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}

export default Home;