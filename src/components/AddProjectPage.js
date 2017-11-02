import React from 'react';
import {connect} from 'react-redux';
import ProjectForm from './ProjectForm';
import {startAddProject} from '../actions/actions';

export class AddProjectPage extends React.Component {
    onSubmit = (project) => {
        this
            .props
            .startAddProject(project);
        this
            .props
            .history
            .push('/projects');
    }
    render() {
        return (
            <div className="container has-text-centered">
                <div className="columns">
                    <ProjectForm onSubmit={this.onSubmit}/>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddProject: (project) => dispatch(startAddProject(project))
});

export default connect(undefined, mapDispatchToProps)(AddProjectPage);
