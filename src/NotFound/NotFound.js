import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h3>This page in not available</h3>
            <h1>404</h1>
            <Link className='btn btn-danger'>Back To Home Page</Link>
        </div>
    );
};

export default NotFound;