import React, { Component } from 'react';

class AnalysisButton extends Component {
    constructor() {
        super();
        this.initiateAnalysisReq = this.initiateAnalysisReq.bind(this);
    };

    initiateAnalysisReq() {
        this.props.analysisReq()
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