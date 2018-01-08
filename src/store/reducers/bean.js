import {combineReducers} from 'redux'
import {
    SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT,
    REQUEST_POSTS, RECEIVE_POSTS, TAGS
} from '../actions/bean'

const defaultTags = ['剧情', '爱情', '喜剧', '科幻', '动作', '悬疑', '犯罪', '恐怖', '青春', '励志', '战争', '文艺', '黑色幽默', '传记', '情色', '暴力', '音乐', '家庭']
const defaultState = '剧情'
const defaultPostState = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    total: 0,
    start: 0,
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
                total: action.total,
                start: action.start,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

function tags(state = defaultTags, action) {
    switch (action.type) {
        case TAGS:
            return state
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
    selectedSubreddit,
    tags,
})

export default rootReducer