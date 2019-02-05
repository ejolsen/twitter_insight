import './TwitterFeed.css';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {has} from 'lodash';
import moment from 'moment'

class TwitterFeed extends Component {
    constructor() {
        super();
        this.state = {};
    };

    render() {

        // var tweetTime = moment('Wed May 28 05:51:51 +0000 2014', 'dd MMM DD HH:mm:ss ZZ YYYY', 'en');
        // console.log(tweetTime)
        // Maps through a user's data returning timeline tweets & related media.
        const timeline = this.props.userTweetData.map( (tweet, i) => {
            return (    
                <div className='timeline-tweet' key={tweet.id}>


                    <div className='timeline-tweet-info'>
                        <div>{tweet.user.name}</div>
                        <div>@{tweet.user.screen_name}</div>
                        <div>{tweet.created_at}</div>
                    </div>
                    

                    <div className='tweet-text'>{tweet.text}</div>

                    {
                        has(tweet, 'extended_entities.media[0].video_info.variants[0].url') 
                        ? 
                        <video className='app-tweets-media' controls loop>
                            <source src={tweet.extended_entities.media[0].video_info.variants[0].url} type="video/mp4"/>
                        </video> 
                        : 
                        has(tweet, 'entities.media[0].media_url') 
                        ? 
                        <img className='app-tweets-pics' src={tweet.entities.media[0].media_url} alt='tweet pic'/> 
                        : 
                        null
                    }
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