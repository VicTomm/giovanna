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
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{name}</p>
                            <p className="subtitle is-6">{type}</p>
                        </div>
                    </div>
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