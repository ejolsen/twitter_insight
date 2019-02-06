import './ProfileMenu.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { insightsCompSwitch, timelineCompSwitch } from '../../redux/reducer';

class ProfileMenu extends Component {
    constructor() {
        super();
        this.switchToAnalysis = this.switchToAnalysis.bind(this);
        this.switchToTimeline = this.switchToTimeline.bind(this);
    };

    switchToTimeline() {
        this.props.timelineCompSwitch();
        console.log(this.props)
    };

    switchToAnalysis() {
        this.props.insightsCompSwitch();
        console.log(this.props)
    };

    render() {
        // const {usersTotalFollowers, usersTotalTweets, numUserIsFollowing, usersLikes} = this.state;

        return (
            <div className='profile-menu'>
              <div className='prof-menu-button-timeline'  onClick={this.switchToTimeline}>
                    Timeline
              </div>
              <div className='prof-menu-button-analysis'  onClick={this.switchToAnalysis}>
                    Analysis
              </div>
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        insightsComponentSwitch: state.insightsComponentSwitch,
        timelineComponentSwitch: state.timelineComponentSwitch,
    };
};
  
export default connect(mapStateToProps, {insightsCompSwitch, timelineCompSwitch})(ProfileMenu);