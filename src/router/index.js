import React from 'react'
import {
    HashRouter as Router,
    Route,
} from 'react-router-dom'
import {Layout} from 'antd'

import Home from '../pages/home'
import TodoApp from '../pages/TodoApp'
import Count from '../pages/Counter'
import Asynaction from '../pages/Asynaction'
import RoutePage from '../pages/Router'
import BeanApp from '../pages/Bean'

const {Content,Sider} = Layout

const route = () => (
    <Router>
        <Layout style={{height:'100%'}}>
            <Sider style={{width:200}}>
                <Home/>
            </Sider>
            <Content style={{padding:24}}>
                <Route path='/todoApp' component={TodoApp}/>
                <Route path='/count' component={Count}/>
                <Route path='/Asynaction' component={Asynaction}/>
                <Route path='/router' component={RoutePage}/>
                <Route path='/bean' component={BeanApp}/>
            </Content>
        </Layout>
    </Router>
)

export default route
