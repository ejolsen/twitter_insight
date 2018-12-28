require('dotenv').config();
const twitter = require('twitter');
const {
    TWITTER_CONSUMER_KEY,
    TWITTER_SECRET_CONSUMER_KEY,
    TWITTER_ACCESS_TOKEN,
    TWITTER_SECRET_ACCESS_TOKEN,
} = process.env

module.exports = {
    retrieve_user_data: (req, res, next) => {
        const twitter_config = {
            consumer_key: TWITTER_CONSUMER_KEY,
            consumer_secret: TWITTER_SECRET_CONSUMER_KEY,
            access_token_key: TWITTER_ACCESS_TOKEN,
            access_token_secret: TWITTER_SECRET_ACCESS_TOKEN,
        }
        const twit = new twitter(twitter_config);
        const screen_name = req.body.sn
        twit.get(`statuses/user_timeline.json?count=100`, {screen_name: screen_name}, function(error, tweets, response) {
            if (error) {
                console.log(error);
                res.send('error')
            } else {
                res.status(200).send(tweets);
            }
        })
    }
}