import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {List,Col} from 'antd'

class TodoList extends Component{
    render(){
        const {todos,onTodoClick,onDelClick} = this.props
        return(
            <Col span={24}>
                <br/>
                <List
                    bordered
                    dataSource={todos}
                    renderItem={(item,index)=>(
                        <List.Item
                            style={{
                                textDecoration: item.completed ? 'line-through' : 'none'
                            }}
                            actions={[
                                <a onClick={()=>onDelClick(index)}>del</a>,
                                <a onClick={()=>onTodoClick(index)}>complete</a>
                            ]}
                        >{item.text}</List.Item>
                    )}
                >

                </List>
            </Col>
        )
    }
}

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
}

export default TodoList