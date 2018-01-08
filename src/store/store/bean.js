import thunkMiddleware from 'redux-thunk'
// import {createLogger} from 'redux-logger'
import {createStore, applyMiddleware} from 'redux'
import bean from '../reducers/bean'


// const loggerMiddleware = createLogger()
const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    // loggerMiddleware
)(createStore)


export default function beanApp(initialState) {
    return createStoreWithMiddleware(bean,initialState)
}