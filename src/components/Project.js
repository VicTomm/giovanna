import React from 'react';
import {Link} from 'react-router-dom';

const Project = ({id, name}) => (
    <Link className="panel-block" to={`/edit/${id}`}>
        <span className="panel-icon">
            <i className="fa fa-book"></i>
        </span>
        {name}
    </Link>
);

export default Project;
