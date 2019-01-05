import axios from 'axios';

const initialState = {
    userTweetData: []
};

const GET_TWIT_TIMELINE = 'GET_TWIT_TIMELINE';

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
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_TWIT_TIMELINE + '_FULFILLED':
            return Object.assign({}, state, {userTweetData: action.payload})
        default: 
        return state;
    }
}