import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getAnalysis} from '../../redux/reducer';

class InsightsAnalysis extends Component {
    constructor() {
        super();
        this.state = {};
        this.getAnalysis = this.getAnalysis.bind(this);
    };

    componentDidUpdate() {
        console.log(this.props)
    };

    getAnalysis() {
        this.props.getAnalysis()
    }

    render() {

        return (
            <div className='personality-insights-comp'>
            Personality Analysis Here
            <button onClick={this.getAnalysis}>Get Analysis</button>
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        personalityProfile: state.personalityProfile
    };
};
  
export default connect(mapStateToProps, {getAnalysis})(InsightsAnalysis);