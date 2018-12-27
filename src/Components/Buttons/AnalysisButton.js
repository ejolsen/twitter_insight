import React, { Component } from 'react';

class AnalysisButton extends Component {
    constructor() {
        super();
        this.initiateTweetSearch = this.initiateTweetSearch.bind(this);
    };

    initiateTweetSearch() {
        const sn = this.props.twitScreenName
        this.props.tweetSearch(sn)
    };

    render() {
        return (
            <button 
                className='AnalysisButton' 
                onClick={this.initiateTweetSearch}
            >
                Get Tweets
            </button>
        );
    };
};

export default AnalysisButton 