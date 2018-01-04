import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Timeline, Layout,} from 'antd'
import {list} from '../lib/data/data'

const getTimeLine = (list) => {
    return list.map((item) => (
        <Timeline.Item key={item.title}>
            <Link to={item.link}>{item.title}</Link>
        </Timeline.Item>
    ))
}


class Home extends Component {
    render() {
        return (
            <Layout style={{padding: 24, height: '100%'}}>
                <h1>日常学习React进度</h1>
                <br/>
                <Timeline>
                    {getTimeLine(list)}
                </Timeline>
            </Layout>
        )
    }
}


export default Home