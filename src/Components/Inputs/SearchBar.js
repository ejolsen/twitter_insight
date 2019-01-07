import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.handleLocalInputChange = this.handleLocalInputChange.bind(this);
    };

    handleLocalInputChange(e) {
        this.props.handleInput(e.target.value)
    };

    render() {
        return (
            <input 
                type='text' 
                className='TwitInput-main' 
                placeholder='@ Enter Twitter Handle' 
                value={this.props.inputValue} 
                onChange={this.handleLocalInputChange}
            />
        );
    };
};

export default SearchBar 