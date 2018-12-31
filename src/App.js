import React, { Component } from 'react';
import './App.css';
import TwitHandleInput from  './Components/Inputs/TwitHandleInput';
import AnalysisButton from './Components/Buttons/AnalysisButton';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.twitHandleInput = this.twitHandleInput.bind(this);
    this.twitHandleSearch = this.twitHandleSearch.bind(this);
    this.state = {
      twitHandle: null,
      userProfilePicURL: null,
      userTweetData: []
    };
  };

  // Sets user's Twitter handle to state.
  twitHandleInput(twitterHandle) {
    this.setState({
      twitHandle: twitterHandle
    });
  };

  // Initiates search and retrieval of user's Tweets.
  twitHandleSearch(screenName) {
    const SN = {sn: screenName};
    axios.post(`/api/sn_search`, SN).then( (res) => {
      if(res.data === 'error') {
        console.log('Error: Not a valid Twitter Handle')
      } else {const profPicURL = res.data[0].user.profile_image_url 
        this.modifyProfPicURL(profPicURL);
        this.setState({
          userTweetData: res.data
        })}
    });
  };

  // Modifies the Twitter Profile Pic URL for optimal quality.
  modifyProfPicURL(url) {
    const splitURL = url.split('');
    splitURL.splice(splitURL.length - 11, 11);
    const modifiedURL = splitURL.join('') + '.jpg'
    return this.setState({
      userProfilePicURL: modifiedURL
    });
  };

  render() {
    console.log(this.state.userTweetData)

    // User's profile pic URL
    const picURL = this.state.userProfilePicURL

    // Maps through user's data returning timeline tweets & related media.
    const timeline_tweets = this.state.userTweetData.map( (tweet, i) => {
      if(tweet.entities.media){
        // console.log(tweet.entities.media[0].media_url)
        return (
          <div className='app-tweets' key={tweet.id}>
            <div>{tweet.text}</div>
            <img src={tweet.entities.media[0].media_url} alt='tweet pic' height='40%' width='40%'/>
          </div>
        )
      } 
      return (
        <div className='app-tweets' key={tweet.id}>
          <div>{tweet.text}</div>
        </div>
      )
    });

    return (
      <div className="App">
        <div className='App-title'>Twitter-Insight Machine</div>
        <div>
          <TwitHandleInput inputValue={this.state.input} handleInput={this.twitHandleInput}/>
          <AnalysisButton tweetSearch={this.twitHandleSearch} twitScreenName={this.state.twitHandle}/>
        </div>
        <div className='user-profile-info'>
          <img src={picURL} alt='profile pic' height='80%'/>
        </div>
        { this.state.userTweetData[0] ? <div className='user-twitter-handle-title'>{`${this.state.twitHandle}'s Tweets`}</div> : null}
        {timeline_tweets}
      </div>
    );
  };
};

export default App;