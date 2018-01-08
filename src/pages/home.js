import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {Timeline, Tag} from 'antd'
import {list} from '../lib/data/data'

const newList = list.sort((x, y) =>
    Date.parse(y.date) - Date.parse(x.date)
)

const getTimeLine = (list) => {
    return list.map((item) => (
        <Timeline.Item key={item.title}>
            <NavLink to={item.link} activeClassName='active'>
                <Tag color="cyan">{item.date}</Tag>
                <br/>
                {item.title}
            </NavLink>
        </Timeline.Item>
    ))
}

class Home extends Component {
    render() {
        return (
            <div style={{padding: 24, height: '100%'}}>
                <h1>日常学习React进度</h1>
                <br/>
                <Timeline>
                    {getTimeLine(newList)}
                </Timeline>
            </div>
        )
    }
}


export default Home