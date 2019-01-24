import React, { Component } from 'react';
import SearchIcon from '../../Images//iconfinder_search_2639914.png'

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
            <img 
                src={SearchIcon}
                className='TweetsButton' 
                alt='search_icon'
                onClick={this.initiateTwitSearch}
            />
               
        );
    };
};

export default TweetsButton 