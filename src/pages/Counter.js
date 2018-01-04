import React from 'react'
import Counter from '../container/Counter'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import countApp from '../store/reducers/counter'

const store = createStore(countApp)

const Count = () => (

    <Provider store={store}>
        <Counter/>
    </Provider>
)

export default Count
