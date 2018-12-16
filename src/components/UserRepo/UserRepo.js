import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import queryString from 'query-string';

import styles from './UserRepo.module.css';

import { searchRepos } from '../../actions/repo-actions';
import RepoList from './RepoList/RepoList';

class UserRepo extends Component {
    constructor(props) {
        super(props);

        let queryParams,
            { match, location } = this.props;
        
        if (!location.search) {
            window.location.assign('/');
        }

        queryParams = queryString.parse(location.search);

        let { avatarUrl, currentPage } = queryParams;

        this.state = {
            username: match.params.username,
            avatarUrl,
            currentPage: currentPage || 1
        };
    }

    componentDidMount() {
        this.props.searchRepos(this.state.username, this.state.currentPage);
    }

    onPageChange = ({ selected }) => {
        this.props.history.replace(`${this.props.location.pathname}?${queryString.stringify({ 
            avatarUrl: this.state.avatarUrl, 
            currentPage: selected + 1 
        })}`);

        this.props.searchRepos(this.state.username, selected + 1);
        this.setState({ currentPage: selected + 1 });
    };

    render() {
        let { repos, totalRepo } = this.props,
            { username, avatarUrl, currentPage } = this.state;
        
        return (
            <Container className='pt-4'>
                <Row>
                    <Col sm={4}>
                        <Figure>
                            <Figure.Image src={avatarUrl} roundedCircle className={`${styles.userAvatar} user-avatar mx-auto mb-3`} />
                            <Figure.Caption className={`${styles.userName} text-center`}>{username}</Figure.Caption>
                        </Figure>
                    </Col>
                    <Col sm={8}>
                        {
                            repos && repos.length && 
                            <RepoList 
                                repos={repos} 
                                totalRepo={totalRepo}
                                initialPage={currentPage - 1}
                                pageSize={10}
                                onPageChange={this.onPageChange} />
                        }
                    </Col>
                </Row>
            </Container>
        );
    }
}

let mapStateToProps = ({ repo: { repos, total: totalRepo } }, ownProps) => ({
    ...ownProps,
    repos,
    totalRepo
});

let mapDispatchToProps = dispatch => bindActionCreators({ searchRepos }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserRepo);