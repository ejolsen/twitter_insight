import React, { Component } from 'react';
import {connect} from 'react-redux';

class InsightsAnalysis extends Component {
    constructor() {
        super();
        this.state = {};
    };

    componentDidMount() {
        console.log(this.state)
        console.log(this.props)
    }

    render() {

        return (
            <div className='personality-insights-comp'>
            Personality Analysis Here
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        personalityProfile: state.personalityProfile
    };
};
  
export default connect(mapStateToProps)(InsightsAnalysis);