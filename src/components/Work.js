import React from 'react';

const Work = ({id, name, imagePath, type}) => (
    <div className="columns is-desktop">
    <div className="column has-text-centered show-for-mobile">
        <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img src={imagePath} alt={name}/>
                </figure>
            </div>
        </div>
    </div>
    <div className="column has-text-left show-for-desktop">
        <span className="work-title">
            {name}
        </span>
    </div>
</div>
);

export default Work;