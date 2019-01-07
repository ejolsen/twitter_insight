import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {getTwitterTimeline} from '../../redux/reducer';

class TwitterFeed extends Component {
    constructor() {
        super();
        this.state = {};
    };

    render() {
        console.log(this.state)
        console.log(this.props)

        // Maps through a user's data returning timeline tweets & related media.
        const timeline = this.props.userTweetData.map( (tweet, i) => {
          if(tweet.entities.media) {
            return (
                <div className='timeline-tweet' key={tweet.id}>
                    <div className='tweet-text'>{tweet.text}</div>
                    <img className='app-tweets-pics' src={tweet.entities.media[0].media_url} alt='tweet pic'/>
                </div>
            )
          } 
          return (    
            <div className='timeline-tweet'>
                <div className='tweet-text'>{tweet.text}</div>
            </div>
          )
        });

        return (
            <div className='twitter-feed-component'>
                {timeline}
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        userTweetData: state.userTweetData,
    };
};
  
export default connect(mapStateToProps)(TwitterFeed);