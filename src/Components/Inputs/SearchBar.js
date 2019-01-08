import './Inputs.css';
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
                className='twitter-search-bar' 
                placeholder='@ Enter Twitter Handle' 
                value={this.props.inputValue} 
                onChange={this.handleLocalInputChange}
            />
        );
    };
};

export default SearchBar 