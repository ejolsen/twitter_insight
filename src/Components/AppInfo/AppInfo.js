import './AppInfo.css'
import React, { Component } from 'react';

class AppInfo extends Component {
    render() {
        return (
            <div className='app-info'>
                <div className='app-info-description'>
                    Greetings Visitor!
                    Welcome to the Twitter-Insight Machine, an application that allows you to search public Twitter profiles and analyze a user's personality. This application uses the <a className='twitter-api-link' href='https://developer.twitter.com/en/docs.html' target='_blank' rel='noopener noreferrer'>Twitter API</a> in conjunction with IBM's Watson <a className='personality-insights-link' href='https://console.bluemix.net/docs/services/personality-insights/getting-started.html#gettingStarted' target='_blank' rel='noopener noreferrer'>Personality-Insights Service</a> to analyze Tweets and return a profile of the authors personality. Simply enter a user's Twitter Handle in the search bar above to return their profile and timeline, and then click "Analyze" to retrieve their personality analysis! Thanks and Enjoy =]
                </div>
            </div>
        );
    };
};

export default AppInfo 