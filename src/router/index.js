import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import {Layout, Icon} from 'antd'
/*
* 导入页面
* */
import Home from '../pages/home'
import TodoApp from '../pages/TodoApp'
import Count from '../pages/Counter'
import Asynaction from '../pages/Asynaction'
import RoutePage from '../pages/Router'
import BeanApp from '../pages/Bean'
/*
* 过渡动画
* */
import {CSSTransitionGroup} from 'react-transition-group'

const {Header, Sider, Content} = Layout

const NotFound = ({location}) => (
    <div>
        <h3>No match for <code>{location.pathname}</code></h3>
    </div>
)

class route extends Component {
    state = {
        collapsed: true,
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        return (
            <Router>
                <Layout style={{height: '100%'}}>
                    <Sider
                        style={{backgroundColor: 'inherit', display: this.state.collapsed ? 'block' : 'none'}}
                    >
                        <Home/>
                    </Sider>
                    <Layout>
                        <Header style={{background: 'inherit', padding: 0}}>
                            <Icon
                                style={{cursor: 'pointer', paddingLeft: 15}}
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </Header>
                        <CSSTransitionGroup
                            transitionName="example"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}
                        >
                            <Content style={{margin: '24px 16px', minHeight: 280}}>
                                <Switch>
                                    <Route exact path='/' render={() => <h1>Welcome!</h1>}/>
                                    <Route path='/todoApp' component={TodoApp}/>
                                    <Route path='/count' component={Count}/>
                                    <Route path='/Asynaction' component={Asynaction}/>
                                    <Route path='/router' component={RoutePage}/>
                                    <Route path='/bean/:page' component={BeanApp}/>
                                    <Redirect from='/bean' to='/bean/1' />
                                    <Route component={NotFound}/>
                                </Switch>
                            </Content>
                        </CSSTransitionGroup>
                    </Layout>
                </Layout>
            </Router>
        )
    }
}

export default route
