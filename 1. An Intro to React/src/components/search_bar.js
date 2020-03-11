import React, { Component } from 'react';

export class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div>
                {/* Never use this.state.term = ..., this.setState() calls various functions inside of it for React to handle */}
                <input onChange={event => this.setState({ term: event.target.value })} />
                Value of the input: {this.state.term}
            </div>
        );
    }
}
