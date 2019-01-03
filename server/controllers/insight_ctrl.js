require('dotenv').config();
const {
    PERSONALITY_INSIGHTS_VERSION_DATE,
    PERSONALITY_INSIGHTS_URL,
    PERSONALITY_INSIGHTS_KEY
} = process.env

let personality_profile = []

module.exports = { 
    // Method analyzes and returns personality profile using IBM's Personality Insights service
    analyze_user_data: (tweets) => {
        let text_data = ''
        for(var i = 0; i < tweets.length; i++) {
            text_data += tweets[i].text
        };
        // console.log(text_data)
        const PersonalityInsightsV3 =require('watson-developer-cloud/personality-insights/v3');
        const personality_insights = new PersonalityInsightsV3({
            version_date: PERSONALITY_INSIGHTS_VERSION_DATE,
            url: PERSONALITY_INSIGHTS_URL,
            iam_apikey: PERSONALITY_INSIGHTS_KEY
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
            personality_profile.splice(0, 1, response)
            console.log(personality_profile)
        })
    },

    get_personality_profile: (req, res) => {
        res.status(200).send(personality_profile);
    },
}