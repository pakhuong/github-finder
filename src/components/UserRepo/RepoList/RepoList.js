import React from 'react';
import { Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

import Repo from './Repo';

let RepoList = ({ repos, totalRepo, initialPage, pageSize, onPageChange }) => {
    return (
        <div>
            <Row className='mb-3'>
                {
                    repos.map(repo => <Repo
                        key={repo.id}
                        name={repo.name}
                        fullName={repo.full_name}
                        description={repo.description}
                        stargazersCount={repo.stargazers_count}
                        openIssuesCount={repo.open_issues_count}
                        owner={repo.owner}
                        defaultBranch={repo.default_branch} />)
                }
            </Row>
            <ReactPaginate
                pageCount={Math.ceil(totalRepo / pageSize)}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                initialPage={initialPage}
                onPageChange={onPageChange}
                disableInitialCallback
                containerClassName='pagination justify-content-center'
                pageClassName='page-item'
                previousClassName='page-item'
                nextClassName='page-item'
                breakClassName='page-link'
                pageLinkClassName='page-link'
                previousLinkClassName='page-link'
                nextLinkClassName='page-link'
                activeClassName='active'
                disabledClassName='disabled' />
        </div>
    );
};

export default RepoList;