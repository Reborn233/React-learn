import { combineReducers } from 'redux'
import { ADD_TODO,DEL_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/todo'
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
        text:'create-react-app 构建web应用',
        completed:true
    },
    {
        text:'学习react-router',
        completed:false
    },
    {
        text:'学习redux',
        completed:false
    }
]

function todos(state = defaultState, action) {
    switch (action.type) {
        case ADD_TODO:
            if(!action.text){
                return state
            }
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case DEL_TODO:
            state.splice(action.index,1)
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