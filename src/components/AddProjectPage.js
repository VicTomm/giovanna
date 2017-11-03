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
            <div className="column is-8 is-offset-2">
                    <ProjectForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddProject: (project) => dispatch(startAddProject(project))
});

export default connect(undefined, mapDispatchToProps)(AddProjectPage);
