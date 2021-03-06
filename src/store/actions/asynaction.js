import fetch from 'isomorphic-fetch'
/*
* 类型
* SELECT_SUBREDDIT 所选项
* INVALIDATE_SUBREDDIT
* REQUEST_POSTS 请求数据
* RECEIVE_POSTS 接受数据
* */

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

/*
* 函数
* */

export function selectSubreddit(subreddit) {
    return {
        type: SELECT_SUBREDDIT,
        subreddit
    }
}

export function invalidateSubreddit(subreddit) {
    return {
        type: INVALIDATE_SUBREDDIT,
        subreddit
    }
}

export function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}

export function receivePosts(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data?json.data.children.map(child => child.data):[],
        receivedAt: Date.now()
    }
}

function fetchPosts(subreddit) {
    // const url = `/v2/movie/top250`
    const url = `http://www.reddit.com/r/${subreddit}.json`
    return dispatch => {
        dispatch(requestPosts(subreddit))
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(subreddit, json)))
    }
}
function shouldFetchPosts(state, subreddit) {
    const posts = state.postsBySubreddit[subreddit]
    if (!posts) {
        return true
    } else if (posts.isFetching) {
        return false
    } else {
        return posts.didInvalidate
    }
}

export function fetchPostsIfNeeded(subreddit) {

    // 注意这个函数也接收了 getState() 方法
    // 它让你选择接下来 dispatch 什么。

    // 当缓存的值是可用时，
    // 减少网络请求很有用。

    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), subreddit)) {
            // 在 thunk 里 dispatch 另一个 thunk！
            return dispatch(fetchPosts(subreddit))
        } else {
            // 告诉调用代码不需要再等待。
            return Promise.resolve()
        }
    }
}
