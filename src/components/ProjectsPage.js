import React from 'react';
import {connect} from 'react-redux';
import Project from './Project';

export const ProjectsPage = (props) => (
    <div className="column is-half giovanna-profile-container">
        <div className="panel">
            <p className="panel-heading">
                Projects
            </p>
            {props.projects.length === 0
                ? (
                    <div className="list-item list-item--message">
                        <span>No projects</span>
                    </div>
                )
                : (props.projects.map((project) => {
                    return <Project key={project.id} {...project}/>;
                }))
}
        </div>
    </div>
);

const mapStateToProps = (state, props) => {
    return {projects: state.projects};
};

export default connect(mapStateToProps)(ProjectsPage);
