import React, { Component } from 'react';
import {connect} from 'react-redux';
import AnalysisButton from '..//Buttons/AnalysisButton';
import TwitterFeed from './TwitterFeed/TwitterFeed';
// import {getTwitterTimeline} from '../../redux/reducer';

class TwitterProfile extends Component {
    constructor() {
        super();
        this.state = {
            userProfilePicURL: null
        };
    };

    componentDidMount() {
        if(this.props.userTweetData[0]) {
            let profPicURL = this.props.userTweetData[0].user.profile_image_url
            this.modifyProfPicURL(profPicURL)
        } else {
            return null
        }
    };

    componentDidUpdate(prevProps) {
        if (this.props.userTweetData[0] !== prevProps.userTweetData[0]) {
            let profPicURL = this.props.userTweetData[0].user.profile_image_url
            this.modifyProfPicURL(profPicURL)
        }
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
        // console.log(this.state)
        // console.log(this.props)
            {/* <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602"/></svg> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg> */}
        const profile_name = this.props.userTweetData[0].user.name
        const twitter_handle = this.props.userTweetData[0].user.screen_name
        const description = this.props.userTweetData[0].user.description
        const location = this.props.userTweetData[0].user.location
        const url_description = this.props.userTweetData[0].user.entities.url.urls[0].display_url
        const joined_date = this.props.userTweetData[0].user.created_at
        
        
        return (
            <div className='twitter-profile-component'>
                <div className='twit-prof-comp-left'>
                    <img className='twit-prof-comp-pic' src={this.state.userProfilePicURL} alt='profile pic'/>
                    <div className='twit-prof-comp-info'>
                        <div>
                            <div>{profile_name}</div>
                            <div>{twitter_handle}</div>
                        </div>
                        <div>{description}</div>
                        <div>
                            <div>{location}</div>
                            <div>{url_description}</div>
                            <div>Joined {joined_date}</div>
                        </div>
                    </div>
                
                </div>
                <div className='twit-prof-comp-right'>
                    <TwitterFeed/>
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
  
export default connect(mapStateToProps)(TwitterProfile);