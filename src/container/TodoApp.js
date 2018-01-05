import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addTodo, completeTodo, delTodo,undo,redo, setVisibilityFilter, VisibilityFilters} from '../store/actions/todo'
import AddTodo from '../components/todo/AddTodo'
import TodoList from '../components/todo/TodoList'
import Selecter from '../components/todo/Selecter'
import history from "../lib/tools/history"

class TodoApp extends Component {
    render() {
        const {dispatch, visibleTodos, visibilityFilter,undoDisabled,redoDisabled} = this.props
        return (
            <div>
                <AddTodo
                    onAddClick={text =>
                        dispatch(addTodo(text))
                    }/>
                <Selecter
                    filter={visibilityFilter}
                    onFilterChange={nextFilter =>dispatch(setVisibilityFilter(nextFilter))}
                    onUndo={() => dispatch(undo())}
                    onRedo={() => dispatch(redo())}
                    undoDisabled={undoDisabled}
                    redoDisabled={redoDisabled}
                />
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={index => dispatch(completeTodo(index))}
                    onDelClick={index => dispatch(delTodo((index)))}
                />
                <a onClick={history.goBack}>back</a>
            </div>
        )
    }
}

TodoApp.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })),
    visibilityFilter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
        default:
            return todos
    }
}

function select(state) {
    const {past, present, future} = state.undoableTodos
    return {
        undoDisabled: past.length === 0,
        redoDisabled: future.length === 0,
        visibleTodos: selectTodos(present, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
}


export default connect(select)(TodoApp)