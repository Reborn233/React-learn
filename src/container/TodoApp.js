import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addTodo, completeTodo, delTodo, setVisibilityFilter, VisibilityFilters} from '../store/actions/action'
import AddTodo from '../components/todo/AddTodo'
import TodoList from '../components/todo/TodoList'
import Selecter from '../components/todo/Selecter'

class App extends Component {
    render() {
        const {dispatch, visibleTodos, visibilityFilter} = this.props
        return (
            <div style={{padding:24}}>
                <AddTodo
                    onAddClick={text =>
                        dispatch(addTodo(text))
                    }/>
                <Selecter
                    filter={visibilityFilter}
                    onFilterChange={filter =>
                        dispatch(setVisibilityFilter(filter))
                    }/>
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={index => dispatch(completeTodo(index))}
                    onDelClick={index => dispatch(delTodo((index)))}
                />
            </div>
        )
    }
}

App.propTypes = {
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
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
    }
}

function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
}


export default connect(select)(App)