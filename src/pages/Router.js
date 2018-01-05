import React, {Component} from 'react'
import {
    Route,
    NavLink,
} from 'react-router-dom'

const Topic = ({match}) => (
    <div>
        <h3>
            参数:
            {' '}
            {match.params.topicId}
        </h3>
    </div>
)


class RoutePage extends Component {
    render() {
        const {match} = this.props
        return (
            <div>
                <h2>主题列表</h2>
                <ul>
                    <li>
                        <NavLink to={`${match.url}/rendering`}>
                            使用 React 渲染
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${match.url}/components`}>
                            组件
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${match.url}/props-v-state`}>
                            属性 v. 状态
                        </NavLink>
                    </li>
                </ul>

                <Route path={`${match.url}/:topicId`} component={Topic}/>
                <Route exact path={match.url} render={() => (
                    <h3>请选择一个主题。</h3>
                )}/>
            </div>
        )
    }
}


export default RoutePage