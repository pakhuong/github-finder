import React, { Component } from 'react';
import queryString from 'query-string';
import { Container, ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchCommits } from '../../actions/commit-actions';
import Commit from './Commit';

class UserRepoCommit extends Component {
    constructor(props) {
        super(props);

        let queryParams,
            { match, location } = this.props;
        
        if (!location.search) {
            window.location.assign('/');
        }

        queryParams = queryString.parse(location.search);

        let { repoFullName, defaultBranch } = queryParams;

        this.state = {
            username: match.params.username,
            repoName: match.params.repoName,
            repoFullName,
            defaultBranch
        };
    }

    componentDidMount() {
        this.props.searchCommits(this.state.repoFullName);
    }

    render() {
        let latestTen,
            { commits } = this.props,
            { username, repoName, defaultBranch } = this.state;

        if (commits && commits.length) {
            latestTen = commits.slice(0, 10);
        }
        
        return (
            <Container>
                <h2 className='mt-4'>{username} / {repoName}</h2>
                <p>Latest commits from branch {defaultBranch}</p>
                {
                    commits &&
                        <ListGroup>
                            {latestTen.map(commit => 
                                <Commit 
                                    commitID={commit.sha} 
                                    message={commit.commit.message}
                                    author={commit.commit.author}
                                    htmlUrl={commit.html_url} />)}
                        </ListGroup>
                }
            </Container>
        );
    }
}

let mapStateToProps = ({ commit: { commits } }, ownProps) => ({ ...ownProps, commits });

let mapDispatchToProps = dispatch => bindActionCreators({ searchCommits }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserRepoCommit);