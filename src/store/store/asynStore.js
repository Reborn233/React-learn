import thunkMiddleware from 'redux-thunk'
// import {createLogger} from 'redux-logger'
import {createStore, applyMiddleware} from 'redux'
import asynaction from '../reducers/asynaction'


// const loggerMiddleware = createLogger()
const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    // loggerMiddleware
)(createStore)


export default function asynStore(initialState) {
    return createStoreWithMiddleware(asynaction,initialState)
}