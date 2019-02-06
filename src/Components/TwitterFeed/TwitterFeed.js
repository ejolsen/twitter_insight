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
        console.log(this.props.userTweetData)
        // Maps through a user's data returning timeline tweets & related data/media.
        const timeline = this.props.userTweetData.map( (tweet, i) => {

            // Twitter date formatting solution
            let tweetDate = tweet.created_at.split('')
            let spliceDateElements = tweetDate.splice(0, 4)
            let spliceElementsAgain = tweetDate.splice(7, 15)
            let formattedTweetDate = tweetDate.join('')
            let finalFormattedTweetDate = moment(formattedTweetDate, "MMM-DD-YYYY").format("MM/DD/YYYY")

            if(tweet.retweet_status) {
                return (    
                    <div className='timeline-tweet' key={tweet.id}>
                    <div className='timeline-tweet-pic-section'>
                        <img className='timeline-tweet-pic' src={tweet.retweeted_status.user.profile_image_url}/>
                    </div>
                    <div className='timeline-tweet-tweet-section'>
                        <div className='timeline-tweet-info'>
                            <div  className='timeline-tweet-info-name'>{tweet.retweeted_status.user.name}</div>
                            <div  className='timeline-tweet-info-scr-name'>@{tweet.retweeted_status.user.screen_name}</div>
                            <div  className='timeline-tweet-info-date'>{finalFormattedTweetDate}</div>
                        </div>
                        
                        <div className='tweet-text'>{tweet.text}</div>

                        {
                            has(tweet, 'extended_entities.media[0].video_info.variants[0].url') 
                            ? 
                            <video className='app-tweets-media' controls loop>
                                <source src={tweet.retweeted_status.extended_entities.media[0].video_info.variants[0].url} type="video/mp4"/>
                            </video> 
                            : 
                            has(tweet, 'entities.media[0].media_url') 
                            ? 
                            <img className='app-tweets-pics' src={tweet.retweeted_status.entities.media[0].media_url} alt='tweet pic'/> 
                            : 
                            null
                        }
                    </div>
                </div>
                )
            } 
            else {
                return (
                    <div className='timeline-tweet' key={tweet.id}>
                        <div className='timeline-tweet-pic-section'>
                            <img className='timeline-tweet-pic' src={this.props.userTweetData[0].user.profile_image_url}/>
                        </div>
                        <div className='timeline-tweet-tweet-section'>
                            <div className='timeline-tweet-info'>
                                <div  className='timeline-tweet-info-name'>{tweet.user.name}</div>
                                <div  className='timeline-tweet-info-scr-name'>@{tweet.user.screen_name}</div>
                                <div  className='timeline-tweet-info-date'>{finalFormattedTweetDate}</div>
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
                    </div>
                )
            }
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