import {combineReducers} from 'redux'
import {INCREASE, DECREASE} from '../actions/counter'


const defaultState = {
    count: 0
}

function counts(state = defaultState, action) {
    let count = state.count
    switch (action.type) {
        case INCREASE:
            return {count: count + action.num}
        case DECREASE:
            return {count: count <= 0 ? count : count - action.num}
        default:
            return {count: count}
    }
}

const countApp = combineReducers({
    counts
})

export default countApp