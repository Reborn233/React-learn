import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {List} from 'antd'

class Posts extends Component {
    render() {
        const {posts} = this.props
        return (
            <List
                size="small"
                bordered
                dataSource={posts}
                renderItem={item => (<List.Item>
                    <a href={item.url} target='_blank'>{item.title}</a>
                </List.Item>)}
            />
        )
    }
}

Posts.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default Posts