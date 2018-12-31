const express = require('express');
require('dotenv').config();

module.exports = { 
    analyze_user_data: (tweets) => {
        let text_data = ''
        for(var i = 0; i < tweets.length; i++){
            text_data += tweets[i].text
        };
        console.log(text_data)
        const PersonalityInsightsV3 =require('watson-developer-cloud/personality-insights/v3');
        const personality_insights = new PersonalityInsightsV3({
            version_date: process.env.PERSONALITY_INSIGHTS_VERSION_DATE,
            url: process.env.PERSONALITY_INSIGHTS_USERNAME,
            iam_apikey: process.env.PERSONALITY_INSIGHTS_PASSWORD
        });
        let params = {
            content: text_data,
            content_type: 'text/plain',
            raw_scores: true,
            consumption_preferences: true
        };
        personality_insights.profile(params, function (error, response) {
            if (error)
            console.log('Error:', error);
            else
            console.log(response.consumption_preferences[0].consumption_preferences);
        });
    }
}