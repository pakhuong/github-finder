import React from 'react';
import { Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

import User from './User';

let UserList = ({ users, totalUser, initialPage, pageSize, onPageChange }) => (
    <div>
        <Row className='mb-3'>
            {users.map(user => <User key={user.id} username={user.login} avatarUrl={user.avatar_url} />)}
        </Row>
        <ReactPaginate
            pageCount={Math.ceil(totalUser / pageSize)}
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

export default UserList;