import React from 'react';
import {connect} from 'react-redux';
import ProjectForm from './ProjectForm';
import {startEditProject, startRemoveProject} from '../actions/actions';

export class EditPojectPage extends React.Component {
    onSubmit = (project) => {
        this
            .props
            .startEditProject(this.props.project.id, project);
        this
            .props
            .history
            .push('/projects');
    };
    onRemove = () => {
        this
            .props
            .startRemoveProject({id: this.props.project.id});
        this
            .props
            .history
            .push('/');
    };
    render() {
        return (
            <div className="container has-text-centered">
                <div className="columns">
                    <div className="column is-3 giovanna-profile-container">
                        <img src={this.props.project.imagePath}/>
                    </div>
                    <ProjectForm project={this.props.project} onSubmit={this.onSubmit}/>
                </div>
                <button className="button giovanna-button-edit is-danger" onClick={this.onRemove}>Remove</button>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    project: state
        .projects
        .find((project) => project.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditProject: (id, project) => dispatch(startEditProject(id, project)),
    startRemoveProject: (data) => dispatch(startRemoveProject(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPojectPage);