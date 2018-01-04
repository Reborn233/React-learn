import React, {Component} from 'react'
import Todo from '../container/TodoApp'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from '../store/reducers/reducer'

const store = createStore(todoApp)

const TodoApp = ()=>(

    <Provider store={store}>
        <Todo />
    </Provider>
)

export default TodoApp
