import React, { Component } from 'react';
import { 
    Container, 
    Form, 
    FormControl, 
    InputGroup,
    Button 
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

import { GITHUB_SEARCH_API } from '../../consts/api-key';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        };
    }

    onSearch = (e) => {
        e.preventDefault();
        
        axios.get(`${GITHUB_SEARCH_API}/users`).then(res => console.log(res));
    };

    onUsernameInputChange = (e) => {
        this.setState({ searchTerm: e.currentTarget.value });
    };

    render() {
        var { searchTerm } = this.state;

        return (
            <Container>
                <h1 className='text-center mt-5 mb-4'>
                    <FontAwesomeIcon icon={faGithub} /> Github Finder
                </h1>
                <Form onSubmit={this.onSearch}>
                    <Form.Group>
                        <InputGroup>
                            <FormControl 
                                placeholder='Enter a Github username' 
                                aria-label='Enter a Github username' 
                                value={searchTerm} 
                                onChange={this.onUsernameInputChange} />
                            <InputGroup.Append>
                                <Button variant='dark' type='submit'>
                                    <FontAwesomeIcon icon={faSearch} /> Search
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}

export default Home;