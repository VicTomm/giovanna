import React from 'react';

const ProjectImage = ({name, type, imagePath}) => (
        <figure className="work-image">
            <img src={type} alt={name}/>
        </figure>
);

export default ProjectImage;