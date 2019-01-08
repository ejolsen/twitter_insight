import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getAnalysis} from '../../redux/reducer';

class InsightsAnalysis extends Component {
    constructor() {
        super();
        this.state = {};
    };

    componentDidMount() {
        this.props.getAnalysis();
    }

    render() {
        // console.log(this.state)
        // console.log(this.props)

        return (
            <div className='personality-insights-comp'>
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        userTweetData: state.userTweetData,
    };
};
  
export default connect(mapStateToProps, {getAnalysis})(InsightsAnalysis);