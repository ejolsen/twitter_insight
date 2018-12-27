const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require('dotenv').config();
const twitter_api = require('./controllers/twit_ctrl')
const insight_api = require('./controllers/insight_ctrl')
const {
    SERVER_PORT,
    PERSONALITY_INSIGHTS_USERNAME,
    PERSONALITY_INSIGHTS_PASSWORD,
    PERSONALITY_INSIGHTS_URL
} = process.env


app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`));


// Twitter Endpoints
app.post(`/api/sn_search`, twitter_api.retrieve_user_data);


// IBM Personality Insights Endpoints

// const PersonalityInsightsV3 =require('watson-developer-cloud/personality-insights/v3');
// const pi_config = new PersonalityInsightsV3({
//     username: PERSONALITY_INSIGHTS_USERNAME,
//     password: PERSONALITY_INSIGHTS_PASSWORD,
//     url: PERSONALITY_INSIGHTS_URL
// })