import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import {Affix} from 'antd'

import Home from '../pages/home'
import TodoApp from '../pages/TodoApp'
import Count from '../pages/Counter'

const route = () => (
    <Router>
        <div style={{height:'100%'}}>
            <Route exact path='/' component={Home}/>
            <Route exact path='/todoApp' component={TodoApp}/>
            <Route exact path='/count' component={Count}/>

            <Affix style={{position:'fixed',top:20,right:30}}>
                <a href="#">back</a>
            </Affix>
        </div>
    </Router>
)

export default route
