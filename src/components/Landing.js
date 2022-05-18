import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            <h1>Welcome to To Do Task</h1>
            <Link to='/task'>Go To Task</Link>
        </div>
    );
};

export default Landing;