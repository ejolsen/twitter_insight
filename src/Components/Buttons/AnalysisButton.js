import React, { Component } from 'react';
import axios from 'axios';

class AnalysisButton extends Component {
    constructor() {
        super();
        this.initiateAnalysisReq = this.initiateAnalysisReq.bind(this);
    };

    initiateAnalysisReq() {
       axios.get('/api/personality_profile').then( (res) => {
           console.log(res.data)
       })
    };

    render() {
        return (
            <button 
                className='AnalysisButton' 
                onClick={this.initiateAnalysisReq}
            >
                Get Analysis
            </button>
        );
    };
};

export default AnalysisButton 