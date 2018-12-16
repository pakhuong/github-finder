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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import queryString from 'query-string';

import { searchUsers } from '../../actions/user-actions';
import UserList from './UserList/UserList';

class Home extends Component {
    constructor(props) {
        super(props);

        let searchTerm, currentPage, queryParams,
            { location } = this.props;

        if (location.search) {
            queryParams = queryString.parse(location.search);
            searchTerm = queryParams.searchTerm;
            currentPage = queryParams.currentPage
        }

        this.state = {
            searchTerm: searchTerm || '',
            currentPage: currentPage || 1,
            pageSize: 30
        };
    }

    onSearch = (e) => {
        e.preventDefault();

        if (!this.state.searchTerm) {
            return;
        }

        let { searchTerm } = this.state;

        this.props.searchUsers(searchTerm);
        this.props.history.replace(`?${queryString.stringify({ searchTerm, currentPage: 1 })}`);
    };

    onUsernameInputChange = (e) => {
        this.setState({ searchTerm: e.currentTarget.value });
    };

    onPageChange = ({ selected }) => {
        let { searchTerm } = this.state;

        this.props.history.replace(`?${queryString.stringify({ searchTerm, currentPage: selected + 1 })}`)
        this.props.searchUsers(searchTerm, selected + 1);
        this.setState({ currentPage: selected + 1 });
    };

    render() {
        var { searchTerm, currentPage, pageSize } = this.state,
            { users, totalUser } = this.props;

        return (
            <Container>
                <h1 className='text-center mt-5 mb-4'>
                    <FontAwesomeIcon icon={faGithub} /> Github Finder
                </h1>
                <Form className='mb-5' onSubmit={this.onSearch}>
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
                {
                    users && users.length ?
                        <UserList
                            users={users}
                            totalUser={totalUser}
                            pageSize={pageSize}
                            initialPage={currentPage - 1}
                            onPageChange={this.onPageChange} /> :
                        null
                }
            </Container>
        );
    }
}

let mapStateToProps = (
    {
        user: {
            users,
            total: totalUser
        }
    },
    ownProps
) => ({
    ...ownProps,
    users,
    totalUser
});

let mapDispatchToProps = dispatch => bindActionCreators({ searchUsers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);