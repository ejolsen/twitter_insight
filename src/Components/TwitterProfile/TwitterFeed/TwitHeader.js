import './TwitterFeed.css';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import AnalysisButton from '../../Buttons/AnalysisButton';

class TwitHeader extends Component {
    constructor() {
        super();
        this.state = {};
    };

    componentDidMount() {
        // Set guaranteed data to State.
        if(this.props.userTweetData[0]) {
            this.setState({
                usersTotalTweets: this.props.userTweetData[0].user.statuses_count,
                usersTotalFollowers: this.props.userTweetData[0].user.followers_count,
                numUserIsFollowing: this.props.userTweetData[0].user.friends_count,
                usersLikes: this.props.userTweetData[0].user.favourites_count
            })
        } else {
            return null
        }
    };

    render() {
        
        const {usersTotalFollowers, usersTotalTweets, numUserIsFollowing, usersLikes} = this.state;

        return (
            <div className='twitter-header'>
                <div className='twitter-header-inside'>
                    <div>
                        <div>Tweets</div>
                        <div>{usersTotalTweets}</div>
                    </div>
                    <div>
                        <div>Likes</div>
                        <div>{usersLikes}</div>
                    </div>
                    <div>
                        <div>Followers</div>
                        <div>{usersTotalFollowers}</div>
                    </div>
                    <div>
                        <div>Following</div>
                        <div>{numUserIsFollowing}</div>
                    </div>
                    <AnalysisButton/>
                </div>
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        userTweetData: state.userTweetData,
    };
};
  
export default connect(mapStateToProps)(TwitHeader);