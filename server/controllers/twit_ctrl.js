require('dotenv').config();
const twitter = require('twitter');
const insight_api = require('./insight_ctrl')
const {
    TWITTER_CONSUMER_KEY,
    TWITTER_SECRET_CONSUMER_KEY,
    TWITTER_ACCESS_TOKEN,
    TWITTER_SECRET_ACCESS_TOKEN,
} = process.env

module.exports = {
    // Method retrieves tweets & data from Twitter API
    retrieve_user_data: (req, res, next) => {
        const twitter_config = {
            consumer_key: TWITTER_CONSUMER_KEY,
            consumer_secret: TWITTER_SECRET_CONSUMER_KEY,
            access_token_key: TWITTER_ACCESS_TOKEN,
            access_token_secret: TWITTER_SECRET_ACCESS_TOKEN,
        };
        const twit = new twitter(twitter_config);
        const screen_name = req.body.sn
        twit.get(`statuses/user_timeline.json?count=100`, {screen_name: screen_name, tweet_mode: 'extended'}, function(error, tweets) {
            if (error) {
                console.log(error);
                res.send('error')
            } else {
                // insight_api.analyze_user_data(tweets);
                res.status(200).send(tweets);
            }
        });
    }
}