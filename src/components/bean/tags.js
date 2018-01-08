import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Tag} from 'antd'

const CheckableTag = Tag.CheckableTag

class Posts extends Component {
    render() {
        const {tags, selectedSubreddit, onChange} = this.props
        return (
            <div style={{maxWidth:550}}>
                所选&nbsp;<Tag>{selectedSubreddit}</Tag>
                <br/><br/>
                全部类型&nbsp;{tags.map(tag => (
                    <CheckableTag
                        key={tag}
                        checked={[selectedSubreddit].indexOf(tag) > -1}
                        onChange={checked => onChange(tag)}
                    >
                        {tag}
                    </CheckableTag>
                ))}
            </div>
        )
    }
}

Posts.propTypes = {
    tags: PropTypes.array.isRequired,
    selectedSubreddit:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
}

export default Posts