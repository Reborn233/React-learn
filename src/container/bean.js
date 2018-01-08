import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit} from '../store/actions/bean'
import history from "../lib/tools/history"
import Tags from '../components/bean/tags'
import Posts from '../components/bean/Posts'

class Bean extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
        this.pageClick = this.pageClick.bind(this)
    }

    componentDidMount() {
        const {dispatch, selectedSubreddit,match} = this.props
        const page = (Number(match.params.page)-1)*20
        dispatch(fetchPostsIfNeeded(selectedSubreddit,page))
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
            const {dispatch, selectedSubreddit,match} = nextProps
            const page = (Number(match.params.page)-1)*20
            dispatch(fetchPostsIfNeeded(selectedSubreddit,page))
        }
    }

    render() {
        const {selectedSubreddit, posts, isFetching, lastUpdated, tags, start, total} = this.props
        return (
            <div>
                <Tags
                    tags={tags}
                    selectedSubreddit={selectedSubreddit}
                    onChange={(e) => this.handleChange(e)}
                />
                <p>
                    <br/>
                    {lastUpdated &&
                    <span>Last updated at {new Date(lastUpdated).toLocaleTimeString()}.</span>
                    }
                    {' '}
                    {!isFetching &&
                    <a
                        onClick={this.handleRefreshClick}>
                        Refresh
                    </a>
                    }
                </p>
                {!isFetching && posts.length === 0 &&
                <h2>Empty.</h2>
                }
                <div style={{marginTop: 15}}>
                    <Posts posts={posts} isFetching={isFetching}
                           total={total}
                           start={start}
                           onChange={(e) => this.pageClick(e)}/>
                </div>
                <br/>
                <a onClick={history.goBack}>back</a>
            </div>
        )
    }

    pageClick(page) {

        const {dispatch, selectedSubreddit} = this.props
        const start = (page - 1) * 20
        dispatch(invalidateSubreddit(selectedSubreddit))
        dispatch(fetchPostsIfNeeded(selectedSubreddit, start))
        history.push(`/bean/${page}`)
    }

    handleChange(nextSubreddit) {
        const {start} = this.props
        this.props.dispatch(selectSubreddit(nextSubreddit, start))
    }

    handleRefreshClick(e) {
        e.preventDefault()

        const {dispatch, selectedSubreddit, start} = this.props
        dispatch(invalidateSubreddit(selectedSubreddit, start))
        dispatch(fetchPostsIfNeeded(selectedSubreddit, start))
    }
}

Bean.propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const {selectedSubreddit, postsBySubreddit, tags} = state
    const {
        isFetching,
        lastUpdated,
        items: posts,
        start,
        total
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: [],
        start: 0,
        total: 20
    }

    return {
        selectedSubreddit,
        posts,
        tags,
        isFetching,
        lastUpdated,
        start,
        total,
    }
}

export default connect(mapStateToProps)(Bean)