import { combineReducers } from 'redux'
import {
    SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT,
    REQUEST_POSTS, RECEIVE_POSTS
} from '../actions/asynaction'

const defaultState = 'reactjs'
const defaultPostState = {
    isFetching: false,
    didInvalidate: false,
    items: []
}

function selectedSubreddit(state = defaultState, action) {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit
        default:
            return state
    }
}

function posts(state = defaultPostState, action) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            })
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

function postsBySubreddit(state = {}, action) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                [action.subreddit]: posts(state[action.subreddit], action)
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    postsBySubreddit,
    selectedSubreddit
})

export default rootReducer