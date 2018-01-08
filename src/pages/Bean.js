import React from 'react'
import Bean from '../container/bean'
import {Provider} from 'react-redux'
import douban from '../store/store/bean'

const store = douban()

const Beans = () => (

    <Provider store={store}>
        <Bean/>
    </Provider>
)

export default Beans
