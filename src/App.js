import './App.css';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from  './Components/Header/Header';
import AppInfo from './Components/AppInfo/AppInfo';
import TwitterProfile from  './Components/TwitterProfile/TwitterProfile';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  };

  render() {
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