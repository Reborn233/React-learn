import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Radio,Col} from 'antd'

class Footer extends Component{
    renderFilter(){
        const {filter,onFilterChange} = this.props

        return (
            <Radio.Group value={filter} onChange={(e)=>onFilterChange(e.target.value)}>
                <Radio.Button value="SHOW_ALL">全部</Radio.Button>
                <Radio.Button value="SHOW_COMPLETED">已完成</Radio.Button>
                <Radio.Button value="SHOW_ACTIVE">进行中</Radio.Button>
            </Radio.Group>

        )
    }

    render() {
        return (
            <Col span={24}>
                <br/>
                {this.renderFilter()}
            </Col>
        )
    }
}

Footer.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}

export default Footer