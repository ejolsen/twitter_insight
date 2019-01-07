import './App.css';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Header from  './Components/Header/Header';
import AppInfo from './Components/AppInfo/AppInfo';
import TwitterProfile from  './Components/TwitterProfile/TwitterProfile';

class App extends Component {
  constructor() {
    super();
    this.getAnalysis = this.getAnalysis.bind(this);
    this.state = {
      personalityProfile: []
    };
  };

  // Retrieves analysis of Tweets returning Personality Profile.
  getAnalysis() {
    axios.get(`/api/personality_profile`).then( (res) => {
      this.setState({
        personalityProfile: res.data
      })
    });
  };

  render() {

    // Maps through a user's data returning timeline tweets & related media.
    // const timeline_tweets = this.state.userTweetData.map( (tweet, i) => {
    //   if(tweet.entities.media) {
    //     return (
    //       <div className='app-tweets' key={tweet.id}>
    //         <div>{tweet.text}</div>
    //         <img src={tweet.entities.media[0].media_url} alt='tweet pic' height='40%' width='40%'/>
    //       </div>
    //     )
    //   } 
    //   return (
    //     <div className='app-tweets' key={tweet.id}>
    //       <div>{tweet.text}</div>
    //     </div>
    //   )
    // });

    return (
      <div className='App'>
        <Header/>
        <div className='app-body'>
          {this.props.userTweetData[0] ? <TwitterProfile/> : <AppInfo/>}
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

export default connect(mapStateToProps)(App);