import React, { Component } from 'react';
import TwitHandleInput from  '../Inputs/TwitHandleInput';
import TweetsButton from '../Buttons/TweetsButton';
import {connect} from 'react-redux';
import {getTwitterTimeline} from '../../redux/reducer'

class Header extends Component {
    constructor() {
        super();
        this.twitHandleInput = this.twitHandleInput.bind(this);
        this.state = {
            twitHandle: null
        };
    };

    // Sets Twitter handle to state.
    twitHandleInput(twitterHandle) {
        this.setState({
            twitHandle: twitterHandle
        });
    };

    render() {
        // console.log(this.state)
        // console.log(this.props)
        return (
            <div className='header'>
                <div className='header-title'>Twitter-Insight Machine</div>
                <div className='header-search'>
                    <TwitHandleInput inputValue={this.state.input} handleInput={this.twitHandleInput}/>
                    <TweetsButton twitSearch={this.props.getTwitterTimeline} twitterHandle={this.state.twitHandle}/>
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
  
export default connect(mapStateToProps, {getTwitterTimeline})(Header);