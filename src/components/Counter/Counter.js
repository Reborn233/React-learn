import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button} from 'antd'
const ButtonGroup = Button.Group

class Counter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props
        return (
            <div>
                Clicked: {value} &nbsp;times
                <br/>
                <ButtonGroup>
                    <Button onClick={()=>onIncrement()}>+</Button>
                    <Button onClick={()=>onDecrement()}>-</Button>
                </ButtonGroup>
                {' '}
                <br/>
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
