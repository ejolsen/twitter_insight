import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {getTwitterTimeline} from '../../redux/reducer'

class TwitterProfile extends Component {
    constructor() {
        super();
        this.state = {
            userProfilePicURL: null
        };
    };

    componentDidMount() {
        if(this.props.userTweetData[0]) {
            console.log('reading props')
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
        console.log(this.state)
        console.log(this.props)
        const profile_name = this.props.userTweetData[0].user.name
        
        return (
            <div className='twitter-profile-component'>
                <img src={this.state.userProfilePicURL} alt='profile pic' height='100%'/>
                <div>{profile_name}</div>
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