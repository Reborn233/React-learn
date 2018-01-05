/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO'
export const DEL_TODO = 'DEL_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const UNDO = 'UNDO'
export const REDO = 'REDO'

/*
 * 其它的常量
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action 创建函数
 */

export function addTodo(text) {
    return { type: ADD_TODO, text }
}

export function delTodo(index) {
    return { type: DEL_TODO, index }
}

export function completeTodo(index) {
    return { type: COMPLETE_TODO, index }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}

export function undo(index) {
    return { type: UNDO, index }
}

export function redo(index) {
    return { type: REDO, index }
}