import React from 'react';
import {connect} from 'react-redux';
import Work from './Work';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const WorkPage = (props) => (
    <ReactCSSTransitionGroup
        transitionName="giovanna"
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={300}
        transitionEnter={true}
        transitionLeave={true}>
        <div className="container has-text-centered">
            <div className="columns">
                <div className="column">
                    images
                </div>
                <div className="column projects">
                    <div className="container1">
                        <div className="container2">
                            {
                                props.projects.length === 0
                                ? (
                                    <div className="list-item list-item--message">
                                        <span>No projects</span>
                                    </div>
                                )
                                : (props.projects.map((project) => {
                                    return <Work key={project.id} {...project}/>;
                                }))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ReactCSSTransitionGroup>
);
const mapStateToProps = (state, props) => {
    return {projects: state.projects};
};

export default connect(mapStateToProps)(WorkPage);
