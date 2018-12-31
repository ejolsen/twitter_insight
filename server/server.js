const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require('dotenv').config();
const twitter_api = require('./controllers/twit_ctrl')

// Server Connection
const { SERVER_PORT } = process.env
app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`));

// Twitter API Endpoints
app.post(`/api/sn_search`, twitter_api.retrieve_user_data);