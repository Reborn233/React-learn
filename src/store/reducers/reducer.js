import { combineReducers } from 'redux'
import { ADD_TODO,DEL_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/action'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

const defaultState = [
    {
        text:'row one',
        completed:false
    },
    {
        text:'row two',
        completed:false
    },
    {
        text:'row three',
        completed:true
    }
]

function todos(state = defaultState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case DEL_TODO:
            let newState = state.splice(action.index,1)
            return Object.assign([],state)
        case COMPLETE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp