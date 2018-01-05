import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increase, decrease} from '../store/actions/counter'
import Counter from '../components/Counter/Counter'
import history from "../lib/tools/history"

class CountApp extends Component {
    render() {
        const {dispatch, visibleCount} = this.props
        return (
            <div>
                <Counter
                    value={visibleCount.count}
                    onIncrement={() => dispatch(increase(1))
                    }
                    onDecrement={() => dispatch(decrease(1))
                    }
                />
                <a onClick={history.goBack}>back</a>
            </div>
        )
    }
}

CountApp.propTypes = {
    visibleCount: PropTypes.object.isRequired,
}
function count(state) {
    return {
        visibleCount: state.counts
    }
}

export default connect(count)(CountApp)