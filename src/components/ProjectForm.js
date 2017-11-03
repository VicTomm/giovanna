import React from 'react';

export default class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            name: props.project
                ? props.project.name
                : '',
            imagePath: props.project
                ? props.project.imagePath
                : '',
            type: props.project
                ? props.project.type
                : '',
            error: ''
        };

        this.onTypeChange = this
            .onTypeChange
            .bind(this);
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({name}));
    };

    onPathChange = (e) => {
        const imagePath = e.target.value;
        this.setState(() => ({imagePath}));
    };

    onTypeChange = (e) => {
        const type = e.target.value;
        this.setState(() => ({type}));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name || !this.state.imagePath || !this.state.type) {
            this.setState(() => ({error: 'Please provide name and imagePath'}));
        } else {
            this.setState(() => ({error: ''}));
            this
                .props
                .onSubmit({name: this.state.name, imagePath: this.state.imagePath, type: this.state.type});
        }
    };

    render() {
        return (

                <form className="form" onSubmit={this.onSubmit}>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Name</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control is-expanded has-icons-left">
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Project"
                                        value={this.state.name}
                                        onChange={this.onNameChange}/>
                                    <span className="icon is-small is-left">
                                        <i className="fa fa-eye"></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">ImagePath</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control is-expanded has-icons-left">
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="images/path"
                                        value={this.state.imagePath}
                                        onChange={this.onPathChange}/>
                                    <span className="icon is-small is-left">
                                        <i className="fa fa-code"></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Type</label>
                        </div>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="control">
                                    <div className="select is-fullwidth">
                                        <select value={this.state.type} onChange={this.onTypeChange}>
                                            <option value=""></option>
                                            <option value="EXPOSICIÓN">EXPOSICIÓN</option>
                                            <option value="VENTA">VENTA</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <div className="field is-horizontal">
                        <div className="field-label"></div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control has-text-right">
                                    <button className="button is-primary">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>            
        )
    }
}