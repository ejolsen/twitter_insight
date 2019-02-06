import './TwitterProfile.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CalendarIcon from '../../Images/iconfinder_icon-calendar_211633.png';
import LocationIcon from '../../Images/iconfinder_94_171453 (1).png';
import LinkIcon from '../../Images/iconfinder_link5_216660.png';

class TwitterProfile extends Component {
    constructor() {
        super();
        this.state = {
            userProfilePicURL: null,
            profileName: null,
            twitterHandle: null,
            membershipDate: null,
            description: null,
            location: null,
            urlDescription: null,
            urlLink: null,
            usersTotalFollowers: null,
            numUserIsFollowing: null
        };
    };

    componentDidMount() {
        // Set guaranteed data to State.
        if(this.props.userTweetData[0]) {
            let profPicURL = this.props.userTweetData[0].user.profile_image_url
            let membershipDate = this.props.userTweetData[0].user.created_at
            this.modifyProfPicURL(profPicURL)
            this.formatMembershipDate(membershipDate)
            this.setState({
                profileName: this.props.userTweetData[0].user.name,
                twitterHandle: this.props.userTweetData[0].user.screen_name,
                usersTotalFollowers: this.props.userTweetData[0].user.followers_count,
                numUserIsFollowing: this.props.userTweetData[0].user.friends_count
            })
        } else {
            return null
        }

        // Set contingent data to State.
        if(this.props.userTweetData[0].user.entities.url) {
            this.setState({
                urlDescription: this.props.userTweetData[0].user.entities.url.urls[0].display_url,
                urlLink: this.props.userTweetData[0].user.url
            })
        }
        if(this.props.userTweetData[0].user.description) {
            this.setState({
                description: this.props.userTweetData[0].user.description,
            })
        }
        if(this.props.userTweetData[0].user.location) {
            this.setState({
                location: this.props.userTweetData[0].user.location,
            })
        }
    };

    componentDidUpdate(prevProps) {
        if (this.props.userTweetData[0] !== prevProps.userTweetData[0]) {
            // Set guaranteed data to State.
            let profPicURL = this.props.userTweetData[0].user.profile_image_url
            let membershipDate = this.props.userTweetData[0].user.created_at
            this.formatMembershipDate(membershipDate)
            this.modifyProfPicURL(profPicURL)
            this.setState({
                profileName: this.props.userTweetData[0].user.name,
                twitterHandle: this.props.userTweetData[0].user.screen_name,
                usersTotalFollowers: this.props.userTweetData[0].user.followers_count,
                numUserIsFollowing: this.props.userTweetData[0].user.friends_count
            })

            // Set contingent data to State.
            if(this.props.userTweetData[0].user.entities.url) {
                this.setState({
                    urlDescription: this.props.userTweetData[0].user.entities.url.urls[0].display_url,
                })
            }
            if(this.props.userTweetData[0].user.description) {
                this.setState({
                    description: this.props.userTweetData[0].user.description,
                })
            }
            if(this.props.userTweetData[0].user.location) {
                this.setState({
                    location: this.props.userTweetData[0].user.location,
                })
            }
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

    // Formats Twitter user's membership date to MMM/DD/YYYY.
    formatMembershipDate(date) {
        let splitDate = date.split('')
        let spliceDateElements = splitDate.splice(0, 4)
        let spliceElementsAgain = splitDate.splice(7, 15)
        let formattedMemberDate = splitDate.join('')
        return this.setState({
            membershipDate: formattedMemberDate
        })
    }

    render() {
        console.log(this.state)
        let {profileName, twitterHandle, membershipDate, urlDescription, description, location, urlLink} = this.state;
        
        return (
            <div className='twitter-profile-component'>
                <img className='twit-prof-comp-pic' src={this.state.userProfilePicURL} alt='profile pic'/> 
                <div className='twit-prof-comp-info'>
                    <div className='twit-prof-names'>
                        <div id='profile-name'>{profileName}</div>
                        <div id='profile-screen-name'>@{twitterHandle}</div>
                    </div>
                    <div className='twit-prof-desc'>{description}</div>
                    <div className='twit-prof-etc'>
                        <div className='twit-prof-etc-div'>
                            <img src={LocationIcon} alt='location_icon'/>
                            <div className='twit-prof-etc-txt'>{location}</div>
                        </div>
                        <div className='twit-prof-etc-div'>
                            <img src={LinkIcon} alt='link_icon'/>
                            <a href={urlLink} target='_blank' rel="noopener noreferrer"><div id='twit-prof-etc-url'>{urlDescription}</div></a>
                        </div>
                        <div className='twit-prof-etc-div'>
                            <img src={CalendarIcon} alt='calendar_icon'/>
                            <div className='twit-prof-etc-txt'>Joined {membershipDate}</div> 
                        </div>
                    </div>
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