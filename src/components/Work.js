import React from 'react';

const Work = ({id, name}) => (
    <div className="columns is-desktop">
        <div className="column has-text-left">
            <span className="work-title">
                {name}
            </span>
        </div>
    </div>
);

export default Work;