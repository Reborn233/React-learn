import {combineReducers} from 'redux'
import {ADD_TODO, DEL_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, REDO, UNDO, VisibilityFilters} from '../actions/todo'

const {SHOW_ALL} = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

const defaultState = {
    past: [],
    present: [
        {
            text: 'create-react-app 构建web应用',
            completed: true
        },
        {
            text: '学习react-router',
            completed: false
        },
        {
            text: '学习redux',
            completed: false
        }
    ],
    future: []
}

function todos(state = defaultState, action) {
    switch (action.type) {
        case ADD_TODO:
            if (!action.text) {
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
            state.splice(action.index, 1)
            return Object.assign([], state)
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

function undoable(reducer) {

    return function (state = defaultState, action) {
        const {past, present, future} = state
        switch (action.type) {
            case UNDO:
                const previous = past[past.length - 1]
                const newPast = past.slice(0, past.length - 1)
                return {
                    past: newPast,
                    present: previous,
                    future: [present, ...future]
                }
            case REDO:
                const next = future[0]
                const newFuture = future.slice(1)
                return {
                    past: [...past, present],
                    present: next,
                    future: newFuture
                }
            default:
                const newPresent = reducer(present, action)
                if (present === newPresent) {
                    return state
                }
                return {
                    past: [...past, present],
                    present: newPresent,
                    future: []
                }
        }
    }
}

const undoableTodos = undoable(todos)

const todoApp = combineReducers({
    visibilityFilter,
    // todos,
    undoableTodos,
})

export default todoApp