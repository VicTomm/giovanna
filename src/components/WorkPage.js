import React from 'react';
import {connect} from 'react-redux';
import Work from './Work';
import ProjectImage from './ProjectImage';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LazyLoad from 'react-lazyload';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-105721907-1');
ReactGA.pageview(window.location.pathname + window.location.search);

export class WorkPage extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            imagePath: '',
            type: ''
        }
    }
    onProjectClick = (type, imagePath, name, e) => {
        this.setState({name: name, imagePath: imagePath, type: type})
    };

    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="giovanna"
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={300}
                transitionEnter={true}
                transitionLeave={true}>
                <div className="column is-12">
                    <div className="column is-8 is-offset-2 show-for-mobile">
                        <LazyLoad once height={200}>
                            {this.props.projects.length === 0
                                ? (
                                    <div className="list-item list-item--message">
                                        <span>No projects</span>
                                    </div>
                                )
                                : (this.props.projects.map((project) => {
                                    return <span
                                        key={project.id}
                                        onClick={this
                                        .onProjectClick
                                        .bind(this, project.imagePath, project.type, project.name)}><Work {...project}/></span>;
                                }))
}
                        </LazyLoad>
                    </div>
                    <div className="columns show-for-desktop">
                        <div className="column is-6">
                            <ProjectImage {...this.state}/>
                        </div>
                        <div className="column is-6 projects">
                            <div className="container1">
                                <div className="container2">
                                    {this.props.projects.length === 0
                                        ? (
                                            <div className="list-item list-item--message">
                                                <span>No projects</span>
                                            </div>
                                        )
                                        : (this.props.projects.map((project) => {
                                            return <span
                                                key={project.id}
                                                onClick={this
                                                .onProjectClick
                                                .bind(this, project.imagePath, project.type, project.name)}><Work {...project}/></span>;
                                        }))
}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}
const mapStateToProps = (state, props) => {
    return {projects: state.projects};
};

export default connect(mapStateToProps)(WorkPage);
