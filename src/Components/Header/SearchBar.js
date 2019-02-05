import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.handleLocalInputChange = this.handleLocalInputChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    };

    handleLocalInputChange(e) {
        this.props.handleInput(e.target.value)
    };

    handleKeyPress(event) {
        if(event.key === 'Enter'){
            this.props.twitSearch(this.props.twitterHandle)
        }
    };

    render() {
        console.log(this.props)
        return (
            <input 
                type='text' 
                className='twitter-search-bar' 
                placeholder='Enter Twitter Handle' 
                value={this.props.inputValue} 
                onChange={this.handleLocalInputChange}
                onKeyPress={this.handleKeyPress}
            />
        );
    };
};

export default SearchBar 