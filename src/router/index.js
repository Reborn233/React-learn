import React from 'react'
import {
    HashRouter as Router,
    Route,
} from 'react-router-dom'

import TodoApp from '../pages/TodoApp'


const route = () => (
    <Router>
        <div>
            <Route exact path='/' component={TodoApp}></Route>
        </div>
    </Router>
)

export default route
