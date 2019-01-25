import './TwitterFeed.css';
import React, { Component } from 'react';
import {connect} from 'react-redux';

class TwitterFeed extends Component {
    constructor() {
        super();
        this.state = {};
    };

    render() {
        // Maps through a user's data returning timeline tweets & related media.
        const timeline = this.props.userTweetData.map( (tweet, i) => {
            if(tweet.extended_entities) {
                if(tweet.extended_entities.media[0]) {
                    if(tweet.extended_entities.media[0].video_info) {
                        if(tweet.extended_entities.media[0].video_info.variants) {
                            if (tweet.extended_entities.media[0].video_info.variants[0].url) {
                                return (
                                    <div className='timeline-tweet' key={tweet.id}>
                                        <div className='tweet-text'>{tweet.text}</div>
                    
                                        {/* <video>
                                            <source src={tweet.extended_entities.media[0].video_info.variants[0].url} type="video/mp4"/>
                                        </video> */}

                                        <video className='app-tweets-media' controls loop>
                                        <source src={tweet.extended_entities.media[0].video_info.variants[0].url} type="video/mp4"/>
                                        Your browser does not support the video tag.
                                        </video>

                                        {/* <iframe src={tweet.extended_entities.media[0].video_info.variants[0].url}></iframe> */}
                    
                    
                                        {/* <img className='app-tweets-pics' src={tweet.entities.media[0].media_url} alt='tweet pic'/> */}
                                    </div>
                                )
                            }
                        }
                    }
                }
            } else {
              return (    
                  <div className='timeline-tweet' key={tweet.id}>
                      <div className='tweet-text'>{tweet.text}</div>
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