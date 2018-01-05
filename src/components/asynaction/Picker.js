import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd'
const Option = Select.Option

class Picker extends Component {
    render() {
        const {value, onChange, options} = this.props
        return (
            <div>
                <h1>{value}</h1>
                <Select defaultValue={value} style={{ width: 120 }} onChange={e=>onChange(e)}>
                    {
                        options.map(option=>
                            <Option value={option} key={option}>{option}</Option>
                        )
                    }
                </Select>
            </div>
        )
    }
}

Picker.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Picker
