import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Input, Button, Col} from 'antd'


class AddTodo extends Component {

    render() {
        return (
            <div>
                <Col span={16}>
                    <Input placeholder='record to do' id='input'/>
                </Col>
                <Col span={8}>
                    <Button type='primary' onClick={() => this.handleClick()}>
                        Add
                    </Button>
                </Col>
            </div>
        )
    }

    handleClick(e) {
        const node = document.querySelector('#input')
        const text = node.value.trim()
        if(!text){
            console.log('NOT NULL')
            return
        }
        this.props.onAddClick(text)
        node.value = ''
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
}

export default AddTodo