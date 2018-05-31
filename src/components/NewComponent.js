import React from 'react';

export default class NewComponent extends React.Component {
    updateState(event) {
        this.setState({
            input: event.target.value
        });
    }

    render () {
        return <div><input 
        onChange = {this.updateState.bind(this)}
        type="text" /></div>;
    }
}