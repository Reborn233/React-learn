import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class Counter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props
        return (
            <div>
                Clicked: {value} times
                {' '}
                <br/>
                <button onClick={onIncrement}>
                    +
                </button>
                {' '}
                <button onClick={onDecrement}>
                    -
                </button>
                {' '}
                <br/>
                <Link to='/home'>To Home</Link>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default Counter
