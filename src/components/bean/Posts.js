import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Card, Col, Row, Spin, Pagination} from 'antd'

const {Meta} = Card

class Posts extends Component {
    render() {
        const {posts, isFetching, onChange, total, start} = this.props
        return (

            <Row>
                <Spin
                    size='large'
                    spinning={isFetching}
                    delay={500}
                    style={{marginTop: 30}}
                    tip='拼命加载中...'
                >
                    {
                        posts.map(post => (
                            <Col xs={24} sm={12} md={6} key={post.id} style={{marginTop: 10, paddingRight: 10}}>
                                <Card
                                    hoverable
                                    cover={<img alt='' height={300} src={post.images.small}/>}
                                >
                                    <a href={post.alt} target='_blank'>
                                        <Meta
                                            title={
                                                <h4>{post.title}
                                                    &nbsp;&nbsp;&nbsp;<span
                                                        style={{color: '#ffac2d'}}>{post.rating.average}</span>
                                                </h4>
                                            }
                                            description={post.year}
                                        >
                                        </Meta>
                                    </a>
                                </Card>
                            </Col>
                        ))
                    }
                </Spin>
                <br/>
                {
                    posts.length > 0 &&
                    <Pagination showQuickJumper defaultCurrent={start / 20 + 1} total={total} onChange={onChange}/>
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