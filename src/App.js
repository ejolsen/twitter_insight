import './App.css';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from  './Components/Header/Header';
import AppInfo from './Components/AppInfo/AppInfo';
import TwitterProfile from  './Components/TwitterProfile/TwitterProfile';
import TwitterFeed from './Components/TwitterFeed/TwitterFeed';
import ProfileMenu from './Components/ProfileMenu/ProfileMenu';
import InsightsAnalysis from './Components/InsightsAnalysis/InsightsAnalysis';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  };

  render() {
    return (
      <div className='App'>
        <Header/>
        {this.props.userTweetData[0] ? 
          <div><TwitterProfile/> <ProfileMenu/>  {this.props.insightsComponentSwitch ? <InsightsAnalysis/> : <TwitterFeed/>}</div> : <AppInfo/>
        }
        {/* <ProfileMenu/> 
        {this.props.userTweetData[0] ? 
          <TwitterFeed/> : null
        } */}
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
      userTweetData: state.userTweetData,
      insightsComponentSwitch: state.insightsComponentSwitch
  };
};

export default connect(mapStateToProps)(App);