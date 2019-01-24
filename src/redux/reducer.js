import axios from 'axios';

const initialState = {
    userTweetData: [],
    personalityProfile: [],
    insightsComponentSwitch: false,
    timelineComponentSwitch: true,
};

const GET_TWIT_TIMELINE = 'GET_TWIT_TIMELINE';
const GET_PERSONALITY_PROFILE = 'GET_PERSONALITY_PROFILE';
const SWITCH_INSIGHT_VIEW_ON = 'SWITCH_INSIGHT_VIEW_ON'
const SWITCH_TIMELINE_VIEW_ON = 'SWITCH_TIMELINE_VIEW_ON'

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

export function insightsCompSwitch() {
    return {
        type: SWITCH_INSIGHT_VIEW_ON,
    }
};

export function timelineCompSwitch() {
    return {
        type: SWITCH_TIMELINE_VIEW_ON,
    }
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_TWIT_TIMELINE + '_FULFILLED':
            return Object.assign({}, state, {userTweetData: action.payload})
        case GET_PERSONALITY_PROFILE + '_FULFILLED':
            return Object.assign({}, state, {personalityProfile: action.payload})
        case SWITCH_INSIGHT_VIEW_ON:
            return Object.assign({}, state, {insightsComponentSwitch: true, timelineComponentSwitch: false})
        case SWITCH_TIMELINE_VIEW_ON:
            return Object.assign({}, state, {insightsComponentSwitch: false, timelineComponentSwitch: true})
        default: 
        return state;
    }
};