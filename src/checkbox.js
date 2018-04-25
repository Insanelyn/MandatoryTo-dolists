import React, { Component } from "react";
class checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxState: true
        }
    }
    onSubmit(event) {
        event.preventDefault();
    }
    toggle(event) {
        this.setState({
            checkboxState: !this.state.checkboxState
        });
    }
    render() {
        const checkedOrNot = [];
        checkedOrNot.push(
            <p>{this.state.checkboxState ? 'Unchecked' : 'Checked'}</p>
        );
        const checkbox = (
            <span>
        <input
            type="checkbox"
            onClick={this.toggle.bind(this)}
        />
        <label>Checkbox</label>
      </span>
        );

        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    {checkbox}
                    <button type="submit">Submit</button>
                </form>
                {checkedOrNot}
            </div>
        );
    }
}
