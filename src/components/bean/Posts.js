import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Card, Col, Row} from 'antd'

const {Meta} = Card

class Posts extends Component {
    render() {
        const {posts} = this.props
        return (
            <Row>
                {
                    posts.map(post => (
                        <Col xs={5} key={post.id} style={{marginTop: 10,marginRight:10}}>
                            <Card
                                hoverable
                                cover={<img alt='' height={300} src={post.images.small}/>}
                            >
                                <a href={post.alt} target='_blank'>
                                    <Meta
                                        title={post.title}
                                        description={post.alt}
                                    />
                                </a>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        )
    }
}

Posts.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default Posts