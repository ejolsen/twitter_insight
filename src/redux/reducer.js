import axios from 'axios';

const initialState = {
    userTweetData: [],
    personalityProfile: []
};

const GET_TWIT_TIMELINE = 'GET_TWIT_TIMELINE';
const GET_PERSONALITY_PROFILE = 'GET_PERSONALITY_PROFILE';

export function getTwitterTimeline(twitter_handle) {
    const SN = {sn: twitter_handle};
    let twitterTimelineData = axios.post(`/api/sn_search`, SN).then( (res) => {
        if(res.data === 'error') {
        console.log('Error: Not a valid Twitter Handle')
        } else {
            return res.data
        }
    })
    return {
        type: GET_TWIT_TIMELINE,
        payload: twitterTimelineData
    }
};

export function getAnalysis() {
    let insights_profile = axios.get(`/api/personality_profile`).then( (res) => {
        return res.data
    })
    return {
        type: GET_PERSONALITY_PROFILE,
        payload: insights_profile
    }
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_TWIT_TIMELINE + '_FULFILLED':
            return Object.assign({}, state, {userTweetData: action.payload})
        case GET_PERSONALITY_PROFILE + '_FULFILLED':
            return Object.assign({}, state, {personalityProfile: action.payload})
        default: 
        return state;
    }
};