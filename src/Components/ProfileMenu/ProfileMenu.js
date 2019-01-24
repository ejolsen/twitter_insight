import './ProfileMenu.css'
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {insightsCompSwitch, timelineCompSwitch} from '../../redux/reducer';

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


    // componentDidMount() {
    //     // Set guaranteed data to State.
    //     if(this.props.userTweetData[0]) {
    //         console.log(this.props)
    //         this.setState({
    //             usersTotalTweets: this.props.userTweetData[0].user.statuses_count,
    //             usersTotalFollowers: this.props.userTweetData[0].user.followers_count,
    //             numUserIsFollowing: this.props.userTweetData[0].user.friends_count,
    //             usersLikes: this.props.userTweetData[0].user.favourites_count
    //         })
    //     } else {
    //         return null
    //     }
    // };

    // componentDidUpdate(prevProps) {
    //     if (this.props.userTweetData[0] !== prevProps.userTweetData[0]) {
    //         console.log(this.props)
    //         this.setState({
    //             usersTotalTweets: this.props.userTweetData[0].user.statuses_count,
    //             usersTotalFollowers: this.props.userTweetData[0].user.followers_count,
    //             numUserIsFollowing: this.props.userTweetData[0].user.friends_count,
    //             usersLikes: this.props.userTweetData[0].user.favourites_count
    //         })
    //     }
    // };

    render() {
        // const {usersTotalFollowers, usersTotalTweets, numUserIsFollowing, usersLikes} = this.state;

        return (
            <div className='profile-menu'>
              <div className='prof-menu-butt'  onClick={this.switchToTimeline}>
                    Timeline
              </div>
              <div className='prof-menu-butt'  onClick={this.switchToAnalysis}>
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