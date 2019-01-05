import React, { Component } from 'react';

class TweetsButton extends Component {
    constructor() {
        super();
        this.initiateTwitSearch = this.initiateTwitSearch.bind(this);
    };

    initiateTwitSearch() {
        const th = this.props.twitterHandle
        this.props.twitSearch(th)
    };

    render() {
        return (
            <button 
                className='TweetsButton' 
                onClick={this.initiateTwitSearch}
            >
                Search
            </button>
        );
    };
};

export default TweetsButton 